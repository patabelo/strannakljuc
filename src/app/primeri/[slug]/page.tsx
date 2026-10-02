import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CraftSite } from "@/components/demos/craft-site";
import { CRAFTS, getCraft } from "@/lib/crafts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CRAFTS.map((craft) => ({ slug: craft.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const craft = getCraft(slug);
  if (!craft) return {};

  const title = `${craft.name} — primer strani`;
  return {
    title,
    description: craft.description,
    alternates: { canonical: `/primeri/${craft.slug}` },
    openGraph: {
      title: `Primer: ${craft.name}`,
      description: craft.lead,
    },
  };
}

export default async function CraftPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const craft = getCraft(slug);
  if (!craft) notFound();

  return <CraftSite craft={craft} />;
}
