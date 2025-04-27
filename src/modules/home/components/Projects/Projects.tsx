import { Box, Container, Stack } from "@mui/material";
import { ProjectCard, ProjectCardOptions } from "./ProjectCard";
import { ProjectsHeader } from "./ProjectsHeader";

const PROJECT_CARDS: ProjectCardOptions[] = [
  {
    content: {
      header: "Zyae Music: Free and Unlimited Music Streaming",
      subtitle:
        "Zyae Music emulates a YouTube Music web client to make API requests. It programmatically downloads YouTube videos, extracts audio, and streams it to the user.",
      skills: [
        "Typescript",
        "React",
        "Express.js",
        "MongoDB",
        "Redis",
        "Socket.IO",
      ],
    },
    color: "#5CF2CA",
    backgroundColor: "#142227",
    image: {
      src: "/projects/zyae-music/grid.png",
    },
    links: {
      app: "https://davidbutsch.com/music/",
      github: "https://github.com/davidbutsch/zyae-music_v3",
    },
  },
];

export const Projects = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "clip",
      }}
    >
      <ProjectsHeader />

      <Container
        sx={{
          pt: 15,
        }}
      >
        <Stack>
          {PROJECT_CARDS.map((card) => (
            <ProjectCard {...card} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
