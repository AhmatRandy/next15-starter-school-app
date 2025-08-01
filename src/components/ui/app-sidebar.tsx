"use client";

import { menuItems } from "@/const/menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./breadcrumb";

import { usePathname } from "next/navigation";
import { role } from "@/lib/data";

export function BreadCrumb() {
  const pathname = usePathname();

  const allItems = menuItems.flatMap((cat) => cat.items);

  const matchedItems = allItems.filter(
    (item) => pathname.startsWith(item.href) && item.href !== "/"
  );
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...matchedItems.map((item) => ({ label: item.label, href: item.href })),
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbItem key={idx}>
            <BreadcrumbLink asChild>
              <Link href={item.href}>{item.label}</Link>
            </BreadcrumbLink>
            {idx < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-7">
        <SidebarGroup
          title="Main Navigation"
          className="flex flex-col space-y-3"
        >
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((data) =>
                data.items.map((item) => (
                  <>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        {item.visible.includes(role) && (
                          <Link href={item.href} key={item.label}>
                            <Image
                              src={item.icon}
                              alt=""
                              width={20}
                              height={20}
                            />

                            {item.label}
                          </Link>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </>
                ))
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
