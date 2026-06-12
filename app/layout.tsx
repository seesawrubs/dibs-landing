import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Business Studio | We build and run digital businesses",
  description:
    "From strategy and custom apps to operations, payments, AI systems, and ongoing growth, one partner handles the whole digital business so you can focus on the audience and the offer.",
  keywords: [
    "digital business studio",
    "app development",
    "creator platform",
    "coaching platform",
    "AI automation",
    "digital business management",
  ],
  openGraph: {
    title: "Digital Business Studio",
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
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
