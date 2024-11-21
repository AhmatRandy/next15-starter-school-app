import { Menu } from "@/components/ui/menu/menu";
import { Navbar } from "@/components/ui/navbar/navbar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="basis-[14%] md:basis-[8%] lg:basis-[16%]  ">
        <Menu />
      </div>

      {/* right */}
      <div className="basis-[86%] md:basis-[92%] lg:basis-[84%] bg-[#f7f8fa] overflow-y-scroll ">
        <div className="relative">
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
}
