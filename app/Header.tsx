"use client";

import AppLink from "@/components/AppLink";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <AppLink href="/">Inicio</AppLink>
      <AppLink href="/about">Quiénes Somos</AppLink>
      <AppLink href="/contact">Contáctanos</AppLink>
      <AppLink href="/register">Registrarse</AppLink>
    </header>
  );
};

export default Header;
