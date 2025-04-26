import { createTheme, PaletteOptions } from "@mui/material";

const { augmentColor } = createTheme().palette;

const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });

export const palette: PaletteOptions = {
  mode: "dark",
  primary: { main: "#6B52D0" },
  secondary: { main: "#D06B52" },
  white: createColor("#FFFFFF"),
  success: {
    main: "#50C878",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#A0A0B1",
  },
  background: {
    default: "#0D0D17",
    paper: "#161626",
  },
};
