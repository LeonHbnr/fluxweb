import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FluxWeb • Bespoke Digital Flagships for Ambitious Companies",
  description:
    "FluxWeb designs and engineers category-defining, high-converting websites with kinetic scroll choreography, 3D brand worlds, and sub-second Next.js edge performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-canvas text-brand-umber selection:bg-brand-orange selection:text-brand-umber">
        {children}
      </body>
    </html>
  );
}
