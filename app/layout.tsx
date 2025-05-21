import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavigationHeader from "@/components/layout/navigation-header";
import Footer from "../components/layout/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "LOOP: Car Insurance That DRIVES GOOD",
  description:
    "Affordable Auto Insurance. Quote online. No credit-check. Great member care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <NavigationHeader />
        <main className="min-h-svh bg-white text-black">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
