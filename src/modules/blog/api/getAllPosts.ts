import { api } from "@/libs";
import { Post } from "@/modules/blog";

export const getAllPosts = async (): Promise<Post[]> => {
  const response = await api("/posts");

  const body = await response.json();

  if (!response.ok) throw new Error(body);

  return body;
};
