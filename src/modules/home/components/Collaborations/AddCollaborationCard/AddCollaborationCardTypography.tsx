import { ContactDialog } from "@/modules/home";
import { Box, Icon, Link, Typography } from "@mui/material";
import { useState } from "react";

export const AddCollaborationCardTypography = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <>
      <ContactDialog open={contactDialogOpen} setOpen={setContactDialogOpen} />
      <Box position="relative">
        <Typography mt={4} variant="h5" gutterBottom>
          Your Project
        </Typography>
        <Link component="button" onClick={() => setContactDialogOpen(true)}>
          Get Started
          <Icon className="material-symbols-outlined" fontSize="small">
            chevron_right
          </Icon>
        </Link>
      </Box>
    </>
  );
};
