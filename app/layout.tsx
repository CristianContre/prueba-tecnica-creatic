"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import Header from "./_components/Header";
import "./globals.css";
import styles from "./layout.module.css";
import SocialMedia from "./_components/SocialMedia";

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
          <main className={styles.main}>
            <div className={styles.background}></div>
            <div className={styles.content}>
              {children}
              <SocialMedia />
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
