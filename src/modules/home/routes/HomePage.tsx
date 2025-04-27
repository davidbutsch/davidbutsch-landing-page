import { Hero, Projects } from "@/modules/home";
import { Stack } from "@mui/material";

export const HomePage = () => {
  return (
    <Stack direction="column" gap={15} pb={15}>
      <Hero />
      <Projects />
    </Stack>
  );
};
