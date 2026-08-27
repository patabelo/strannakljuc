import type { Metadata } from "next";

import { SITE } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  openGraphTitle?: string;
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  openGraphTitle = title,
  index = true,
}: PageMetadataOptions): Metadata {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: true },
    openGraph: {
      type: "website",
      locale: "sl_SI",
      url,
      siteName: SITE.name,
      title: openGraphTitle,
      description,
      images: [
        {
          url: `${SITE.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — izdelava spletnih strani`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description,
      images: [`${SITE.url}/opengraph-image`],
    },
  };
}

export function createDemoMetadata(
  options: Omit<PageMetadataOptions, "index">
): Metadata {
  return createPageMetadata({ ...options, index: false });
}
