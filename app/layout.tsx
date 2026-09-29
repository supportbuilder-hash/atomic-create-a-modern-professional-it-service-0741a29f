import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APP_NAME, TAGLINE, LOGO_URL } from "@/lib/data";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: `${APP_NAME} — Software & AI Engineering Consultancy`,
  description: TAGLINE,
  icons: {
    icon: LOGO_URL,
  },
  openGraph: {
    title: `${APP_NAME} — Software & AI Engineering Consultancy`,
    description: TAGLINE,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">
        <LocaleProvider>
          <LanguageToggle />
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}