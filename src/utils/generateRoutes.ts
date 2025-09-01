export const generateRoutes = (sidebarItems) => {
  const structuredItems = sidebarItems.map((item) => ({
    Component: item.component,
    path: item.url,
  }));

  return structuredItems;
};
