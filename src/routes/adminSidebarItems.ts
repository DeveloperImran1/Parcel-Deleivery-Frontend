import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types/auth.type";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    url: "#",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
];
