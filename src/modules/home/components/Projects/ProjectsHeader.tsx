import { useScroll } from "@/modules/home";
import { Typography } from "@mui/material";

const PROJECTS_HEADER_ID = "projects-header";

export const ProjectsHeader = () => {
  const { y } = useScroll();

  return (
    <Typography
      id={PROJECTS_HEADER_ID}
      sx={{
        position: "sticky",
        top: 0,
        ml: -y / 10,

        display: "flex",
        justifyContent: "center",

        color: (theme) => theme.palette.primary.main,
        opacity: 0.3,

        fontSize: { xs: 80, sm: 120 },
        fontWeight: 900,
        whiteSpace: "nowrap",

        "-webkit-user-select": "none", // Safari
        "user-select": "none", // Standard syntax

        zIndex: -1,
      }}
    >
      {new Array(20).fill("PROJECTS").join(" ")}
    </Typography>
  );
};
