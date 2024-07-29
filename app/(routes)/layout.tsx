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
        {children}
      </div>
    </div>
  );
}
