import { Card, CardContent } from "@/components/ui/card";
import { LogOut, Package2 } from "lucide-react";
import Image from "next/image";
import SidebarMenu from "./ui/sidebarmenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SidebarLogout from "./sidebarLogout";

export default function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="text-[20px] font-bold text-center my-1 logo-font">
              LOGICLYNXZ
            </span>
          </Link>
        </div>
        <div className="flex-1 px-3 ">
          <Card className="flex p-2 gap-2 my-4 rounded-full">
            <Avatar className="w-[50px] h-[50px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* <Image
              src="/profile.png"
              alt="userprofile"
              width={50}
              height={50}
              className="rounded-lg border"
            /> */}
            <div>
              <h6 className="font-semibold">Pablo Jab</h6>
              <small>Main Role Ni Niya</small>
            </div>
          </Card>
          <SidebarMenu />
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02 -chunk-0">
            <CardContent className="p-3">
              <SidebarLogout />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
