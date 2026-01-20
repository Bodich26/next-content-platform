import { SwitchStateForm } from "@/components/widgets";
import { fetchContentId } from "@/entities/api/fetch-content-id";

type Props = {
  params: { id: string };
};

export default async function AdminContentPageId({ params }: Props) {
  const id = (await params).id;
  const contentItem = await fetchContentId(id, "admin");

  return (
    <SwitchStateForm
      title={contentItem.title}
      excerpt={contentItem.excerpt}
      status={contentItem.status}
    />
  );
}
