import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Gabriel Magalhães | Portfólio",
  description:
    "Site pessoal de Gabriel Magalhães, profissional de dados e tecnologia.",
  keywords: [
    "Gabriel Magalhães",
    "engenheiro de dados",
    "portfólio",
    "Python",
    "SQL",
    "Power BI",
    "pyspark",
  ],
  authors: [{ name: "Gabriel Magalhães", url: "https://github.com/gabrielmds42" }],
};

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="min-h-screen">
      <body className={`${karla.className} min-h-full px-6`}>
        <Analytics />
        <Script id="theme-toggle" strategy="afterInteractive">
          {`document.documentElement.classList.toggle("dark", localStorage.theme ===
        "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))`}
        </Script>
        <Header />
        <main className="mx-auto max-w-prose pb-4">
          {children}
          <ScrollToTop />
        </main>
        <footer className="mx-auto flex max-w-prose flex-col items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
              href="https://github.com/gabrielmds42/blog"
              target="_blank"
            >
              Código do site
            </a>
            {/* <a
              className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
              href="https://linkedin.com/in/gabriel-magalhães-de-souza"
              target="_blank"
            >
              LinkedIn
            </a> */}
            {/* <a href="https://x.com/seuUsuarioAqui">X</a> */}
          </div>
          {/* <blockquote className="text-zinc-800 dark:text-zinc-300">
            Smile, you&apos;re alive :)
          </blockquote> */}
        </footer>
      </body>
    </html>
  );
}
