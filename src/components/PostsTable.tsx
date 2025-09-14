import TablePostCell from "./TablePostCell";
import { Table, TableBody } from "./ui/table";
import type { Post } from "@/types/Posts";
import { usePosts } from "@/hooks/usePosts";
import { useEffect, useState } from "react";

const PostsTable = () => {
  const [postsToView, setPostsToView] = useState<Post[]>([]);
  const { posts, firstPostID, lastPostID, currentPage } = usePosts();

  useEffect(() => {
    const result = posts.filter(
      (e: Post) => e.id >= firstPostID && e.id <= lastPostID
    );
    setPostsToView(result);
  }, [posts, firstPostID, lastPostID, currentPage]);
  return (
    <Table>
      <TableBody>
        {postsToView.length === 0 && (
          <h2 className="h2-styles px-6 py-4 animate-pulse">
            Loading Posts ...
          </h2>
        )}
        {postsToView.map((post: Post) => {
          return <TablePostCell id={post.id} title={post.title} />;
        })}
      </TableBody>
    </Table>
  );
};

export default PostsTable;
