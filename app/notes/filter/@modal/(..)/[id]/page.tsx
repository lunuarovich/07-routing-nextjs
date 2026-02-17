import { dehydrate, QueryClient } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";

import { fetchNoteById } from "@/lib/api";
import ModalRoute from "@/components/ModalRoute/ModalRoute";
import NotePreview from "@/components/NotePreview/NotePreview";

export default async function NotePreviewModalPage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", params.id],
    queryFn: () => fetchNoteById(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ModalRoute>
        <NotePreview />
      </ModalRoute>
    </HydrationBoundary>
  );
}