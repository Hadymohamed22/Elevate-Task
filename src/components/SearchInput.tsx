import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="search flex-grow p-4 rounded-full flex items-center gap-2.5 bg-white">
      <Search width={18} height={18} />
      <input
        type="text"
        placeholder="Search for a post..."
        className="focus:outline-none flex-grow"
      />
    </div>
  );
};

export default SearchInput;
