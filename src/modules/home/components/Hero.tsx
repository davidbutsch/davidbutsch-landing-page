import { HERO_URL } from "@/common";
import { Box, Button, Icon, Stack, Typography } from "@mui/material";
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

function HeroImage() {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: "none" },
        flex: 1,
      }}
    >
      <Box
        component="img"
        sx={{
          height: { md: "100vh" },
          maxHeight: "800px",
        }}
        src={HERO_URL}
      />
    </Box>
  );
}

export const Hero = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <>
      <ContactDialog open={contactDialogOpen} setOpen={setContactDialogOpen} />
      <Stack
        direction={{ sm: "column", md: "row" }}
        sx={{
          height: "calc(100vh - 72px)",
          maxHeight: { xs: "none", md: "800px" },
          overflow: { xs: "none", md: "hidden" },
        }}
      >
        <Stack
          gap={{ xs: 2, md: 4 }}
          sx={{
            padding: { xs: 2, sm: 4, lg: 6 },
            flex: { xs: 0, md: 1 },
          }}
        >
          <Typography
            sx={{
              typography: { xs: "h3", lg: "h2" },
              fontWeight: "bold !important",
            }}
          >
            I bring companies online.
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
        <HeroImage />
      </Stack>
    </>
  );
};
