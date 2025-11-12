import { DAVID_BUTSCH_LOGO_FULL_URL, DAVID_BUTSCH_RESUME_URL } from "@/common";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import { ContactDialog } from "@/modules/home";
import { useState } from "react";

const Logo = () => {
  return (
    <Box flex={1} display="flex" alignItems="center">
      <Link to="/" style={{ height: 32 }}>
        <img src={DAVID_BUTSCH_LOGO_FULL_URL} height={32} />
      </Link>
    </Box>
  );
};

// Displays page links
const NavigationLinks = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <>
      <ContactDialog open={contactDialogOpen} setOpen={setContactDialogOpen} />
      <Stack direction="row" justifyContent="end" gap={1.5} flex={1}>
        <a
          href={DAVID_BUTSCH_RESUME_URL}
          target="_blank"
          style={{
            color: "white",
          }}
        >
          <Button variant="outlined" color="inherit">
            Resume
          </Button>
        </a>
        <Button
          onClick={() => setContactDialogOpen(true)}
          variant="outlined"
          color="inherit"
        >
          Contact
        </Button>
      </Stack>
    </>
  );
};

export const NavBar = () => {
  return (
    <AppBar
      position="absolute"
      color="inherit"
      sx={{ bgcolor: "transparent" }}
      elevation={0}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          sx={{
            height: 72,
          }}
        >
          <Stack justifyContent="center" direction="row" width="100%">
            <Logo />
            <NavigationLinks />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
