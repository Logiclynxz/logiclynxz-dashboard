import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  LogOut,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarMenu from "./_components/ui/sidebarmenu";
import Image from "next/image";
import Notification from "./_components/ui/notification";
import { ModeToggle } from "@/components/ui/ModeToggle";
import MiniSidebar from "./_components/ui/minisidebar";
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
        <header className="flex h-14 items-center gap-2 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>

                <SidebarMenu />
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Test</CardTitle>
                    <CardDescription>test</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <Notification />
          <ModeToggle />
          {/* <Button>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button> */}
        </header>
        <MiniSidebar />
        <main className="flex flex-1 flex-col gap-4  lg:gap-6  lg:pr-[320px]  pr-4  bg-[#fafbfb] dark:bg-[#0e1421]">
          <div className="col-span-5 lg:col-span-4 bg-white dark:bg-[#030712] p-4 lg:p-6 h-full">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
