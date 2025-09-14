import { PostsContext } from "@/context/PostsContext";
import { useContext } from "react";

export function usePosts() {
  const context = useContext(PostsContext);
  if (!context) throw new Error("usePosts must be used within PostsProvider");
  return context;
}
