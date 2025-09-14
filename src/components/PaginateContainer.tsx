import { usePosts } from "@/hooks/usePosts";
import PaginateBtn from "./PaginateBtn";

const PaginateContainer = () => {
  const {
    pages,
    currentPage,
    setCurrentPage,
    posts,
    setFirstPostID,
    setLastPostID,
  } = usePosts();
  const posts_per_page: number = 10;
  const postsCount: number = posts.length;

  return (
    <div className="paginate-container flex justify-center items-center gap-1.5 bg-white py-6 px-2.5 rounded-b-xl">
      <PaginateBtn
        data={"double left arrow"}
        onClickFn={() => {
          setCurrentPage(1);
          setFirstPostID(1);
          setLastPostID(posts_per_page);
        }}
      />
      <PaginateBtn
        data={"arrow left"}
        onClickFn={() => {
          const newPage = currentPage === 1 ? pages : currentPage - 1;
          setCurrentPage(newPage);
          setFirstPostID((newPage - 1) * posts_per_page + 1);
          setLastPostID(newPage * posts_per_page);
        }}
      />
      {Array.from({ length: pages }, (_, i) => {
        return (
          <PaginateBtn
            key={i}
            data={i + 1}
            active={currentPage === i + 1}
            onClickFn={() => {
              const newPage: number = i + 1;
              setCurrentPage(newPage);
              const firstId = (newPage - 1) * posts_per_page + 1;
              setFirstPostID(firstId);
              setLastPostID(firstId + 9);
            }}
          />
        );
      })}
      <PaginateBtn
        data={"arrow right"}
        onClickFn={() => {
          const newPage = currentPage < pages ? currentPage + 1 : 1;
          setCurrentPage(newPage);
          setFirstPostID((newPage - 1) * posts_per_page + 1);
          setLastPostID(newPage * posts_per_page);
        }}
      />
      <PaginateBtn
        data={"double right arrow"}
        onClickFn={() => {
          setCurrentPage(pages);
          setFirstPostID((pages - 1) * posts_per_page + 1);
          setLastPostID(postsCount);
        }}
      />
    </div>
  );
};

export default PaginateContainer;
