import TitleContainer from "@/components/TitleContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ErrorMessage from "@/components/ErrorMessage";
import { CreatePostSchema } from "@/schemas/CreatePostSchema";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Post } from "@/types/Posts";
import { usePosts } from "@/hooks/usePosts";
import { Actions } from "@/types/PostsReducerActions";
import toast from "react-hot-toast";

const CreatePost = () => {
  const { dispatch, posts } = usePosts();
  type createPostTypes = z.infer<typeof CreatePostSchema>;
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<createPostTypes>({
    mode: "all",
    resolver: zodResolver(CreatePostSchema),
  });

  const onSubmit: SubmitHandler<createPostTypes> = async (data) => {
    if (data.author == "" || data.title == "" || data.body == "") {
      toast.error("Some Thing is Wrong", {
        style: {
          border: "2px solid #D00000",
          padding: "16px",
          color: "#D00000",
          borderRadius: "10px",
          background: "oklch(88.5% 0.062 18.334)",
          textWrap: "nowrap",
          width: "fit-content",
        },
      });
    }
    const randomID = Math.random().toString(36).slice(2, 9);
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const reqBody: Post & { author: string } = {
      userId: randomID,
      id: newId,
      title: data.title,
      body: data.body,
      author: data.author,
    };
    try {
      const res: Response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqBody),
        }
      );
      if (!res.ok) throw new Error("failed to add new post");
      const data: Post = await res.json();
      dispatch({ type: Actions.ADD_POST, payload: reqBody });
      toast.success("A new post has been successfully created!", {
        style: {
          padding: "16px",
          color: "white",
          borderRadius: "10px",
          background: "#1A1A1A",
          textWrap: "nowrap",
          width: "fit-content",
        },
      });
      console.log(posts);
      console.log(`A new post has been successfully created! : ${data.id}`);
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`can not create a new post : ${error.message}`);
        reset();
      }
    }
  };
  return (
    <div className="create-post min-h-[82vh] bg-white/75 backdrop-blur-lg rounded-lg flex flex-col">
      <TitleContainer title="Create a New Post" titleIcon="notebook" />
      <div className="create-post-form-container p-6 w-full md:w-[70%] h-full flex flex-grow">
        <form
          className="bg-white h-auto rounded-md p-6 flex-grow flex flex-col gap-6 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid w-full max-w-full items-center gap-2.5">
            <Label htmlFor="Title">Title</Label>
            <Input
              type="text"
              id="Title"
              placeholder="Enter post title"
              className="p-4 placeholder:text-black/50 bg-black/10 shadow-none"
              {...register("title")}
            />
            {errors.title && <ErrorMessage message={errors.title.message} />}
          </div>
          <div className="grid w-full max-w-full items-center gap-2.5">
            <Label htmlFor="body">Body</Label>
            <Textarea
              {...register("body")}
              id="body"
              placeholder="Enter Post Body."
              className="p-4 bg-black/10 placeholder:text-black/50 shadow-none min-h-[126px]"
            />
            {errors.body && <ErrorMessage message={errors.body.message} />}
          </div>
          <div className="grid w-full max-w-full items-center gap-2.5">
            <Label htmlFor="author">Author</Label>
            <Controller
              name="author"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    id="author"
                    className="p-4 bg-black/10 placeholder:text-black/50 shadow-none w-full"
                    onBlur={field.onBlur}
                  >
                    <SelectValue placeholder="Select Author" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Hady">Hady</SelectItem>
                      <SelectItem value="Sara">Sara</SelectItem>
                      <SelectItem value="Mohamed">Mohamed</SelectItem>
                      <SelectItem value="Hassan">Hassan</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.author && <ErrorMessage message={errors.author.message} />}
          </div>
          <div className="button-container flex justify-end">
            <Button
              className="bg-[#333333] p-4 rounded-md w-full md:w-auto min-w-[200px] md:min-w-[300px] lg:min-w-[407px] cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              Create Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
