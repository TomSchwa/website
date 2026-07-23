import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tom Schwantje",
  description:
    "Tom Schwantje is a Postdoctoral Research Fellow at Bocconi University working on organisational economics, management, development, and finance.",
  openGraph: {
    title: "Tom Schwantje",
    description:
      "Postdoctoral Research Fellow at Bocconi University working on organisational economics, management, development, and finance.",
    type: "website",
    images: ["./bocconi.png"],
  },
  icons: {
    icon: "/bocconi.png",
    shortcut: "/bocconi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
