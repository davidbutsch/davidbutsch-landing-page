import { Typography } from "@mui/material";

export type PostTitleProps = {
  title: string;
};

export const PostTitle = (props: PostTitleProps) => {
  const { title } = props;

  return (
    <Typography variant="h3" gutterBottom>
      {title}
    </Typography>
  );
};
