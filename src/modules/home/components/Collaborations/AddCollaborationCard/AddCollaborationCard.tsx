import { Card, CardContent } from "@mui/material";
import { AddCollaborationCardLogo } from "./AddCollaborationCardLogo";
import { AddCollaborationCardTypography } from "./AddCollaborationCardTypography";

export const AddCollaborationCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",
        height: "100%",

        borderStyle: "dashed",
        bgcolor: "transparent",
      }}
    >
      <CardContent>
        <AddCollaborationCardLogo />
        <AddCollaborationCardTypography />
      </CardContent>
    </Card>
  );
};
