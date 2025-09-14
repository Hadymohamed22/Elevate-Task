import PostInfoBox from "@/components/PostInfoBox";
import { Button } from "@/components/ui/button";
import { usePosts } from "@/hooks/usePosts";
import type { Post } from "@/types/Posts";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts } = usePosts();
  const post: Post | undefined = posts.find((e) => {
    if (id) {
      return Number(id) === e.id;
    }
  });
  return (
    <div className="post-details min-h-[75vh] md:min-h-[90vh] flex flex-col">
      <div className="title min-h-[300px] md:min-h-[412px] bg-gradient-to-b from-[#00254A]/65 to-[#21609A]/65 backdrop-blur-lg rounded-t-2xl p-6 flex flex-col justify-end gap-4">
        <Button
          className="bg-white/75 rounded-full text-[#1A1A1A] cursor-pointer duration-300 hover:text-white/75 p-2.5 w-fit"
          onClick={() => navigate("/")}
        >
          <ArrowLeft />
          <span>Back to Posts</span>
        </Button>
        <h1 className="font-bold text-3xl md:text-4xl text-white">
          {post?.title}
        </h1>
        <div className="author-date flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* write author and date static because API not provide it */}
          <PostInfoBox text="Leanne Graham" icon="author" />
          <PostInfoBox text="Sun, August 24th, 2025" icon="date" />
        </div>
      </div>
      <div className="body h-full bg-white/75 backdrop-blur-lg rounded-b-2xl p-6 flex-grow">
        <p className="text-base md:text-lg w-[90%] md:w-[80%] lg:w-[40%]">
          {post?.body}
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
