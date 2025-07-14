import type { Metadata } from "next";
import { Baloo_Da_2 } from "next/font/google";
import "./globals.css";

const bd2 = Baloo_Da_2({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Student Portal",
  description: "A Student Portal For students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bd2.className} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
