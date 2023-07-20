import Card from "@/components/Card";
import InfoContainer from "@/components/InfoContainer";
import styles from "./page.module.css";

export default function About() {
  return (
    <Card className={styles.cardInfo}>
      <InfoContainer
        title="Misión"
        description="La misión define el propósito de la existencia de la mpresa y lo que
            la diferencia de las demás. En otras palabras, tiene que ver con la
            propuesta de valor del negocio"
      />
      <InfoContainer
        title="Visión"
        description="La visión es el destino al que la empresa quiere llegar. En este
          sentido, establece los parámetros para la toma de decisiones de una
          empresa, las inversiones y la forma de definir estrategias"
      />
    </Card>
  );
}
