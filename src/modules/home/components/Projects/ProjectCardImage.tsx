import { ProjectCardOptions, useScroll } from "@/modules/home";
import { Box } from "@mui/material";

export type ProjectCardImageOptions = {
  src: string;
};

export const ProjectCardImage = (props: ProjectCardOptions) => {
  const {
    image: { src },
  } = props;

  const { y } = useScroll();

  return (
    <Box
      sx={{
        position: "relative",

        flex: 1,

        maxHeight: "400px",

        maskImage: {
          xs: "linear-gradient(to top, #fff 80%, transparent)",
          md: "none",
        },
      }}
    >
      <Box
        component="img"
        src={src}
        sx={{
          // position: "absolute",
          width: "100%",
          transform: {
            // y increases as screen width narrows. this is a temporary solution
            xs: `translateY(-${(y - window.outerWidth) / 4}px)`,
            sm: `translateY(-${(y - 400) / 4}px)`,
            md: `translateY(-${(y + 150) / 4}px)`,
          },
        }}
      />
    </Box>
  );
};
