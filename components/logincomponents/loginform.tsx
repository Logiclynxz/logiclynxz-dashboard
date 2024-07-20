import { Label } from "@radix-ui/react-label";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";



export default function LoginForm() {
    return (
        <div className="w-[500px]">
            <Card className=" p-4 py-[50px] lg:p-[50px] md:p-[50px] bg-transparent backdrop-blur-[10px] backdrop-brightness-[98%]">
                <h1 className="text-[25px] font-bold text-center my-4 logo-font">LOGICLYNXZ</h1>
                <Input type="email" id="email" placeholder="Email" className="my-4" />
                <Input type="password" id="password" placeholder="Password" className="my-4" />
                <div className="flex items-center space-x-2 my-4">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember Me
                    </label>
                </div>

                <Button className="w-full bg-blue-500">Login</Button>

                <hr className="border-b border-black my-4" />
                <div className="text-center mb-2">
                    <span className="text-[12px] ">For Registered Users only</span>

                </div>
            </Card>
        </div>
    );
}