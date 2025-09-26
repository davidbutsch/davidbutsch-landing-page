import { getAllPosts, PostCard } from "@/modules/blog";
import { Container, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const BlogPage = () => {
  // Get product
  const getAllPostsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });
  const posts = getAllPostsQuery.data;

  // all of this is ai slop sorry

  // group posts by year
  const postsByYear = posts
    ? posts.reduce<Record<string, typeof posts>>((acc, post) => {
        const year = new Date(post.createdAt).getFullYear().toString();
        if (!acc[year]) acc[year] = [];
        acc[year].push(post);
        return acc;
      }, {})
    : {};

  return (
    <Container>
      {/* display posts by year */}
      {Object.entries(postsByYear)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, yearPosts]) => (
          <div key={year}>
            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
              {year}
            </Typography>
            <Grid container spacing={2} direction="row">
              {yearPosts.map((post) => (
                <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <PostCard postId={post.id} jotId={post.jotId} />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
    </Container>
  );
};
