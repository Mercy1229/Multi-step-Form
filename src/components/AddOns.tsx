import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux';
import { AddonAdded, savePreviousAddonState } from "@/infoSlice";
import { AppDispatch } from "../store";

function AddOns() {
  interface Addon {
    id: number;
    label: string;
    detail: string;
    monthly: number;
    yearly: number;
    payplan?:string;
  }

  const Addons: Addon[] = [
    {
      id: 0,
      label: 'Online service',
      detail: 'Access to multiplayer games.',
      monthly: 1,
      yearly: 10,
    },
    {
      id: 1,
      label: 'Larger storage',
      detail: 'Extra 1TB of cloud save',
      monthly: 2,
      yearly: 20,
    },
    {
      id: 2,
      label: 'Customizable profile',
      detail: 'Extra 1TB of cloud save',
      monthly: 2,
      yearly: 20,
    }
  ];

  const dispatch = useDispatch<AppDispatch>();
  const planType = useSelector((state: RootState) => state.info.planInfo.payPlan);
  const info = useSelector((state: RootState) => state.info);
interface AddonData{
	id: number,
	label: string,
	monthly: number,
	yearly: number,
	payPlan?: string,
  }


  const getvalue = (addon: AddonData) => {
    dispatch(savePreviousAddonState());
    dispatch(AddonAdded({
      id: addon.id,
      label: addon.label,
      monthly: planType === "Monthly" ? addon.monthly : 0,
      yearly: planType === "Yearly" ? addon.yearly : 0,
      payPlan: planType,
    }));
  };

  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold mt-10 font-ubuntu text-MarineBlue">Pick add-ons</h1>
      <p className="text-sm mb-5 text-gray-400">You have the option of monthly or yearly billing.</p>
      <div className="flex flex-col w-full">
        {Addons.map((addon, index) => (
          <div className="items-top flex space-x-4 border rounded-md p-2 mt-5" key={addon.id}>
            <Checkbox value={addon.detail} onCheckedChange={() => getvalue(addon)} className="my-auto" />
            <div className="flex flex-col">
              <div className="flex flex-row justify-between w-full">
                <div className="flex w-52">
                <label htmlFor={`addon-${index}`} className="text-sm font-semibold text-MarineBlue">
                  {addon.label}
                </label>
                </div>
                <div className="flex ms-48">
                  <p className="text-sm font-semibold text-MarineBlue text-end justify-end"> 
                  ${planType === "Yearly" ? addon.yearly : addon.monthly}/{planType === "Yearly" ? 'yr' : 'mo'}
                </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{addon.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex flex-row justify-between">
        <Link to="/selectplan">
          <Button className="bg-white hover:bg-white text-MarineBlue">Go Back</Button>
        </Link>
        <Link to="/Confirmation">
          <Button className="bg-PurplishBlue">Next Step</Button>
        </Link>
      </div>
    </div>
  );
}

export default AddOns;
