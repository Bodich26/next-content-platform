import { fetchContentId } from "@/entities/api/fetch-content-id";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const contentItem = await fetchContentId(id, "public");

  return {
    title: contentItem.title,
    description: contentItem.excerpt,
  };
}

export default async function ContentPageId({ params }: Props) {
  const id = (await params).id;
  const contentItem = await fetchContentId(id, "public");

  if (contentItem.status !== "published") {
    notFound();
  }

  return (
    <header className="flex flex-col gap-2 text-gray-600">
      <h1 className="text-3xl font-bold">{contentItem.title}</h1>
      <p>{contentItem.status}</p>
      <p>{contentItem.excerpt}</p>
    </header>
  );
}
