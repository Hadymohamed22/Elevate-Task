import { InputWithLabel } from "@/components/InputWithLabel";
import TitleContainer from "@/components/TitleContainer";
import { Button } from "@/components/ui/button";

const CreatePost = () => {
  return (
    <div className="create-post min-h-[82vh] bg-white/75 backdrop-blur-lg rounded-lg flex flex-col">
      <TitleContainer title="Create a New Post" titleIcon="notebook" />
      <div className="create-post-form-container p-6 w-[70%] h-full flex flex-grow">
        <form className="bg-white h-auto rounded-md p-6 flex-grow flex flex-col gap-6 w-full">
          <InputWithLabel
            inputID="title"
            label="Title"
            placeholder="Enter post title"
            type="title"
          />
          <InputWithLabel
            inputID="body"
            label="Body"
            placeholder="Enter post body"
            type="textarea"
          />
          <InputWithLabel
            inputID="author"
            label="Author"
            placeholder="Enter post title"
            type="select"
          />
          <div className="button-container flex justify-end">
            <Button className="bg-[#333333] p-4 rounded-md min-w-[200px] md:min-w-[300px] lg:min-w-[407px] cursor-pointer">
              Create Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
