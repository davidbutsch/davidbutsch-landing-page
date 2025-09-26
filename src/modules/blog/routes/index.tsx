import { AppLayout } from "@/modules/layout";
import { Outlet, RouteObject } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { PostPage } from "./PostPage";

export const blogRoutes: RouteObject[] = [
  {
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/post/:postId", element: <PostPage /> },
    ],
  },
];
