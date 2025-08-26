import Analytics from "@/pages/Admin/Analytics";
import {
  IconDashboard,
  IconFolder,
  IconListDetails,
} from "@tabler/icons-react";

export const receiverSidebarItems = [
  {
    title: "Analytics",
    url: "/receiver/analytics",
    component: Analytics,
    icon: IconDashboard,
  },

  {
    title: "Lifecycle",
    url: "/receiver/lifesicle",
    icon: IconListDetails,
    component: Analytics,
  },

  {
    title: "Projects",
    url: "/receiver/project",
    icon: IconFolder,
    component: Analytics,
  },
];
