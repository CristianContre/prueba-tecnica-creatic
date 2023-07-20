import Card from "@/components/Card";
import SubmitForm from "@/components/SubmitForm";
import styles from "./page.module.css";

export default function Register() {
  return (
    <div className={styles.register}>
      <div>
        <Card className={styles.cardForm}>
          <SubmitForm />
        </Card>
      </div>
      <div>
        <Card className={styles.cardImages}>
          <p>Contenido multimedia muy llamativo</p>
          <img
            src="https://c0.wallpaperflare.com/preview/82/858/544/colombia-popayan.jpg"
            className={styles.image}
            alt="atardecer en Popayán"
          />
          <img
            src="https://c0.wallpaperflare.com/preview/399/576/18/colombia-popayan-travel-colonial.jpg"
            className={styles.image}
            alt="noche en Popayán"
          />
        </Card>
      </div>
    </div>
  );
}
