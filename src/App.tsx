import { useEffect, useReducer, useState } from "react";
import MainRoutes from "./routes/MainRoutes";
import { PostsReducer } from "./reducers/PostsReducer";
import { PostsContext } from "./context/PostsContext";
import type { Post } from "./types/Posts";
import { Actions } from "./types/PostsReducerActions";

function App() {
  const [state, dispatch] = useReducer(PostsReducer, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(5);
  const [firstPostID, setFirstPostID] = useState(1);
  const [lastPostID, setLastPostID] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=50")
      .then((res: Response) => {
        return res.json();
      })
      .then((data: Post[]) => {
        dispatch({ type: Actions.FETCH_POSTS, payload: data });
        setPages(Math.ceil(data.length / 10));
      });
  }, []);
  return (
    <PostsContext.Provider
      value={{
        posts: state,
        dispatch,
        pages,
        currentPage,
        setCurrentPage,
        firstPostID,
        lastPostID,
        setFirstPostID,
        setLastPostID,
      }}
    >
      <MainRoutes />
    </PostsContext.Provider>
  );
}

export default App;
