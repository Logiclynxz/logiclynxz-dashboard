import Link from "next/link";
import { LogOut, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SidebarMenu from "./_components/ui/sidebarmenu";
import Image from "next/image";
import MiniSidebar from "./_components/minisidebar";
import Header from "./_components/header";
import { Test } from "./test";

export default function page() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
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
            <Card className="flex p-2 gap-2 my-4">
              <Image
                src="/profile.png"
                alt="userprofile"
                width={50}
                height={50}
                className="rounded-lg border"
              />
              <div>
                <h6 className="font-semibold">Pablo E. Jab</h6>
                <small>Main Role Ni Niya</small>
              </div>
            </Card>
            <SidebarMenu />
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardContent className="p-3">
                <Button className="w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-2 flex-col gap-4 p-4 lg:gap-6 lg:p-6 ">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">
              You can start selling as soon as you add a product.You can start
              selling as soon as you add a product.You can start selling as soon
              as you add a product.You can start selling as soon as you add a
              product.You can start selling as soon as you add a product.You can
              start selling as soon as you add a product.You can start selling
              as soon as you add a product.You can start selling as soon as you
              add a product.You can start selling as soon as you add a
              product.You can start selling as soon as you add a product.You can
              start selling as soon as you add a product.You can start selling
              as soon as you add a product.You can start selling as soon as you
              add a product.You can start selling as soon as you add a product.
            </h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
