import { htmlToPreviewText } from "@/modules/blog";
import { Fade, Skeleton, Typography } from "@mui/material";
import { useMemo } from "react";

export type PostCardPreviewTextProps = {
  html?: string | undefined;
};

export const PostCardPreviewText = (props: PostCardPreviewTextProps) => {
  const { html } = props;

  const previewText = useMemo(() => htmlToPreviewText(html || ""), [html]);

  // Skeleton if content is undefined
  if (!html)
    return (
      <Fade in={true} style={{ transitionDelay: "150ms" }}>
        <span>
          <Skeleton variant="text" width="100%" sx={{ fontSize: 16 }} />
          <Skeleton variant="text" width="75%" sx={{ fontSize: 16 }} />
        </span>
      </Fade>
    );

  if (html)
    return (
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
        }}
      >
        {previewText}
      </Typography>
    );
};
