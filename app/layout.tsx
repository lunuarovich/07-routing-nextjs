import "modern-normalize/modern-normalize.css";
import "@/app/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
