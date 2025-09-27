import { Chip, Stack } from "@mui/material";

export type PostCardTagsProps = {
  tags?: string[] | undefined;
};

export const PostCardTags = (props: PostCardTagsProps) => {
  const { tags } = props;

  if (!tags) return;

  return (
    <Stack direction="row" gap={1}>
      {tags.map((tag) => (
        <Chip key={tag} variant="outlined" label={tag} />
      ))}
    </Stack>
  );
};
