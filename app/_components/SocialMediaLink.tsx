import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

import styles from "./SocialMediaLink.module.css";

interface SocialMediaLinkProps {
  mediaName: "facebook" | "instagram" | "tiktok";
}

const SocialMediaLink = ({ mediaName }: SocialMediaLinkProps) => {
  const className = `${styles.logo} ${styles[mediaName]}`;

  return (
    <Link
      href={`https://www.${mediaName}.com/cdtcreatic`}
      target="_blank"
      className={styles.link}
    >
      {mediaName === "facebook" ? (
        <FaFacebook className={className} />
      ) : mediaName === "instagram" ? (
        <FaInstagram className={className} />
      ) : (
        <FaTiktok className={className} />
      )}
    </Link>
  );
};

export default SocialMediaLink;
