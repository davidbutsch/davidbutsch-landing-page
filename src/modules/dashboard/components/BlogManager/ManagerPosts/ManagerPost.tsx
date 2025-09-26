import { getJot, Post } from "@/modules/blog";
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import { useQuery } from "@tanstack/react-query";
import { Link as RouterLink } from "react-router-dom";
import { ManagerPostDeleteButton } from "./ManagerPostDeleteButton";
import { ManagerPostEditButton } from "./ManagerPostEditButton";

export type ManagerPostProps = {
  post: Post;
};

export const ManagerPost = (props: ManagerPostProps) => {
  const { post } = props;

  const getJotQuery = useQuery({
    queryKey: ["jot", post.jotId],
    queryFn: () => getJot(post.jotId),
  });
  const jot = getJotQuery.data;

  if (!jot) return "Loading...";

  return (
    <Stack direction="row" gap={1} alignItems="center">
      <Link
        component={RouterLink}
        to={`/blog/post/${post.id}`}
        underline="hover"
      >
        {jot.title}
      </Link>

      <ManagerPostEditButton post={post} />
      <ManagerPostDeleteButton postId={post.id} />
    </Stack>
  );
};
