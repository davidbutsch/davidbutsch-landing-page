import { Box, Icon, Link, Typography } from "@mui/material";
import { useMemo } from "react";

export type CollaborationCardTypographyProps = {
  title: string;
  description: string;
  url: string;
};

export const CollaborationCardTypography = (
  props: CollaborationCardTypographyProps
) => {
  const { title, description, url } = props;

  const hostname = useMemo(() => new URL(url).hostname, [url]);

  return (
    <Box position="relative">
      <Typography mt={4} variant="h5" gutterBottom>
        {title} — {description}
      </Typography>
      <Link href={url} target="_blank" rel="noopener">
        {hostname}
        <Icon className="material-symbols-outlined" fontSize="small">
          arrow_outward
        </Icon>
      </Link>
    </Box>
  );
};
