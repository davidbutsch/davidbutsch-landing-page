import { AppLayout } from "@/modules/layout";
import { Outlet, RouteObject } from "react-router-dom";
import { LogInPage } from "./LogInPage";
import { SignUpPage } from "./SignUpPage";

export const authRoutes: RouteObject[] = [
  {
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      { path: "/log-in", element: <LogInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
  },
];
