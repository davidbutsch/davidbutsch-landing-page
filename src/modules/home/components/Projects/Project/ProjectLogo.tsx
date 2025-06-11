import { Card } from "@mui/material";

export type ProjectLogoProps = {
  src: string;
};

export const ProjectLogo = (props: ProjectLogoProps) => {
  const { src } = props;

  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",

        width: "fit-content",
        aspectRatio: 1 / 1,
        height: 64,

        zIndex: 1,
      }}
    >
      <img src={src} />
    </Card>
  );
};
