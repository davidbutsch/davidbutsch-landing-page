import {
  HERO_HEADER,
  HERO_LINK_BUTTONS,
  HERO_SUBTITLE,
} from "@/modules/home/constants";
import { Button, Icon, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export type HeroTypographyOptions = {
  setContactDialogOpen: (value: boolean) => void;
};

export const HeroTypography = ({
  setContactDialogOpen,
}: HeroTypographyOptions) => {
  return (
    <Stack
      gap={4}
      pb={{ xs: 0, md: 5 }} // add 40px padding from bottom of screen
    >
      <Typography
        sx={{
          typography: { xs: "h3", lg: "h2" },
          fontWeight: "bold !important",
        }}
      >
        {HERO_HEADER}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {HERO_SUBTITLE}
      </Typography>
      <Button
        onClick={() => setContactDialogOpen(true)}
        size="large"
        variant="contained"
        sx={{
          marginBottom: { xs: 2, md: "auto" },
          width: "fit-content",
        }}
      >
        Get in contact
      </Button>
      <Stack direction="row" spacing={3}>
        {HERO_LINK_BUTTONS.map((linkButton) => (
          <Link
            key={linkButton.to}
            to={linkButton.to}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Icon
              className="my-icons"
              sx={{
                color: (theme) => theme.palette.text.secondary,

                "&:hover": {
                  color: "inherit",
                },
              }}
            >
              {linkButton.icon}
            </Icon>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};
