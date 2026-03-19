import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GLP-Planet — Конференция GLP-PLANET VII",
  description:
    "Ежегодная конференция в области надлежащей лабораторной практики, фармакологии и доклинических исследований",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={exo2.className}>{children}</body>
    </html>
  );
}
