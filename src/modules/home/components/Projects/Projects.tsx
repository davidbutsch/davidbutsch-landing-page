import { ASSETS_URL } from "@/common";
import { Container, Stack, Typography } from "@mui/material";
import { Project, ProjectProps } from "./Project";

const projects: ProjectProps[] = [
  {
    title: "Zyae Music",
    description: "Free and unlimited music streaming.",
    homeUrl: "https://music.zyae.net",
    logoUrl: `${ASSETS_URL}/Projects/Zyae-Music/Zyae-Music-Logo.svg`,
    imageUrl: `${ASSETS_URL}/Projects/Zyae-Music/grid.svg`,
    features: [
      { icon: "local_fire_department", label: "Trending Artists" },
      { icon: "favorite", label: "Save Music" },
      { icon: "music_note", label: "Autoplay" },
    ],
  },
  {
    title: "Jot",
    description: "The minimalist solution for collaborative note taking.",
    homeUrl: "https://instajot.app/",
    logoUrl: `${ASSETS_URL}/Projects/Jot/Jot-Logo-White-Padding.svg`,
    imageUrl: `${ASSETS_URL}/Projects/Jot/banner.png`,
    features: [
      { icon: "group", label: "Collaboration" },
      { icon: "upload_file", label: "File Uploads" },
      { icon: "edit_document", label: "WYSIWYG Editor" },
      { icon: "web", label: "Publish Jots" },
    ],
  },
];

export const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" mb={6}>
        Projects
      </Typography>
      <Stack gap={12}>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </Stack>
    </Container>
  );
};
