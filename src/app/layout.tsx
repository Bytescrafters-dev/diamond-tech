import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./pageComponents/common/header";
import PageTransition from "./pageComponents/ui/pageTransition";
import Footer from "./pageComponents/common/footer";
import SubPageTransition from "./pageComponents/ui/subPageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Diamond Tech",
  description:
    "Diamond Tech offers cutting-edge networking and tech solutions tailored to your business needs. Explore our services and take the next step towards tech excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <SubPageTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
