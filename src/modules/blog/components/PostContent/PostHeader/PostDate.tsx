import { MONTH_NAMES } from "@/common";
import { Typography } from "@mui/material";

export type PostDateProps = {
  createdAt: number;
};

export const PostDate = (props: PostDateProps) => {
  const { createdAt } = props;

  if (!createdAt) return;

  const date = new Date(createdAt);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return (
    <Typography
      color="textSecondary"
      variant="body2"
    >{`${MONTH_NAMES[month]} ${day}, ${year}`}</Typography>
  );
};
