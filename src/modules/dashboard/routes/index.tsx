import { AppLayout } from "@/modules/layout";
import { Outlet, RouteObject } from "react-router-dom";
import { DashboardPage } from "./DashboardPage";

export const dashboardRoutes: RouteObject[] = [
  {
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [{ path: "/dashboard/", element: <DashboardPage /> }],
  },
];
