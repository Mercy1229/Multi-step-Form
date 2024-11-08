import React from "react";
import { useSelector } from 'react-redux';
import {  RootState } from "../store";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Confirmation = () => {
  const info = useSelector((state: RootState) => state.info);
  const price=info.planInfo.payPlan=='Monthly' ? info.planInfo.monthlyPrice:info.planInfo.yearlyPrice;
  return (
    <div>
        <h1 className="text-3xl font-bold mt-10 font-ubuntu mb-2 text-MarineBlue">Finishing up</h1>
        <p className="text-sm mb-5 text-gray-400">Double-check everything looks ok before confirming</p>
        <div className="flex flex-row mt-10 bg-slate-200 p-2 rounded-s-md">
        <div className="flex flex-row justify-between mt-5 my-auto">
                    <div className="flex flex-col w-52">
                    <p className="font-ubuntu text-MarineBlue font-bold">{info.planInfo.title}</p>
                    <p className="text-MarineBlue font-bold">({info.planInfo.payPlan})</p>
                    </div>
                    <div className="flex ms-48">
                    <p className="font-ubuntu text-gray-500">+$ {price} /{info.planInfo.payPlan === "Yearly" ? 'yr' : 'mo'}</p>
                </div>
                </div>  
        </div>
        <div className="flex flex-row">
            {info.Addon.map((Addon)=>{
                const price1=Addon.payPlan=='Monthly'? Addon.monthly :Addon.yearly;
                const total=price+price1;
            return(
                <div className="flex flex-col">
                <div  className="flex flex-row bg-slate-200 p-4 rounded-s-md">
                    <div className="flex w-60">
                    <p className="font-ubuntu text-gray-500 pe-2">{Addon.label}  </p>
                    </div>
                    <div className="flex ms-48">
                    <p className="font-ubuntu text-gray-500">+$ {price1} /{info.planInfo.payPlan === "Yearly" ? 'yr' : 'mo'}</p>
                </div>
                </div>
                <div className="flex flex-row justify-between mt-12">
                    <div className="flex w-52">
                        <p className="font-ubuntu text-gray-500">Total ({info.planInfo.payPlan === "Yearly" ? 'per year' : 'per month'})</p>
                    </div>
                    <div className="flex ms-48">
                        <p className="font-ubuntu text-gray-500 text-md">+$ {total} /{info.planInfo.payPlan === "Yearly" ? 'yr' : 'mo'}</p>
                    </div>
                </div>
                </div>
            )
            })}
        </div>
        <div className="mt-16 mb-5 flex flex-row justify-between">
        <Link to="/Addon">
          <Button className="bg-white hover:bg-white text-MarineBlue">Go Back</Button>
        </Link>
        <Link to="/Summary">
          <Button className="bg-PurplishBlue">Confirm</Button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;