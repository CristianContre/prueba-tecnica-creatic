import styles from "./PageContent.module.css";

interface PageContentProps {
  children?: React.ReactNode;
}

const PageContent = ({ children }: PageContentProps) => {
  return (
    <main className={styles.pageContent}>
      <div className={styles.background}></div>
      <div  className={styles.content}>{children}</div>
    </main>
  );
};

export default PageContent;
