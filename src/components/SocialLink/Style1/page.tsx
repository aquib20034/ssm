import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  link: string;
  icon: string;
};

const SocialLinkS1: FunctionComponent<Props> = ({ title, link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      aria-label={title}
      className={styles.socialLink}
    >
      <span className={`${styles.socialLink__icon} ${icon}`}></span>
    </a>
  );
};

export default SocialLinkS1;
