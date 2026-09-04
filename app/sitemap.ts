import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  const routes = [
    "",
    "/experiences/gym",
    "/experiences/padel",
    "/experiences/pilates",
    "/experiences/yoga",
    "/experiences/studio",
    "/cafe",
    "/schedule",
    "/memberships",
    "/events",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}