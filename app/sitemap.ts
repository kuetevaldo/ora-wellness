import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";

const publicRoutes = [
  "/",
  "/about",
  "/cafe",
  "/contact",
  "/events",
  "/experiences/gym",
  "/experiences/padel",
  "/experiences/pilates",
  "/experiences/studio",
  "/experiences/yoga",
  "/memberships",
  "/schedule",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  return publicRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
