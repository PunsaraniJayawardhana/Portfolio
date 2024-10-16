import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import { Toaster } from "react-hot-toast";

const font = Sora({
  weight:['100','200','300','400','500','600','700','800'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Punsarani jayawardhana",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />
        {children}
        <Toaster position="top-right"/>
        <Footer />
        <ScrollToTop />
        </body>
    </html>
  );
}
