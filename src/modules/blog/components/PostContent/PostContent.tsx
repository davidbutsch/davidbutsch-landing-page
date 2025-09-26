import { Jot, Post } from "@/modules/blog";
import { Box } from "@mui/material";
import { BackButton } from "./BackButton";
import { PostBody } from "./PostBody";
import { PostHeader } from "./PostHeader";

export type PostContentProps = {
  post: Post;
  jot: Jot;
};

export const PostContent = (props: PostContentProps) => {
  const { post, jot } = props;

  return (
    <Box pb={20}>
      <BackButton />
      <PostHeader post={post} jot={jot} />
      {/* body */}
      <PostBody html={jot.html || ""} />
    </Box>
  );
};
