import type { MetadataRoute } from "next";
import { careers } from "@/data/careers";
import { resourceTopics } from "@/data/resources";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/careers",
    "/degree-roadmap",
    "/custom-roadmap",
    "/compare",
    "/resources",
    ...careers.map((c) => `/careers/${c.slug}`),
    ...resourceTopics.map((t) => `/resources/${t.id}`),
  ];
  return paths.map((p) => ({ url: `${siteUrl}${p}` }));
}
