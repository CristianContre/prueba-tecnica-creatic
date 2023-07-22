import Card from "./Card";
import styles from "./SocialMedia.module.css";
import SocialMediaLink from "./SocialMediaLink";

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <Card className={styles.socialMediaCard}>
        <div className={styles.mediaCardContent}>
          <span>Síguenos en:</span>
          <div className={styles.logoContainer}>
            <SocialMediaLink mediaName="facebook" />
            <SocialMediaLink mediaName="instagram" />
            <SocialMediaLink mediaName="tiktok" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SocialMedia;
