import { SignUpForm } from "@/modules/auth/components";
import { Box, Container, Stack } from "@mui/material";

// TODO: refactor form logic into seperate component
export const SignUpPage = () => {
  return (
    <Container>
      <Stack alignItems="center">
        <Box width={{ xs: "100%", sm: "400px" }}>
          <SignUpForm />
        </Box>
      </Stack>
    </Container>
  );
};
