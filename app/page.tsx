import Image from "next/image";
import Card from "./_components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Card>
        <Image
          src="/mapa.png"
          alt="mapa del Cauca"
          className="image"
          layout="responsive"
          height={512}
          width={540}
        />
      </Card>
      <Card>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/d/df/Hermoso_Atardecer_en_Popay%C3%A1n_%284279606793%29.jpg"
          alt="Centro de Popayán"
          className="image"
          layout="responsive"
          width={100}
          height={100}
        />
        <div className={styles.imageGrid}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Cerro_de_Munchique_en_atardecer_payan%C3%A9s._HDR._%283857625351%29.jpg"
            alt="Centro de Popayán"
            className="image"
            layout="responsive"
            width={100}
            height={100}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Panoramica_de_Popay%C3%A1n_%28Cerro_el_Morro%29.jpg"
            alt="Centro de Popayán"
            className="image"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </Card>
    </>
  );
}
