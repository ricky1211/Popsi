import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricky Alfian Saputra — Frontend Developer",
  description: "Mahasiswa Teknik Informatika yang berfokus pada Frontend Web Development, Data Analysis, dan Database Management.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
