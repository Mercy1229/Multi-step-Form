import { Button } from "./ui/button";
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';
import { Card, CardContent, CardFooter } from "./ui/card";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Link } from "react-router-dom";

function SelectPlan(){
    return(
        <div>
          <h1 className='text-3xl font-bold mt-10 font-ubuntu text-MarineBlue'>Select your plan</h1>
          <p className='text-sm  mb-5 text-gray-400'>You have the option of monthly or yearly billing.</p>
          <div className="flex flex-row gap-3 p-2">
          <Card className="hover:border-purple-700 pt-2">
            <CardContent>
                <img src={Arcade} />
            </CardContent>
            <CardFooter className="block">
                <p>Arcade</p>
                <p>$9/mo</p>
            </CardFooter>
          </Card>
          <Card className="hover:border-purple-700 pt-2">
            <CardContent>
            <img src={Advanced} />
            </CardContent>
            <CardFooter className="block">
                <p>Advanced</p>
                <p>$12/mo</p>
            </CardFooter>
          </Card>
          <Card className="hover:border-purple-700 pt-2">
            <CardContent>
            <img src={Pro} />
            </CardContent>
            <CardFooter className="block">
                <p>Pro</p>
                <p>$15/mo</p>
            </CardFooter>
          </Card>
</div>
    <div className="flex items-center space-x-2 mt-5 ms-10 h-16">
        <Label htmlFor="airplane-mode">Monthly</Label>
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Yearly</Label>
    </div>
        <div className='relative mb-16'>
          <Link to="/addons">
            <Button className='w-1/4 absolute transition-all translate-y-16 translate-x-72 bg-PurplishBlue'>Next Step</Button>
          </Link>
          <Link to="/">
            <Button className='w-1/4 absolute transition-all translate-y-16 translate-x-0 bg-white text-MarineBlue'>Go Back</Button>
          </Link>
        </div>   
    </div>
    )
}

export default SelectPlan;