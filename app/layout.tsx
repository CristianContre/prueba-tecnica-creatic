"use client";

import PageContent from "@/components/PageContent";
import { store } from "@/store/store";
import type { Metadata } from "next";
import { Provider } from "react-redux";
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
        <Provider store={store}>
          <Header />
          <SocialMedia />
          <PageContent>{children}</PageContent>
        </Provider>
      </body>
    </html>
  );
}
