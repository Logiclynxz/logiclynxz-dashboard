import { Label } from "@radix-ui/react-label";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";
import { ModeToggle } from "../../../components/ui/ModeToggle";

export default function LoginForm() {
  //?  ADD CHECKS IF LOGGED IN GO TO '/'

  async function create(formData: FormData) {
    "use server";
    console.log(formData);
    console.log(formData.get("email"));
    console.log(formData.get("password"));
  }

  return (
    <div className="w-[500px]">
      <Card className=" border-b-4 border-b-blue-400  p-4 py-[50px] lg:p-[50px] md:p-[50px] bg-transparent backdrop-blur-[10px] backdrop-brightness-[98%]">
        <h1 className="text-[25px] font-bold text-center my-4 logo-font">
          LOGICLYNXZ
        </h1>
        <form action={create}>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            className="my-4"
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="my-4"
          />
          <div className="flex items-center space-x-2 my-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            >
              Remember Me
            </label>
          </div>

          <Button className="w-full bg-blue-400">Login</Button>
        </form>

        <hr className="border-b border-black my-4 dark:border-white" />
        <div className="text-center mb-2">
          <span className="text-[12px] ">For Registered Users only</span>
        </div>
      </Card>
    </div>
  );
}
