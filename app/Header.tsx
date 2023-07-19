import { NextPage } from "next";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.headerLink}>
        Inicio
      </Link>
      <Link href="/" className={styles.headerLink}>
        Quiénes Somos
      </Link>
      <Link href="/" className={styles.headerLink}>
        Contáctanos
      </Link>
      <Link href="/" className={styles.headerLink}>
        Registrarse
      </Link>
    </header>
  );
};

export default Header;
