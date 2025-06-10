import { Collaboration } from "@/modules/home";
import { Container, Grid, Typography } from "@mui/material";
import { AddCollaborationCard } from "./AddCollaborationCard";
import { CollaborationCard } from "./CollaborationCard";

const collaborations: Collaboration[] = [
  {
    title: "DTE",
    description: "Coaching & Billing Platform",
    homeUrl: "https://www.dtefrisco.com",
    logoUrl: "/collaborations/logos/DTE-Logo.svg",
    backgroundImageUrl: "/collaborations/logos/DTE-Skeleton.svg",
  },
  {
    title: "BRD",
    description: "Digital Marketing Landing Page",
    homeUrl: "https://blackrobindigital.com",
    logoUrl: "/collaborations/logos/BRD-Logo.svg",
    backgroundImageUrl: "/collaborations/logos/BRD-Skeleton.svg",
  },
  {
    title: "Firelytics",
    description: "Beta Program Registration",
    homeUrl: "https://firelytics.ai",
    logoUrl: "/collaborations/logos/Firelytics-Logo.svg",
    backgroundImageUrl: "/collaborations/logos/Firelytics-Skeleton.svg",
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
