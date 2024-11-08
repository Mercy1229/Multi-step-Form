import { Button } from "./ui/button";
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';
import { Card, CardContent, CardFooter } from "./ui/card";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { planinfoAdded } from "../infoSlice";
import { AppDispatch } from "../store";
import { RootState } from "../store";

interface Plan {
  id: number;
  image: string;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  benefit: string;
}

function SelectPlan() {
  const plans: Plan[] = [
    { 
      id: 1, 
      title: 'Arcade', 
      image: Arcade, 
      monthlyPrice: 9, 
      yearlyPrice: 90, 
      benefit: '2 months free' 
    },
    { 
      id: 2, 
      title: 'Advanced', 
      image: Advanced, 
      monthlyPrice: 12, 
      yearlyPrice: 120, 
      benefit: '2 months free' 
    },
    { 
      id: 3, 
      title: 'Pro', 
      image: Pro, 
      monthlyPrice: 15, 
      yearlyPrice: 150, 
      benefit: '2 months free' 
    },
  ];

  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const info = useSelector((state: RootState) => state.info);
  const dispatch = useDispatch<AppDispatch>();
  const toggleBillingPlan = () => {
    setIsYearly(!isYearly);
  };
  const labelStyle = (active: boolean) => ({
    color: active ? "black" : "hsl(231, 11%, 63%)",
    fontWeight: active ? "bold" : "normal",
  });
  const handleSelectCard = (plan: Plan) => {
    setSelectedPlanId(plan.id);
    dispatch(planinfoAdded({
      id: plan.id,
      title: plan.title,
      image: plan.image,
      monthlyPrice: !isYearly ? plan.monthlyPrice : 0,
      yearlyPrice: isYearly ? plan.yearlyPrice : 0,
      benefit: isYearly ? plan.benefit : 'no',
      payPlan: isYearly ? 'Yearly' : 'Monthly', 
    }));
  };
  return (
    <div className="w-full mx-auto">
      <h1 className='text-4xl font-bold mt-10 font-ubuntu text-MarineBlue'>Select your plan</h1>
      <p className='text-md mb-5 mt-3 text-gray-400'>You have the option of monthly or yearly billing.</p>
      
      <div className="flex flex-row gap-5 sm:flex-wrap p-2">
        {plans.map((plan) => (
          <button onClick={() => handleSelectCard(plan)} key={plan.id}>
            <Card className={`${selectedPlanId === plan.id ? 'border-purple-700' : ''}`}>
              <CardContent className="mt-2">
                <img src={plan.image} alt={plan.title} className="mx-auto"/>
              </CardContent>
              <CardFooter className="block">
                <p className="text-MarineBlue font-bold">{plan.title}</p>
                <p className="text-sm text-gray-500">{isYearly ? `$${plan.yearlyPrice}/yr` : `$${plan.monthlyPrice}/mo`}</p>
                {isYearly && <p className="text-sm text-gray-500">{plan.benefit}</p>}
              </CardFooter>
            </Card>
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2 mt-2 ms-10 h-16">
        <label htmlFor="billing-switch" style={labelStyle(!isYearly)} className="text-base">Monthly</label>
        <Switch
          id="billing-switch"
          onCheckedChange={toggleBillingPlan}
          checked={isYearly}
          className="rounded-full transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="billing-switch" style={labelStyle(isYearly)} className="text-base">Yearly</label>
      </div>

      <div className='flex flex-row justify-between mt-8 mb-4'> 
        <Link to="/">
          <Button className='bg-white text-MarineBlue hover:bg-white'>Go Back</Button>
        </Link>
        <Link to="/addons">
          <Button className=' bg-PurplishBlue'>Next Step</Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectPlan;
