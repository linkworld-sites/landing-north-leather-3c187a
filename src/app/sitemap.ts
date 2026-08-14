import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPosts } from "@/lib/posts";
import { getLegalSlugs } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now },
    { url: `${SITE_URL}/about`, lastModified: now },
    { url: `${SITE_URL}/product`, lastModified: now },
    { url: `${SITE_URL}/checkout`, lastModified: now },
    { url: `${SITE_URL}/blog`, lastModified: now },
    { url: `${SITE_URL}/craftsmanship`, lastModified: now },
  ];
  for (const post of getPosts()) {
    routes.push({ url: `${SITE_URL}/blog/${post.slug}`, lastModified: now });
  }
  for (const slug of getLegalSlugs()) {
    routes.push({ url: `${SITE_URL}/legal/${slug}`, lastModified: now });
  }
  return routes;
}
