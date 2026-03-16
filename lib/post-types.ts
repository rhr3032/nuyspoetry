import { PostType } from "@prisma/client";

export const postTypeLabel: Record<PostType, string> = {
  bengali_poem: "Bengali Poem",
  english_poem: "English Poem",
  article: "Essay",
};
