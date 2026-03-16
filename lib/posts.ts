import { PostType } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export async function getLatestPosts(limit = 3) {
  try {
    return await prisma.post.findMany({
      orderBy: { publishedDate: "desc" },
      take: limit,
    });
  } catch (error) {
    console.error("Failed to load latest posts:", error);
    return [];
  }
}

export async function getPostsByType(type: PostType) {
  try {
    return await prisma.post.findMany({
      where: { type },
      orderBy: { publishedDate: "desc" },
    });
  } catch (error) {
    console.error(`Failed to load posts for type ${type}:`, error);
    return [];
  }
}

export async function getArticles() {
  return getPostsByType("article");
}

export async function getPostBySlug(slug: string) {
  try {
    return await prisma.post.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error(`Failed to load post by slug ${slug}:`, error);
    return null;
  }
}

export async function getAllSlugs() {
  try {
    const posts = await prisma.post.findMany({
      select: { slug: true, updatedAt: true },
    });

    return posts;
  } catch (error) {
    console.error("Failed to load all slugs:", error);
    return [];
  }
}
