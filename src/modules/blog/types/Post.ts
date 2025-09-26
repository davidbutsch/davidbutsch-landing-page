export type PostTag = {
  color: string;
  label: string;
  icon: string;
};

export type Post = {
  id: string;
  tags: PostTag[];
  createdAt: number;
};
