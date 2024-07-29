"use client";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SidebarProfile = () => {
  const { user } = useAuth();
  return (
    <Card className="flex p-2 gap-2 my-4 rounded-full">
      <Avatar className="w-[50px] h-[50px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        {user ? (
          <>
            <h6 className="font-semibold">{`${user?.firstName} ${user?.lastName}`}</h6>
            <small>{user?.role}</small>
          </>
        ) : (
          // loading
          <>
            <h6 className="font-semibold">Fetching ....</h6>
            <small>Fetching ....</small>
          </>
        )}
      </div>
    </Card>
  );
};

export default SidebarProfile;
