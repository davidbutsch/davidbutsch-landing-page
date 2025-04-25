import { DAVID_BUTSCH_LOGO_URL } from "@/common";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import { ContactDialog } from "@/modules/home/components/ContactDialog";
import { useState } from "react";

const Logo = () => {
  return (
    <Box flex={1} display="flex" alignItems="center">
      <Link to="/" style={{ height: 32 }}>
        <img src={DAVID_BUTSCH_LOGO_URL} height={32} />
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
        <a href="/David_Butsch_Resume_Apr_25.pdf" download>
          <Button variant="outlined" color="white">
            Resume
          </Button>
        </a>
        <Button
          onClick={() => setContactDialogOpen(true)}
          variant="outlined"
          color="white"
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
      color="inherit"
      sx={{
        bgcolor: "background.default",
      }}
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
