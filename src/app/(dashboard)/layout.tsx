import { Menu, Navbar } from "@/components/ui";

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
        <Navbar />
        {children}
      </div>
    </div>
  );
}
