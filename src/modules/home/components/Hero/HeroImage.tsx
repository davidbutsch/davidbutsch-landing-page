import { Box } from "@mui/material";

export type HeroImageOptions = {
  url: string;
};

export const HeroImage = (props: HeroImageOptions) => {
  const { url } = props;
  return (
    <Box
      component="img"
      ml="auto" // pushes image to the far right
      src={url}
    />
  );
};
