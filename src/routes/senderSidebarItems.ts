import Profile from "@/pages/Profile";
import CreateParcel from "@/pages/Sender/CreateParcel";
import MyParcel from "@/pages/Sender/MyParcel";
import { IconListDetails } from "@tabler/icons-react";
import { User } from "lucide-react";
export const senderSidebarItems = [
  {
    title: "Profile",
    url: "/sender/my-profile",
    component: Profile,
    icon: User,
  },
  {
    title: "Create Parcel",
    url: "/sender/create-parcel",
    icon: IconListDetails,
    component: CreateParcel,
  },
  {
    title: "My Parcel",
    url: "/sender/my-parcel",
    icon: IconListDetails,
    component: MyParcel,
  },
];
