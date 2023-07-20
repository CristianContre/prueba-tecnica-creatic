import PageContent from "@/components/PageContent";
import type { Metadata } from "next";
import Header from "./Header";
import SocialMedia from "./SocialMedia";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDT CreaTIC",
  description: "Centro de desarrollo tecnológico CreaTIC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SocialMedia />
        <PageContent>{children}</PageContent>
      </body>
    </html>
  );
}
