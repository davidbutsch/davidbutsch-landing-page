import { getJot, getPost, PostContent } from "@/modules/blog";
import { Container, Fade } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const PostPage = () => {
  const { postId } = useParams();
  if (!postId) return;

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
    <Container sx={{ maxWidth: "650px !important" }}>
      {post && jot && (
        <Fade in>
          <div>
            <PostContent jot={jot} post={post} />
          </div>
        </Fade>
      )}
    </Container>
  );
};
