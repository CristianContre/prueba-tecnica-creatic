import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Card>
        <img src="/mapa.png" height={400} width={400} alt="mapa del Cauca" />
      </Card>
      <Card className={styles.rightCard}>
        <div className={styles.bigImages}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/df/Hermoso_Atardecer_en_Popay%C3%A1n_%284279606793%29.jpg"
            alt="Centro de Popayán"
            className={styles.image}
          />
        </div>
        <div className={styles.smallImages}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Cerro_de_Munchique_en_atardecer_payan%C3%A9s._HDR._%283857625351%29.jpg"
            alt="Centro de Popayán"
            className={styles.image}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Panoramica_de_Popay%C3%A1n_%28Cerro_el_Morro%29.jpg"
            alt="Centro de Popayán"
            className={styles.image}
          />
        </div>
      </Card>
    </div>
  );
}
