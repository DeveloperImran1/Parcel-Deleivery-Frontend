export const generateRoutes = (sidebarItems) => {
  console.log("sidebar item", sidebarItems);
  return sidebarItems.map((item) => ({
    Component: item.component,
    path: item.url,
  }));
};
