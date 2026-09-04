import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ORA Wellness Cameroon",
    short_name: "ORA Wellness",
    description:
      "Fitness, Padel, Pilates, Yoga, Studio and Café experiences in Douala, Cameroon.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ee",
    theme_color: "#8b485b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}