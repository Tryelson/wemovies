import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import DefaultLayout from "@/layouts/DefaultLayout";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeMovies",
  description: "WeMovies - Os melhores filmes em um só lugar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </body>
    </html>
  );
}
