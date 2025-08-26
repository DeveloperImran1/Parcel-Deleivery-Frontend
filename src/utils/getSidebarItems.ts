import { role } from "@/constant/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { receiverSidebarItems } from "@/routes/receiverSidebarItems";
import { senderSidebarItems } from "@/routes/senderSidebarItems";
import type { TRole } from "@/types/auth.type";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return adminSidebarItems;
    case role.sender:
      return senderSidebarItems;
    case role.receiver:
      return receiverSidebarItems;

    default:
      return [];
  }
};
