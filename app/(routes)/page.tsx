import { RunningTask } from "./_components/ui/runningtask";
import { Revenue } from "./_components/ui/revenue";
import AverageRevenue from "./_components/ui/averagerevenue";
import Members from "./_components/ui/members";
import Task from "./_components/ui/task";

import { DataTable } from "./_components/datatable";

export default async function page() {
  // CHECK AUTH
  // CONDITION IF NOT LOGGED IN GO TO /login

  return (
    <main className="grid grid-cols-5 grid-row-10 flex-2 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto h-full">
      <div className="col-span-5 md:col-span-2 lg:col-span-1  row-span-1 w-full ">
        <div className="h-full row-span-2">
          <RunningTask />
        </div>
      </div>
      <div className="col-span-5 md:col-span-3 lg:col-span-3  w-full row-span-1">
        <div className="h-full">
          <Revenue />
        </div>
      </div>
      <div className="col-span-5 md:col-span-5 lg:col-span-1 w-full ">
        <AverageRevenue />
      </div>
      <div className="col-span-5 md:col-span-5 lg:col-span-2 ">
        <Members />
      </div>
      <div className="col-span-5 md:col-span-5 lg:col-span-3  w-full ">
        <Task />
      </div>
      <div className="col-span-5 h-[50vh] w-full ">
        <DataTable />
      </div>
    </main>
  );
}
