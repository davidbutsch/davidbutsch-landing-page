import { Box, Card } from "@mui/material";

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

        aspectRatio: 1 / 1,
        zIndex: 1,
      }}
    >
      <Box
        component="img"
        src={src}
        height={{ xs: 48, sm: 56 }}
        width={{ xs: 48, sm: 56 }}
      />
    </Card>
  );
};
