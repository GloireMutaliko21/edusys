import type { Metadata } from "next";
import Container from "./container";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "EDUSYS - ISDR/GL",
  description: "Recouvrement des frais académiques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
