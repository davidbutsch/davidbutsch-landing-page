import { ASSETS_URL } from "@/common";
import { Container, Typography } from "@mui/material";
import { Project, ProjectProps } from "./Project";

const projects: ProjectProps[] = [
  {
    title: "Zyae Music",
    description: "Free and unlimited music streaming.",
    homeUrl: "https://davidbutsch.com/music",
    logoUrl: `${ASSETS_URL}/Projects/Zyae-Music/Zyae-Music-Logo.svg`,
    imageUrl: `${ASSETS_URL}/Projects/Zyae-Music/grid.svg`,
    features: [
      { icon: "share", label: "Shareable Playlists" },
      { icon: "local_fire_department", label: "Trending Tracks & Artists" },
      { icon: "favorite", label: "Save Albums & Playlists" },
      { icon: "music_note", label: "Smart Song Suggestions" },
    ],
  },
];

export const Projects = () => {
  return (
    <Container sx={{}}>
      <Typography variant="h4" mb={6}>
        Projects
      </Typography>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </Container>
  );
};
