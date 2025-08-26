import Analytics from "@/pages/Admin/Analytics";
import { IconDashboard, IconListDetails } from "@tabler/icons-react";
export const senderSidebarItems = [
  {
    title: "Analytics",
    url: "/sender/analytics",
    component: Analytics,
    icon: IconDashboard,
  },

  {
    title: "Lifecycle",
    url: "/sender/lifesicle",
    icon: IconListDetails,
    component: Analytics,
  },
];
