import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ComponentSlugPage({ params }: Props) {
  const { slug } = await params;
  // All components have dedicated pages now.
  // This catch-all only handles unknown slugs.
  void slug;
  notFound();
}
