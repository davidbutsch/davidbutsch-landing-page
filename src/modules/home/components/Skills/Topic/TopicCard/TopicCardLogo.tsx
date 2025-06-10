import { Card } from "@mui/material";

export type TopicCardLogoProps = {
  src: string;
};

export const TopicCardLogo = (props: TopicCardLogoProps) => {
  const { src } = props;

  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",

        height: 64,
        width: 64,
        zIndex: 1,
      }}
    >
      <img src={src} height={64} width={64} />
    </Card>
  );
};
