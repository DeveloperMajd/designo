import type { Metadata } from "next";
import "./style.scss";

export const metadata: Metadata = {
  title: "Designo",
  description: "Award-winning custom designs and digital branding solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
