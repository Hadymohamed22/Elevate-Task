import type { Post } from "@/types/Posts";
import { Actions } from "@/types/PostsReducerActions";

export type ActionObject =
  | { type: Actions.ADD_POST; payload: Post }
  | { type: Actions.FETCH_POSTS; payload: Post[] };

export function PostsReducer(state: Post[] = [], action: ActionObject) {
  switch (action.type) {
    case Actions.ADD_POST:
      return [...state, action.payload];
    case Actions.FETCH_POSTS: {
      const merged: Post[] = [...state, ...action.payload];
      const unique = Array.from(
        new Map(merged.map((post) => [post.id, post])).values()
      );
      unique.sort((a, b) => a.id - b.id);
      return unique;
    }
    default:
      return state;
  }
}
