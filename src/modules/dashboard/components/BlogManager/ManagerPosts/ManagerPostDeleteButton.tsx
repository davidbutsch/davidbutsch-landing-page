import { deletePost } from "@/modules/dashboard";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export type ManagerPostDeleteButtonProps = {
  postId: string;
};

export const ManagerPostDeleteButton = (
  props: ManagerPostDeleteButtonProps
) => {
  const { postId } = props;

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const deletePostMutation = useMutation({
    mutationFn: () => deletePost(postId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setOpen(false);
    },
  });

  const onOpen = () => setOpen(true);
  const onDelete = () => deletePostMutation.mutate();

  return (
    <>
      <Button variant="contained" onClick={onOpen}>
        Delete
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
        <DialogTitle>Delete Post</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h5">Confirm deletion pls</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            loading={deletePostMutation.isPending}
            variant="contained"
            onClick={onDelete}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
