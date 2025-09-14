import SearchInput from "./SearchInput";
import SelectFilter from "./SelectFilter";

const PostsSearchFilter = () => {
  return (
    <div className="search-filter bg-black/10 py-4 px-[18px] border-b border-black/15 flex flex-col md:flex-row items-center gap-y-4 gap-x-10">
      <SearchInput />
      <SelectFilter />
    </div>
  );
};

export default PostsSearchFilter;
