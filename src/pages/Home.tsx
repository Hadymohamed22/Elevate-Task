import PaginateContainer from "@/components/PaginateContainer";
import PostListTitleContainer from "@/components/PostListTitleContainer";
import PostsSearchFilter from "@/components/PostsSearchFilter";
import PostsTable from "@/components/PostsTable";

const Home = () => {
  return (
    <div className="post-list bg-white/75 rounded-xl backdrop-blur-lg overflow-hidden">
      <PostListTitleContainer />
      <PostsSearchFilter />
      <PostsTable />
      <PaginateContainer />
    </div>
  );
};

export default Home;
