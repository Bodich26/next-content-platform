import { fetchContentId } from "@/entities/api/fetch-content-id";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const contentItem = await fetchContentId(id);

  return {
    title: contentItem.title,
    description: contentItem.excerpt,
  };
}

export default async function ContentPage({ params }: Props) {
  const id = (await params).id;
  const contentItem = await fetchContentId(id);

  if (contentItem.status !== "published") {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-100">
      <main className="mx-auto max-w-4xl px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2 text-gray-600">
          <h1 className="text-3xl font-bold">{contentItem.title}</h1>
          <p>{contentItem.status}</p>
          <p>{contentItem.excerpt}</p>
        </header>
      </main>
    </div>
  );
}
