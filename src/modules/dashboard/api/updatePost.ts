import { api } from "@/libs";
import { Post } from "@/modules/blog";

export type UpdatePostOptions = {
  jotId: string;
  tags: string[];
};

export const updatePost = async (
  postId: string,
  options: UpdatePostOptions
): Promise<Post> => {
  const response = await api(`/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...options }),
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body);
  }

  const data: Post = body;
  return data;
};
