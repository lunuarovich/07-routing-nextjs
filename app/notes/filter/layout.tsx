import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";

export default function NotesFilterLayout({
  children,
  sidebar,
  modal,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>

      <section className={css.notesWrapper}>
        {children}
      </section>

      {modal}
    </div>
  );
}