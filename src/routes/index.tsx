import App from "@/App";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { role } from "@/constant/role";
import Login from "@/pages/Authentication/Login";
import Register from "@/pages/Authentication/Register";
import Verify from "@/pages/Authentication/Verify";
import About from "@/pages/Public/About";
import Contact from "@/pages/Public/Contact";
import Faq from "@/pages/Public/Faq";
import Features from "@/pages/Public/Features";
import HomePage from "@/pages/Public/HomePage";
import UnAuthorized from "@/pages/Public/Unauthorized";
import { generateRoutes } from "@/utils/generateRoutes";
import withAuth from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: HomePage,
      },

      {
        Component: About,
        path: "about",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: Faq,
        path: "faq",
      },
      {
        Component: withAuth(Features, [role.receiver]),
        path: "features",
      },
      {
        Component: Verify,
        path: "verify",
      },
      {
        Component: withAuth(UnAuthorized),
        path: "unauthorized",
      },
    ],
  },

  {
    Component: withAuth(DashboardLayout, [role.admin]),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics"></Navigate> },

      // aivabe generateRoutes function ke call kore nia aste pari datake.
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, [role.sender]),
    path: "/sender",
    children: [
      { index: true, element: <Navigate to="/sender/analytics"></Navigate> },

      // aivabe generateRoutes function ke call kore nia aste pari datake.
      ...generateRoutes(senderSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, [role.receiver]),
    path: "/receiver",
    children: [
      { index: true, element: <Navigate to="/receiver/analytics"></Navigate> },

      // aivabe generateRoutes function ke call kore nia aste pari datake.
      ...generateRoutes(receiverSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
]);
