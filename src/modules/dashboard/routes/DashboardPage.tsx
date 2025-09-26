import { useAuthStore } from "@/modules/auth";
import { BlogManager } from "@/modules/dashboard";
import { Container, Stack, Typography } from "@mui/material";

export const DashboardPage = () => {
  const { user } = useAuthStore();

  if (!user) return;

  return (
    <Container>
      <Stack spacing={4}>
        <Typography variant="h3">Dashboard</Typography>
        <BlogManager />
      </Stack>
    </Container>
  );
};
