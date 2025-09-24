import { useRoutes } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { Outlet, RouteObject } from "react-router-dom";

import { homeRoutes } from "@/modules/home";

import { authRoutes } from "@/modules/auth";

export const routes: RouteObject[] = [
  {
    element: (
      <>
        <CssBaseline />
        <Outlet />
      </>
    ),
    children: [
      {
        children: homeRoutes,
      },
      { children: authRoutes },
    ],
  },
];

export const AppRouter = () => {
  const route = useRoutes(routes);

  return route;
};
