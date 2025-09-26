import { PostTag } from "@/modules/blog";
import { Chip, Stack } from "@mui/material";

export type PostTagsProps = {
  tags: PostTag[];
};

export const PostTags = (props: PostTagsProps) => {
  const { tags } = props;

  return (
    <Stack direction="row" mt={2}>
      {tags.map((tag) => (
        <Chip key={tag.label} variant="outlined" label={tag.label} />
      ))}
    </Stack>
  );
};
