import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Shidqul Iman | Software Engineer Portfolio",
  description:
    "Portfolio website Muhammad Shidqul Iman - Mahasiswa Teknologi Informasi Universitas Muhammadiyah Yogyakarta | Web, Mobile, & Machine Learning.",
  keywords: [
    "Muhammad Shidqul Iman",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Machine Learning",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "UMY",
  ],
  authors: [{ name: "Muhammad Shidqul Iman" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-400">
        {children}
      </body>
    </html>
  );
}
