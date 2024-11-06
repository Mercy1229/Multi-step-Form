import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InfoState {
  name: string;
  email: string;
  phone: string;
}

const initialState: InfoState = {
  name: '',
  email: '',
  phone: '',
};
console.log(initialState)
const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    infoAdded: (state, action: PayloadAction<InfoState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

export const { infoAdded } = infoSlice.actions;
export default infoSlice.reducer;
