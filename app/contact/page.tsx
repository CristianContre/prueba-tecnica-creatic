import Image from "next/image";
import styles from "./page.module.css";
import Card from "../_components/Card";

export default function About() {
  return (
    <Card>
      <div className={styles.aboutCardContent}>
        <div>
          <p>
            Vereda el Cofre, Parcelación la Margarita, Finca Santa María, Casa
            1, Popayán, Cauca 190002, CO
          </p>
          <br />
          <p>comunicaciones@cdtcreatic.com</p>
        </div>
        <Image
          src="/logo.png"
          alt="logo cdt creatic"
          width={100}
          height={100}
          layout="responsive"
          className={styles.logo}
        />
      </div>
    </Card>
  );
}
