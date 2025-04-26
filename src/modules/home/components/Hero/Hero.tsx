import { HERO_IMAGE_URL } from "@/common";
import { Container, Stack } from "@mui/material";
import { useState } from "react";
import { ContactDialog } from "../ContactDialog";
import { HeroGradient } from "./HeroGradient";
import { HeroImage } from "./HeroImage";
import { HeroTypography } from "./HeroTypography";

export const Hero = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <Container>
      <HeroGradient />
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
        <HeroImage url={HERO_IMAGE_URL} />
      </Stack>
    </Container>
  );
};
