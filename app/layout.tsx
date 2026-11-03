import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricky Alfian Saputra — Frontend & Industrial IoT Developer",
  description: "Mahasiswa Teknik Informatika yang berfokus pada Smart Industrial Systems, Telemetri IoT, Frontend Web Development, dan Data Analytics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
