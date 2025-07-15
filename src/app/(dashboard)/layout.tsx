import { AppSidebar, BreadCrumb } from "@/components/ui/app-sidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger className="relative z-10 -left-3 top-72 w-10 h-10" />
      <main className="w-full p-2">
        <BreadCrumb />
        {children}
      </main>
    </SidebarProvider>
  );
}
