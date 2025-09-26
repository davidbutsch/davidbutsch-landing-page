import { Jot, Post } from "@/modules/blog";
import { Box } from "@mui/material";
import { PostDate } from "./PostDate";
import { PostTags } from "./PostTags";
import { PostTitle } from "./PostTitle";

export type PostHeaderProps = {
  post: Post;
  jot: Jot;
};

export const PostHeader = (props: PostHeaderProps) => {
  const { post, jot } = props;

  return (
    <Box>
      <PostTitle title={jot.title} />
      <PostDate createdAt={post.createdAt} />
      <PostTags tags={post.tags} />
    </Box>
  );
};
