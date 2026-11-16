import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const languages = { es: siteConfig.url, en: `${siteConfig.url}/en` };

export default function sitemap(): MetadataRoute.Sitemap {
  return [siteConfig.url, `${siteConfig.url}/en`].map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages },
  }));
}
