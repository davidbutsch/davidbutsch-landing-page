import { getJot, getPost } from "@/modules/blog";
import { Card, CardActionArea, CardContent, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PostCardDate } from "./PostCardDate";
import { PostCardPreviewText } from "./PostCardPreviewText";
import { PostCardTags } from "./PostCardTags";
import { PostCardTitle } from "./PostCardTitle";

export type PostCardProps = {
  postId: string;
};

export const PostCard = (props: PostCardProps) => {
  const { postId } = props;

  const navigate = useNavigate();

  const onClick = () => navigate(`/blog/post/${jot?.id}`);

  // Get post
  const getPostQuery = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
  });
  const post = getPostQuery.data;

  // Get Jot
  const getJotQuery = useQuery({
    queryKey: ["jot", postId],
    queryFn: () => getJot(postId),
    enabled: !!post,
  });
  const jot = getJotQuery.data;

  return (
    <Card variant="outlined">
      <CardActionArea onClick={onClick} disabled={!jot}>
        <CardContent>
          <Stack
            // Constant card height
            height="140px"
          >
            <PostCardTitle title={jot?.title} />
            <PostCardPreviewText html={jot?.html} />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="end"
              mt="auto"
            >
              <PostCardTags tags={post?.tags} />
              <PostCardDate createdAt={post?.createdAt} />
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
