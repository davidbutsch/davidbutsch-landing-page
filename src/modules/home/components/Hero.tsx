import { HERO_URL } from "@/common";
import { Box, Button, Container, Icon, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactDialog } from "./ContactDialog";

const links = [
  {
    icon: "github",
    to: "https://github.com/davidbutsch",
  },
  {
    icon: "linkedin",
    to: "https://www.linkedin.com/in/david-butsch-1a586a2b1",
  },
  {
    icon: "instagram",
    to: "https://www.instagram.com/davidbutsch22/",
  },
];

const HeroImage = () => {
  return (
    <Box
      component="img"
      ml="auto" // pushes image to the far right
      src={HERO_URL}
    />
  );
};

type HeroTypographyOptions = {
  setContactDialogOpen: (value: boolean) => void;
};

const HeroTypography = ({ setContactDialogOpen }: HeroTypographyOptions) => {
  return (
    <Stack
      gap={4}
      pb={5} // add 40px padding from bottom of screen
    >
      <Typography
        sx={{
          typography: { xs: "h3", lg: "h2" },
          fontWeight: "bold !important",
        }}
      >
        I bring companies to the web.
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Full-stack development, UI/UX design, and cloud infastructure—handled
        from start to finish.
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
        Let's talk
      </Button>
      <Stack direction="row" spacing={3}>
        {links.map((link) => (
          <Link
            to={link.to}
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
              {link.icon}
            </Icon>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export const Hero = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <Container>
      <ContactDialog open={contactDialogOpen} setOpen={setContactDialogOpen} />
      <Stack
        gap={{ xs: 4, sm: 8, md: 4, lg: 16 }}
        direction={{ sm: "column", md: "row" }}
        sx={{
          pt: 5,
          height: { xs: "inherit", md: "calc(100vh - 72px)" }, // computes visible desktop screen height taking into account navbar (72px).
          maxHeight: { xs: "none", md: "800px" }, // caps hero height for tall screens (unless mobile)
          overflowX: "clip",
        }}
      >
        <HeroTypography setContactDialogOpen={setContactDialogOpen} />
        <HeroImage />
      </Stack>
    </Container>
  );
};
