import z from "zod";
export const CreatePostSchema = z.object({
  title: z.string().min(1, { message: "Post title is required" }),
  body: z.string().min(1, { message: "Post body is required" }).max(1000, {
    message: "Post Body is very big , please write less than 1000 character",
  }),
  author: z
    .string()
    .min(1, { message: "Please select an author for this post" }),
});
