import PaginateContainer from "@/components/PaginateContainer";
import TitleContainer from "@/components/TitleContainer";
import PostsSearchFilter from "@/components/PostsSearchFilter";
import PostsTable from "@/components/PostsTable";

const Home = () => {
  return (
    <div className="post-list bg-white/75 rounded-xl backdrop-blur-lg overflow-hidden">
      <TitleContainer
        title="posts list"
        titleIcon="posts list"
        link="/posts/create-post"
        linkText="Create a new post"
      />
      <PostsSearchFilter />
      <PostsTable />
      <PaginateContainer />
    </div>
  );
};

export default Home;
