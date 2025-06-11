import { Box } from "@mui/material";

export type ProjectImageProps = {
  src: string;
};

export const ProjectImage = (props: ProjectImageProps) => {
  const { src } = props;

  return <Box component="img" src={src} />;
};
