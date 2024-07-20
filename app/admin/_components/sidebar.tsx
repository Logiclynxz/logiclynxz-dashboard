import Image from "next/image";
import { Card } from "../../../components/ui/card";
import SidebarMenu from "./ui/sidebarmenu";

export default function Sidebar() {
  return (
    <div className="hidden bg-white dark:bg-[#030712] md:flex fixed flex-col sidebar gap-4 z-20 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <h1 className="text-[25px] font-bold text-center my-1 logo-font">
        LOGICLYNXZ
      </h1>
      <div className="grow">
        <Card className="flex p-1 gap-2">
          <Image
            src="/profile.png"
            alt="userprofile"
            width={50}
            height={50}
            className="rounded-lg border"
          />
          <div className="">
            <h6 className="font-semibold">John Doe</h6>
            <small>Main Role Ni Niya</small>
          </div>
        </Card>
        <div className="">
          <SidebarMenu />
        </div>
      </div>

      <div className="">Settings / Notification</div>
    </div>
  );
}
