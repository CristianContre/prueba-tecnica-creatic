import AppLink from "./AppLink";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.menuIcon}>☰</span>
        <AppLink href="/">Inicio</AppLink>
        <AppLink href="/about">Quiénes Somos</AppLink>
        <AppLink href="/contact">Contáctanos</AppLink>
        <AppLink href="/register">Registrarse</AppLink>
      </nav>
    </header>
  );
};

export default Header;
