import { NextPage } from "next";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.headerLink}>
        Inicio
      </Link>
      <Link href="/about" className={styles.headerLink}>
        Quiénes Somos
      </Link>
      <Link href="/contact" className={styles.headerLink}>
        Contáctanos
      </Link>
      <Link href="/register" className={styles.headerLink}>
        Registrarse
      </Link>
    </header>
  );
};

export default Header;
