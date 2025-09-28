import {
  BlogPromotional,
  Collaborations,
  Hero,
  Projects,
  Skills,
} from "@/modules/home";
import { Stack } from "@mui/material";

export const HomePage = () => {
  return (
    <Stack direction="column" gap={15} pb={15}>
      <Hero />
      <BlogPromotional />

      <Collaborations />
      <Projects />
      <Skills />
    </Stack>
  );
};
