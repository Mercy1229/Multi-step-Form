import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useDispatch } from 'react-redux';
import { infoAdded } from "../infoSlice";
import { AppDispatch } from "../store";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup.string().matches(/^[0-9]+$/, "Phone number is not valid").required("Phone number is required"),
});

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const MultiStepForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmitHandler = (data: FormData) => {
    dispatch(infoAdded({
      name: data.name,
      email: data.email,
      phone: data.phone,
    }));
    
    // Navigate to the next step
    navigate("/selectplan");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="pe-10">
      <h1 className='text-3xl font-bold mt-10 font-ubuntu text-MarineBlue'>Personal Info</h1>
      <p className='text-sm mb-5 text-gray-400'>Please provide your name, email address, and phone number.</p>

      <div className='leading-normal mb-4'>
        <div className="flex flex-row justify-between">
          <label className='text-MarineBlue font-ubuntu text-sm font-bold'>Name</label>
          <p className="text-sm text-red-500">{errors.name?.message}</p>
        </div>
        <Input placeholder="Name" {...register("name")} className="text-sm font-semibold"/>
      </div>

      <div className='leading-normal mb-4'>
        <div className="flex flex-row justify-between">
          <label className='text-MarineBlue font-ubuntu text-sm font-bold'>Email Address</label>
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>
        <Input placeholder="Email" {...register("email")} type="email" className="text-sm font-semibold"/>
      </div>

      <div className='leading-normal mb-16'>
        <div className="flex flex-row justify-between">
          <label className='text-MarineBlue font-ubuntu text-sm font-bold'>Phone Number</label>
          <p className="text-sm text-red-500">{errors.phone?.message}</p>
        </div>
        <Input placeholder="Phone Number" {...register("phone")} type="text" className="text-sm font-semibold" />
      </div>

      <Button type="submit" className="absolute transition-all translate-x-60 bg-PurplishBlue hover:bg-purple-500">Next Step</Button>
    </form>
  );
};

export default MultiStepForm;
