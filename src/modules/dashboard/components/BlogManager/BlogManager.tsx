import { Stack, Typography } from "@mui/material";
import { ManagerPosts } from "./ManagerPosts";
import { NewPostButton } from "./NewPostButton";

export const BlogManager = () => {
  return (
    <Stack gap={4}>
      <Typography variant="h4">Blog Manager</Typography>

      <NewPostButton />
      <ManagerPosts />
    </Stack>
  );
};
