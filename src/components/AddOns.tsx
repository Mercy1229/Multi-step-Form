import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

function AddOns(){
    return(
        <div className="mb-4">
          <h1 className='text-3xl font-bold mt-10 font-ubuntu text-MarineBlue'>Pick add-on's</h1>
          <p className='text-sm  mb-5 text-gray-400'>You have the option of monthly or yearly billing.</p>
          
		  <div className="flex flex-col w-full">
				<div className="items-top flex space-x-4 border rounded-md p-2">
					<Checkbox id="terms1" className="my-auto"/>
					<div className="">
						<div className="flex flex-row w-full justify-between">
							<label htmlFor="terms1"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Online service
							</label>
							<p className="ml-40 text-end">+$1/mo</p>
						</div>
						<p className="text-sm text-muted-foreground">Access to multiplayer games.</p>
					</div>
				</div>
				<div className="items-top flex space-x-4 border rounded-md p-2 mt-5">
					<Checkbox id="terms1"  className="my-auto" />
					<div className="grid gap-1.5 leading-none">
						<div className="flex flex-row w-full justify-between">
						<label htmlFor="terms1"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
							Larger storage
						</label>
						<p className="ml-40 text-end">+$2/mo</p>
					</div>
						<p className="text-sm text-muted-foreground">Extra 1Tb of cloud save</p>
					</div>
				</div>
				<div className="items-top flex space-x-4 border rounded-md p-2 mt-5">
					<Checkbox id="terms1" className="my-auto" />
					<div className="grid gap-1.5 leading-none">
						<div className="flex flex-row w-full justify-between">
							<label htmlFor="terms1"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
							Customizable profile
							</label>
							<p className="ml-32 text-end">+$2/mo</p>
						</div>
						<p className="text-sm text-muted-foreground">
						Custom theme on your profile
						</p>
					</div>
				</div>
</div>
        <div className='relative mb-16'>
		<Link to="/summary">
          <Button className='w-1/4 absolute transition-all translate-y-16 translate-x-72 bg-PurplishBlue'>Next Step</Button>
          </Link>
		  <Link to="/selectplan">
		  <Button className='w-1/4 absolute transition-all translate-y-16 translate-x-0 bg-white text-MarineBlue'>Go Back</Button>
		  </Link>
        </div>   
    </div>
    )
}

export default AddOns;