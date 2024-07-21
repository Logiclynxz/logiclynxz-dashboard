import { Card } from "@/components/ui/card";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

export default function page() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col h-screen">
        <Header />
        <main className="grid grid-cols-5 grid-row-10 flex-2 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto h-full">
          <div className="col-span-5 md:col-span-2 lg:col-span-1 row-span-12  w-full ">
            <Card className="h-full w-full">1</Card>
          </div>
          <div className="col-span-5 md:col-span-3 lg:col-span-2   row-span-12 w-full ">
            <Card className="h-full w-full">2</Card>
          </div>
          <div className="col-span-5 md:col-span-5 lg:col-span-2 row-span-12 w-full ">
            <Card className="h-full w-full">3</Card>
          </div>
          <div className="col-span-5 md:col-span-5 lg:col-span-4 h-[50vh] w-full ">
            <Card className="h-full w-full">4</Card>
          </div>
          <div className="col-span-5 md:col-span-5 lg:col-span-1 h-[50vh] w-full ">
            <Card className="h-full w-full">5</Card>
          </div>
          <div className="col-span-5 h-[50vh] w-full ">
            <Card className="h-full w-full">6</Card>
          </div>
        </main>
      </div>
    </div>
  );
}
