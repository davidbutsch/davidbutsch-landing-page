import { PostTag } from "@/modules/blog";
import { Chip, Stack } from "@mui/material";

export type PostCardTagsProps = {
  tags?: PostTag[] | undefined;
};

export const PostCardTags = (props: PostCardTagsProps) => {
  const { tags } = props;

  if (!tags) return;

  return (
    <Stack direction="row">
      {tags.map((tag) => (
        <Chip key={tag.label} variant="outlined" label={tag.label} />
      ))}
    </Stack>
  );
};
