import App from "@/App";
import HomePage from "@/pages/Public/HomePage";
import Login from "@/pages/Public/Login";
import Register from "@/pages/Public/Register";
import { createBrowserRouter } from "react-router";

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
        Component: Login,
        path: "login",
      },
      {
        Component: Register,
        path: "register",
      },
      //   {
      //     Component: withAuth(About),
      //     path: "about",
      //   },
    ],
  },
  //   {
  //     Component: withAuth(DashboardLayout, role.admin as TRole),
  //     path: "/admin",
  //     children: [
  //       // {
  //       //   Component: Analytics,
  //       //   path: "analytics", // Aita alre relative path.
  //       //   // path: "/admin/analytics", // Aita alre absolute path. Bivinno somoi /routeName dia likhte hote pare. Tokhon parent path taw add korte hobe. Otherwise kaj korbena.
  //       // },
  //       // {
  //       //   Component: AddTour,
  //       //   path: "add-tour",
  //       // },

  //       // Navbar er dashboard a click korle, default vabe /admin route a jabe. But /admin route a kono page nai. So jodi kew sudho /admin route a hit kore, Tahole take navigate kore /admin/analytics route a pathia diba.
  //       { index: true, element: <Navigate to="/admin/analytics"></Navigate> },

  //       // aivabe generateRoutes function ke call kore nia aste pari datake.
  //       ...generateRoutes(adminSidebarItems),
  //     ],
  //   },
]);
