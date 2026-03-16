import { PostType } from "@prisma/client";
import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long."),
  slug: z
    .string()
    .min(2, "Slug must be at least 2 characters long.")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase and URL-safe."),
  content: z.string().min(1, "Content is required."),
  type: z.nativeEnum(PostType),
  author: z.string().min(2, "Author is required."),
  place: z.string().min(2, "Place is required."),
  publishedDate: z.coerce.date(),
});

export type PostInput = z.infer<typeof postSchema>;
