import Card from "@/components/Card";
import SocialMediaLink from "@/components/SocialMediaLink";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <Card className={styles.socialMediaCard}>
        <span>Síguenos en:</span>
        <div className={styles.logoContainer}>
          <SocialMediaLink mediaName="facebook" />
          <SocialMediaLink mediaName="instagram" />
          <SocialMediaLink mediaName="tiktok" />
        </div>
      </Card>
    </div>
  );
};

export default SocialMedia;
