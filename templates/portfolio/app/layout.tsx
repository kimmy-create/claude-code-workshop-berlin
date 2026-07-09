import "./globals.css";
import type { Metadata } from "next";
import { content } from "../content";
import { LanguageProvider } from "../lib/language-context";

export const metadata: Metadata = {
  title: content.de.meta.title,
  description: content.de.meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
