import type { Metadata } from "next";
import Link from 'next/link'
import { Montserrat } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${montserratSans.variable}`}>
      <div className={styles.pageContainer}>
      <main className={styles.main}>
        <header className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline" style={{marginTop: "1rem"}}>
          Minhas anotações
        </h1>
        <ul className="flex gap-5 pl-2" style={{marginTop: "1rem"}}>
        <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" href="/#">Home</Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" href="/language-blog">Language Blog</Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" href="/code-blog">Code Blog</Link>
          </li>
        </ul>

        </header>
        <section>
          {children}
        </section>
      </main>

    </div>
    <footer className={styles.footer}>
        <p>© 2025 - Pedro Zotesso</p>
      </footer>
      </body>
    </html>
  );
}
