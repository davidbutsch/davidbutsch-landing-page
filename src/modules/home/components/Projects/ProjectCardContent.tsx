import { ProjectCardOptions } from "@/modules/home";
import { alpha, Button, Chip, Icon, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export type ProjectCardContentOptions = {
  header: string;
  subtitle: string;
  skills: string[];
};

export const ProjectCardContent = (props: ProjectCardOptions) => {
  const {
    content: { header, subtitle, skills },
    color,
    links,
  } = props;

  return (
    <Stack gap={4} flex={1}>
      <Typography variant="h4" color={color}>
        {header}
      </Typography>
      <Stack direction="row" gap={1} flexWrap="wrap">
        {skills.map((skill) => (
          <Chip
            variant="filled"
            label={skill}
            sx={{ width: "fit-content", background: alpha(color, 0.1) }}
          />
        ))}
      </Stack>
      <Typography variant="h6" fontWeight="light">
        {subtitle}
      </Typography>
      <Stack direction="row" gap={1}>
        <Link to={links.app} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            color="white"
            endIcon={
              <Icon className="material-symbols-outlined">open_in_new</Icon>
            }
            sx={{
              maxWidth: "fit-content",
            }}
          >
            Open App
          </Button>
        </Link>
        <Link to={links.github} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outlined"
            color="white"
            endIcon={
              <Icon className="material-symbols-outlined">open_in_new</Icon>
            }
            sx={{
              maxWidth: "fit-content",
            }}
          >
            Github
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
