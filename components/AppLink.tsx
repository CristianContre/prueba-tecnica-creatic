"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import styles from "./AppLink.module.css";

interface AppLinkProps {
  href: string;
  children?: ReactNode;
}

const AppLink = ({ href, children }: AppLinkProps) => {
  const path = usePathname();
  const activeClass = path === href ? ` ${styles.activeLink}` : "";

  return (
    <Link href={href} className={`${styles.headerLink}${activeClass}`}>
      {children}
    </Link>
  );
};

export default AppLink;
