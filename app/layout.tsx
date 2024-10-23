import type { Metadata } from "next";
import "./globals.css";

import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Mood Makers",
  description:
    "Our company specializes in Furniture Installation Works, offering precise setup services tailored for residential and commercial settings. Our dedicated team meticulously assembles and positions furniture, ensuring optimal functionality and visual appeal in every space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
