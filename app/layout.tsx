import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "trainwithsatya",
  description: "Satya Trainings — Learn technologies. One-on-One classes coming soon.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "trainwithsatya",
    description: "Satya Trainings — Learn technologies. One-on-One classes coming soon.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trainwithsatya",
    description: "Satya Trainings — Learn technologies. One-on-One classes coming soon.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
