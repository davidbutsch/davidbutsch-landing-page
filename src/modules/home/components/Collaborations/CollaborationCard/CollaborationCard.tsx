import { Collaboration } from "@/modules/home";
import { Card, CardContent } from "@mui/material";
import { CollaborationCardBackgroundImage } from "./CollaborationCardBackgroundImage";
import { CollaborationCardLogo } from "./CollaborationCardLogo";
import { CollaborationCardTypography } from "./CollaborationCardTypography";

export type CollaborationCardProps = {
  collaboration: Collaboration;
};

export const CollaborationCard = (props: CollaborationCardProps) => {
  const { collaboration } = props;

  return (
    <Card variant="outlined" sx={{ position: "relative", height: "100%" }}>
      <CardContent>
        <CollaborationCardLogo src={collaboration.logoUrl} />
        <CollaborationCardBackgroundImage
          src={collaboration.backgroundImageUrl}
        />

        <CollaborationCardTypography
          title={collaboration.title}
          description={collaboration.description}
          url={collaboration.homeUrl}
        />
      </CardContent>
    </Card>
  );
};
