import { getAllPosts } from "@/modules/blog";
import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ManagerPost } from "./ManagerPost";

export const ManagerPosts = () => {
  const getAllPostsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });
  const posts = getAllPostsQuery.data;

  if (!posts) return "Loading...";

  return (
    <Stack mt={2} gap={1}>
      {posts.map((post) => (
        <ManagerPost key={post.id} post={post} />
      ))}
    </Stack>
  );
};
