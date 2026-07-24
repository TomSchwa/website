import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://tomschwantje.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tom Schwantje",
  description:
    "Tom Schwantje is a Postdoctoral Research Fellow at Bocconi University working on organisational economics, management, development, and finance.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tom Schwantje",
    description:
      "Postdoctoral Research Fellow at Bocconi University working on organisational economics, management, development, and finance.",
    url: "/",
    type: "website",
    images: ["./bocconi.png"],
  },
  icons: {
    icon: [
      {
        url: "/bocconi-favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: "/bocconi-favicon.png",
    apple: "/bocconi-favicon.png",
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tom Schwantje",
  url: siteUrl,
  image: `${siteUrl}profile.jpg`,
  jobTitle: "Postdoctoral Research Fellow",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Bocconi University",
    url: "https://www.unibocconi.it/",
  },
  email: "mailto:tom.schwantje@unibocconi.it",
  knowsAbout: [
    "Organisational economics",
    "Management",
    "Development economics",
    "Finance",
  ],
  sameAs: [
    "https://www.unibocconi.it/it/faculty/tom-schwantje",
    "https://igier.unibocconi.eu/people/researchers/tom-schwantje",
    "https://cepr.org/about/people/tom-schwantje",
    "https://ideas.repec.org/f/psc968.html",
    "https://orcid.org/0009-0007-1455-2083",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
