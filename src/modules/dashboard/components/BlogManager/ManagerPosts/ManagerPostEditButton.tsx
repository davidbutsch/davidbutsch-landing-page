import { Post } from "@/modules/blog";
import { updatePost } from "@/modules/dashboard";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export type ManagerPostEditButtonProps = {
  post: Post;
};

export const ManagerPostEditButton = (props: ManagerPostEditButtonProps) => {
  const { post } = props;

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    jotId: post.jotId,
    tags: post.tags,
  });

  const updatePostMutation = useMutation({
    mutationFn: () => updatePost(post.id, inputs),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setOpen(false);
    },
  });

  const onOpen = () => setOpen(true);
  const onSave = () => updatePostMutation.mutate();

  /**
   * Generic on change handler for all input elements.
   *
   * Extracts component name to update appropriate state.
   */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const index = Number(name); // name is set to index

    setInputs((prev) => ({
      ...prev,
      // update the tag with above index or include original
      tags: prev.tags.map((tag, i) => (i == index ? value : tag)),
    }));
  };

  const pushTag = () => {
    setInputs((prev) => ({
      ...prev,
      tags: [...prev.tags, ""],
    }));
  };

  const popTag = () => {
    setInputs((prev) => ({
      ...prev,
      tags: prev.tags.slice(0, -1),
    }));
  };

  return (
    <>
      <Button onClick={onOpen} variant="contained" sx={{ ml: "auto" }}>
        Edit
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            variant: "outlined",
          },
        }}
      >
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent dividers>
          <Stack gap={2}>
            <FormControl fullWidth>
              <FormLabel htmlFor="jotId" required>
                Jot ID
              </FormLabel>
              <TextField
                value={inputs.jotId}
                onChange={onChange}
                id="jotId"
                name="jotId"
                type="text"
                placeholder="jotId"
                required
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <FormLabel>Tags</FormLabel>
            {inputs.tags.map((tag, i) => (
              <TextField
                value={tag}
                onChange={onTagsChange}
                id="tag"
                name={i.toString()}
                type="text"
                placeholder={`tag${i + 1}`}
                required
                fullWidth
                variant="outlined"
              />
            ))}
            <Stack direction="row" width="100%" justifyContent="space-between">
              <Button onClick={popTag} variant="text">
                Delete Last Tag
              </Button>
              <Button onClick={pushTag}>Add Tag</Button>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button
            loading={updatePostMutation.isPending}
            variant="contained"
            onClick={() => onSave()}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
