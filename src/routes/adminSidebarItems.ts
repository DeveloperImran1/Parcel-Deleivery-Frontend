import AllParcel from "@/pages/Admin/AllParcel";
import AllUser from "@/pages/Admin/AllUser";
import Analytics from "@/pages/Admin/Analytics";
import Profile from "@/pages/Profile";
import {
  IconDashboard,
  IconFolder,
  IconListDetails,
} from "@tabler/icons-react";
import { User } from "lucide-react";

export const adminSidebarItems = [
  {
    title: "Analytics",
    url: "/admin/analytics",
    component: Analytics,
    icon: IconDashboard,
  },
  {
    title: "Profile",
    url: "/admin/my-profile",
    component: Profile,
    icon: User,
  },

  {
    title: "All User",
    url: "/admin/all-user",
    icon: IconListDetails,
    component: AllUser,
  },
  {
    title: "All Parcel",
    url: "/admin/all-parcel",
    icon: IconFolder,
    component: AllParcel,
  },
];
