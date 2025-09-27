import { Chip, Stack } from "@mui/material";

export type PostTagsProps = {
  tags: string[];
};

export const PostTags = (props: PostTagsProps) => {
  const { tags } = props;

  return (
    <Stack direction="row" mt={2} gap={1}>
      {tags.map((tag) => (
        <Chip key={tag} variant="outlined" label={tag} />
      ))}
    </Stack>
  );
};
