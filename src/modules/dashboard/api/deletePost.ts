import { api } from "@/libs";

export const deletePost = async (postId: string): Promise<boolean> => {
  const response = await api(`/posts/${postId}`, {
    method: "DELETE",
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body);
  }

  return true;
};
