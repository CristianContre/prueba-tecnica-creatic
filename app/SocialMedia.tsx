import SocialMediaLink from "@/components/SocialMediaLink";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <span>Síguenos en:</span>
      <div className={styles.logoContainer}>
        <SocialMediaLink mediaName="facebook" />
        <SocialMediaLink mediaName="instagram" />
        <SocialMediaLink mediaName="tiktok" />
      </div>
    </div>
  );
};

export default SocialMedia;
