import { api } from "@/libs";
import { Post } from "@/modules/blog";

export const getPost = async (postId: string): Promise<Post> => {
  const response = await api(`/posts/${postId}`);

  const body = await response.json();

  if (!response.ok) throw new Error(body);

  return body;
};
