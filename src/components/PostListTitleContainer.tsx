import { Plus, ScrollText } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const PostListTitleContainer = () => {
  return (
    <div className="title-container bg-white py-4 px-[18px] rounded-t-xl border-b border-black/15 flex justify-between items-center">
      <h2 className="title h2-styles flex items-center gap-2.5">
        <ScrollText />
        <span className="text">Post List</span>
      </h2>
      <Link to="/posts/create-post">
        <Button
          variant="outline"
          className="border-0 text-[#808080] font-normal text-sm md:text-base cursor-pointer shadow-none"
        >
          <Plus />
          Create a new post
        </Button>
      </Link>
    </div>
  );
};

export default PostListTitleContainer;
