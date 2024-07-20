import Sidebar from "@/app/admin/_components/sidebar";
import Header from "./_components/ui/header";
import MiniSidebar from "./_components/ui/minisidebar";

export default function page() {
  return (
    <div className="w-full h-full">
      <Sidebar />
      <main className="w-full h-full ">
        <Header />
        <MiniSidebar />
        <div className="p-5 pt-[40px] ">
          <div className="lg:pl-[300px] lg:pr-[320px] md:pl-[310px] md:pr-[320px] mt-10 p-2 h-[110vh] ">
            <div className="bg-blue-800">asd</div>
          </div>
        </div>
      </main>
    </div>
  );
}
