export type PostTag = {
  color: string;
  label: string;
};

export type Post = {
  id: string;
  jotId: string;
  tags: PostTag[];
  createdAt: number;
};
