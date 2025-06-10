import { Card } from "@mui/material";

export type CollaborationCardLogoProps = {
  src: string;
};

export const CollaborationCardLogo = (props: CollaborationCardLogoProps) => {
  const { src } = props;

  return (
    <Card
      sx={{
        position: "relative",

        width: "fit-content",
        aspectRatio: 1 / 1,
        height: 64,
        padding: 1 / 2,

        zIndex: 1,
      }}
    >
      <img src={src} />
    </Card>
  );
};
