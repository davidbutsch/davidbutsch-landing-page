import { Box } from "@mui/material";
import { useEffect } from "react";
import { Gradient } from "whatamesh";

const gradient = new Gradient();

export const HeroGradient = () => {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <Box
      component="canvas"
      id="gradient-canvas"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "120%",
        maxHeight: "1000px",

        "--gradient-color-1": "#6B52D0",
        "--gradient-color-2": "#D06B52",
        "--gradient-color-3": "#0D0D17",
        "--gradient-color-4": "#0D0D17",

        maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, .3), transparent)",

        zIndex: -1,
      }}
    >
      HeroGradient
    </Box>
  );
};
