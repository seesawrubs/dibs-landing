import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIBS — We build & run the whole machine",
  description:
    "DIBS is a digital business studio. From strategy and custom apps to operations, payments, AI systems, and ongoing growth, one partner runs the whole digital business so you can focus on the audience and the offer.",
  keywords: [
    "DIBS",
    "digital business studio",
    "app development",
    "creator platform",
    "coaching platform",
    "AI automation",
    "digital business management",
  ],
  openGraph: {
    title: "DIBS — Digital Business Studio",
    description:
      "We build and run your complete digital business: strategy, apps, payments, operations, AI systems, and ongoing growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Martian+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
