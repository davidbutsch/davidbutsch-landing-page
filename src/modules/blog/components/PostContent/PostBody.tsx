import { Box } from "@mui/material";
import hljs from "highlight.js";
import parse from "html-react-parser";
import { useEffect } from "react";

export type PostBodyProps = {
  html: string;
};

export const PostBody = (props: PostBodyProps) => {
  const { html } = props;

  // Apply element highlights
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      if (block instanceof HTMLElement) hljs.highlightElement(block);
    });
  }, [html]);

  return (
    <Box className="tiptap" mt={6}>
      {parse(html || "")}
    </Box>
  );
};
