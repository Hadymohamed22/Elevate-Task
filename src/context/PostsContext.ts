import type { ActionObject } from "@/reducers/PostsReducer";
import type { Post } from "@/types/Posts";
import { createContext } from "react";

type PostsContextType = {
  posts: Post[];
  dispatch: React.Dispatch<ActionObject>;
  pages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  firstPostID: number;
  lastPostID: number;
  setFirstPostID: React.Dispatch<React.SetStateAction<number>>;
  setLastPostID: React.Dispatch<React.SetStateAction<number>>;
};

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined
);
