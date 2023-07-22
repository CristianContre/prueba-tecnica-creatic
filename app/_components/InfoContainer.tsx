import styles from "./InfoContainer.module.css";

interface InfoContainerProps {
  title: string;
  description: string;
}

const InfoContainer = ({ title, description }: InfoContainerProps) => {
  return (
    <div className={styles.infoContainer}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default InfoContainer;
