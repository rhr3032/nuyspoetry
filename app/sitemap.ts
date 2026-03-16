import type { MetadataRoute } from "next";

import { getAllSlugs } from "@/lib/posts";
import { getSiteOrigin } from "@/lib/site-url";

export const dynamic = "force-dynamic";

const baseUrl = getSiteOrigin();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/login",
    "/writings",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes: MetadataRoute.Sitemap = slugs.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: post.updatedAt,
  }));

  return [...staticRoutes, ...postRoutes];
}
