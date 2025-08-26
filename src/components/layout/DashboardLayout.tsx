import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Outlet } from "react-router";
import Logo from "../modules/shared/Logo";

const sidebarItems = getSidebarItems("RECEIVER");
const data = {
  user: {
    name: "Md Imran",
    email: "demo@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function DashboardLayout({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5"
              >
                <Logo></Logo>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <NavMain items={sidebarItems} />
        </SidebarContent>

        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <Outlet></Outlet>
      </div>
    </SidebarProvider>
  );
}
