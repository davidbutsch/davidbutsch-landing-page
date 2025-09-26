import { MONTH_NAMES } from "@/common";
import { Typography } from "@mui/material";

export type PostCardDateProps = {
  createdAt?: number | undefined;
};

export const PostCardDate = (props: PostCardDateProps) => {
  const { createdAt } = props;

  if (!createdAt) return;

  const date = new Date(createdAt);

  const month = date.getMonth();
  const day = date.getDate();

  return (
    <Typography
      color="textSecondary"
      variant="body2"
    >{`${MONTH_NAMES[month]} ${day}`}</Typography>
  );
};
