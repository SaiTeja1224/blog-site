import { Exo_2 } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { appLinks } from "@/lib/constants";
import "./globals.css";

const inter = Exo_2({ subsets: ["latin"] });
const defaultOgImage = `${appLinks.baseLink}/favicon.ico`;
export const metadata = {
  metadataBase: new URL(appLinks.baseLink),
  title: {
    default: "Sai Teja – Developer & Creator",
    template: "%s | Sai Teja",
  },
  description:
    "Full-stack developer sharing projects, tutorials, and insights about React, Next.js, and web development.",
  alternates: {
    canonical: appLinks.baseLink,
  },
  openGraph: {
    title: "Sai Teja – Developer & Creator",
    description:
      "Full-stack developer sharing projects, tutorials, and insights about React, Next.js, and web development.",
    url: appLinks.baseLink,
    siteName: "Sai Teja",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Sai Teja – Developer & Creator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Teja – Developer & Creator",
    description:
      "Full-stack developer sharing projects, tutorials, and insights about React, Next.js, and web development.",
    images: [defaultOgImage],
    creator: "@yoursocialhandle",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="h-full space-y-7">
          <NavBar />
          <section className="min-h-[80svh]">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
