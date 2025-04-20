import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    white: PaletteColor;
  }
  interface PaletteOptions {
    white: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

declare module "@mui/material/Icon" {
  interface IconPropsColorOverrides {
    white: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    white: true;
  }
}
