import ModalRoute from "@/components/ModalRoute/ModalRoute";
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview.client";

export default function ModalNote() {
  return (
    <ModalRoute>
      <NotePreview />
    </ModalRoute>
  );
}