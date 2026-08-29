import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const rules: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };

  if (!siteUrl) {
    return rules;
  }

  return {
    ...rules,
    host: siteUrl.origin,
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
