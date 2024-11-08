import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

interface InfoState {
  name: string;
  email: string;
  phone: string;
}
const initialStateInfo: InfoState = {
  name: '',
  email: '',
  phone: '',
};

interface PlanInfoState {
  id: number;
  title: string;
  image: string;
  monthlyPrice: number;
  yearlyPrice: number;
  benefit: string;
  payPlan: string;
}
const initialStatePlanInfo: PlanInfoState = {
  id: 0,
  title: '',
  image: '',
  monthlyPrice: 0,
  yearlyPrice: 0,
  benefit: '',
  payPlan: ''
};

interface AddonState {
  id: number;
  label: string;
  monthly: number;
  yearly: number;
  payPlan: string;
}
const initialStateAddon: AddonState[] = [];

const infoSlice = createSlice({
  name: 'info',
  initialState: initialStateInfo,
  reducers: {
    infoAdded: (state, action: PayloadAction<InfoState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

const planInfoSlice = createSlice({
  name: 'planInfo',
  initialState: initialStatePlanInfo,
  reducers: {
    planinfoAdded: (state, action: PayloadAction<PlanInfoState>) => {
      return action.payload;
    },
  },
});

const AddonSlice = createSlice({
  name: 'Addon',
  initialState: initialStateAddon,
  reducers: {
    AddonAdded: (state, action: PayloadAction<AddonState>) => {
      const prevAddon = state.find(addon => addon.id === action.payload.id);
      if (prevAddon) {
        prevAddon.monthly = action.payload.monthly;
        prevAddon.yearly = action.payload.yearly;
        prevAddon.payPlan = action.payload.payPlan;
      } else {
        state.push(action.payload);
      }
    },
    savePreviousAddonState: (state) => {
      return [...state]; 
    },
  },
});

const rootReducer = combineReducers({
  info: infoSlice.reducer,
  planInfo: planInfoSlice.reducer,
  Addon: AddonSlice.reducer,
});

export default rootReducer;

export const { infoAdded } = infoSlice.actions;
export const { planinfoAdded } = planInfoSlice.actions;
export const { AddonAdded, savePreviousAddonState } = AddonSlice.actions;
