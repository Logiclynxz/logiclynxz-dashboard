import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
      suppressHydrationWarning={true}
    >
      <Sidebar />
      <div className="flex flex-col h-screen">
        <Header />
        <main className="grid grid-cols-5 grid-row-10 flex-2 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
