import type { Metadata } from "next";

export const siteName = "ORA Wellness Cameroon";
export const siteShortName = "ORA Wellness";

export const siteDescription =
  "Fitness, Padel, Pilates, Yoga, Studio and Café experiences in Douala, Cameroon.";

export const instagramUrl =
  "https://www.instagram.com/ora.cameroon";

export const googleMapsUrl =
  "https://maps.app.goo.gl/N1TAxq6LhVsQkhHC8";

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return undefined;
  }

  try {
    const url = new URL(configuredUrl);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return undefined;
    }

    return url;
  } catch {
    return undefined;
  }
}

export const siteUrl = resolveSiteUrl();

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  imageAlt?: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = "/images/logos/ora.PNG",
  imageAlt = "ORA Wellness in Douala, Cameroon",
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = siteUrl
    ? new URL(path, siteUrl).toString()
    : undefined;

  const imageUrl = siteUrl
    ? new URL(imagePath, siteUrl).toString()
    : undefined;

  const fullTitle = absoluteTitle
    ? title
    : `${title} | ${siteShortName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,

    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,

    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      siteName,
      url: canonicalUrl,
      locale: "en_CM",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: imageAlt,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "06:00",
  closes: "22:00",
};

const address = {
  "@type": "PostalAddress",
  streetAddress: "Hydrocarbures",
  addressLocality: "Douala",
  addressCountry: "CM",
};

export const wellnessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: siteShortName,
  description: siteDescription,
  address,
  openingHoursSpecification: openingHours,
  sameAs: [instagramUrl],
  ...(siteUrl
    ? {
        url: siteUrl.toString(),
      }
    : {}),
};

export const cafeJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "ORA Café",
  description:
    "Specialty coffee, breakfast, nourishing food and wellness drinks at ORA Café in Douala.",
  address,
  openingHoursSpecification: openingHours,
  sameAs: [instagramUrl],
  ...(siteUrl
    ? {
        url: new URL("/cafe", siteUrl).toString(),
      }
    : {}),
};

export function serializeJsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}