import { Box, Icon, Link, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { TopicCardLogo } from "./TopicCardLogo";

export type TopicCardProps = {
  title: string;
  homeUrl: string;
  logoUrl: string;
};

export const TopicCard = (props: TopicCardProps) => {
  const { title, homeUrl, logoUrl } = props;

  const hostname = useMemo(() => new URL(homeUrl).hostname, [homeUrl]);

  return (
    <Stack direction="row" gap={2} alignItems="center">
      <TopicCardLogo src={logoUrl} />
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Link href={homeUrl} target="_blank" rel="noopener">
          {hostname}
          <Icon className="material-symbols-outlined" fontSize="small">
            arrow_outward
          </Icon>
        </Link>
      </Box>
    </Stack>
  );
};
