import Image from "next/image";
import Card from "../_components/Card";
import SubmitForm from "../_components/SubmitForm";
import styles from "./page.module.css";

export default function Register() {
  return (
    <>
      <Card className={styles.cardForm}>
        <SubmitForm />
      </Card>
      <Card>
        <p>Contenido multimedia muy llamativo</p>
        <Image
          src="/register-image-01.jpg"
          alt="atardecer en Popayán"
          className="image"
          width={100}
          height={100}
          layout="responsive"
        />
        <Image
          src="/register-image-02.jpg"
          alt="noche en Popayán"
          className="image"
          width={100}
          height={100}
          layout="responsive"
        />
      </Card>
    </>
  );
}
