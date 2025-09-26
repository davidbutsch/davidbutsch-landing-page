import { api } from "@/libs";
import { Post } from "@/modules/blog";

export type CreatePostOptions = {
  jotId: string;
  tags: string[];
};

export const createPost = async (options: CreatePostOptions): Promise<Post> => {
  const response = await api(`/posts/`, {
    method: "POST",
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
