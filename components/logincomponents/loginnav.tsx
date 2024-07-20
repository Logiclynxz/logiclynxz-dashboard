import { ModeToggle } from "../ui/ModeToggle";

export default function LoginNav() {
    return (
        <div className="flex w-full justify-between h-[100px] items-center">
        <div className="">
          {/* <Image
        src="/"
        alt="Logo"
        fill
        priority /> */}
          Logo
        </div>
        <ModeToggle/>

        {/* <ModeToggle /> */}
      </div>
    );
}