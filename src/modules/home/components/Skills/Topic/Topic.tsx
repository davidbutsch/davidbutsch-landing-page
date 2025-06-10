import { Box, Stack, Typography } from "@mui/material";
import { TopicCard, TopicCardProps } from "./TopicCard";

export type TopicProps = {
  title: string;
  cards: TopicCardProps[];
};

export const Topic = (props: TopicProps) => {
  const { title, cards } = props;

  return (
    <Box>
      <Typography variant="h5" mb={4}>
        {title}
      </Typography>
      <Stack direction="row" gap={4} flexWrap="wrap">
        {cards.map((card) => (
          <TopicCard
            key={card.title}
            title={card.title}
            homeUrl={card.homeUrl}
            logoUrl={card.logoUrl}
          />
        ))}
      </Stack>
    </Box>
  );
};
