import { getAllPosts, PostCard } from "@/modules/blog";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const CardsPreview = () => {
  const navigate = useNavigate();

  const onReadMore = () => navigate("/blog");

  const getAllPostsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });
  const posts = getAllPostsQuery.data?.slice(0, 6);

  if (posts?.length && posts.length != 0)
    return (
      <Stack alignItems="center">
        <Typography variant="h4" textAlign="center" mb={6}>
          Check out the Blog
        </Typography>
        <Box
          sx={{
            position: "relative",
            maskImage: "linear-gradient(to bottom, #FFFFFF, transparent)",
          }}
        >
          <Grid container spacing={2}>
            {posts?.map((post) => (
              <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <PostCard postId={post.id} jotId={post.jotId} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Button onClick={onReadMore} color="inherit" sx={{ px: 2 }}>
          Read More
        </Button>
      </Stack>
    );
};
