import { ASSETS_URL } from "@/common";
import { Collaboration } from "@/modules/home";
import { Container, Grid, Typography } from "@mui/material";
import { AddCollaborationCard } from "./AddCollaborationCard";
import { CollaborationCard } from "./CollaborationCard";

const collaborations: Collaboration[] = [
  {
    title: "DTE",
    description: "Coaching & Billing Platform",
    homeUrl: "https://www.dtefrisco.com",
    logoUrl: `${ASSETS_URL}/Collaborations/DTE/DTE-Logo.svg`,
    backgroundImageUrl: `${ASSETS_URL}/Collaborations/DTE/DTE-Skeleton.svg`,
  },
  {
    title: "BRD",
    description: "Digital Marketing Landing Page",
    homeUrl: "https://blackrobindigital.com",
    logoUrl: `${ASSETS_URL}/Collaborations/BRD/BRD-Logo.svg`,
    backgroundImageUrl: `${ASSETS_URL}/Collaborations/BRD/BRD-Skeleton.svg`,
  },
  {
    title: "Firelytics",
    description: "Beta Program Registration",
    homeUrl: "https://firelytics.ai",
    logoUrl: `${ASSETS_URL}/Collaborations/Firelytics/Firelytics-Logo.svg`,
    backgroundImageUrl: `${ASSETS_URL}/Collaborations/Firelytics/Firelytics-Skeleton.svg`,
  },
];

export const Collaborations = () => {
  return (
    <Container>
      <Typography variant="h4" mb={4}>
        Clients & Collaborations
      </Typography>
      <Grid container spacing={2}>
        {collaborations.map((collaboration) => (
          <Grid key={collaboration.title} size={{ xs: 12, sm: 6, lg: 4 }}>
            <CollaborationCard collaboration={collaboration} />
          </Grid>
        ))}
        <Grid key="0" size={{ xs: 12, sm: 6, lg: 4 }}>
          <AddCollaborationCard />
        </Grid>
      </Grid>
    </Container>
  );
};
