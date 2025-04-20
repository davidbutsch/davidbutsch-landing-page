import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const typographyCustomizations: Components<Theme> = {
  MuiTypography: {
    styleOverrides: {
      root: {
        variants: [
          // H1
          {
            props: { variant: "h1" },
            style: {
              fontWeight: "bold",
            },
          },
          // H2
          {
            props: { variant: "h2" },
            style: {
              fontWeight: "bold",
            },
          },
          // H3
          {
            props: { variant: "h3" },
            style: {
              fontWeight: "bold",
            },
          },
          // H4
          {
            props: { variant: "h4" },
            style: {
              fontWeight: "bold",
            },
          },
        ],
      },
    },
  },
};
