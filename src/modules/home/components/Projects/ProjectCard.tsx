import {
  ProjectCardContent,
  ProjectCardContentOptions,
  ProjectCardImage,
  ProjectCardImageOptions,
} from "@/modules/home";
import { Card, Stack } from "@mui/material";

export type ProjectCardOptions = {
  content: ProjectCardContentOptions;
  image: ProjectCardImageOptions;
  color: string;
  backgroundColor: string;
  links: {
    app: string;
    github: string;
  };
};

export const ProjectCard = (props: ProjectCardOptions) => {
  const { backgroundColor } = props;

  return (
    <Card
      sx={{
        px: 4,
        py: 8,
        pb: { xs: 0, md: 8 },
        bgcolor: backgroundColor,
      }}
    >
      <Stack gap={4} direction={{ xs: "column", md: "row" }}>
        <ProjectCardContent {...props} />
        <ProjectCardImage {...props} />
      </Stack>
    </Card>
  );
};
