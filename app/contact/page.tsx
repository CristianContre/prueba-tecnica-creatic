import Card from "@/components/Card";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.contact}>
      <Card className={styles.cardInfo}>
        <p>
          Vereda el Cofre, Parcelación la Margarita, Finca Santa María, Casa 1,
          Popayán, Cauca 190002, CO
        </p>
        <br />
        <p>comunicaciones@cdtcreatic.com</p>
      </Card>
      <Card className={styles.cardInfo}>
        <img src="/logo.png" className={styles.logo} alt="logo cdt creatic" />
      </Card>
    </div>
  );
}
