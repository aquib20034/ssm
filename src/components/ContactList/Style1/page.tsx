import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";

type Props = {
  address: string;
  phone: string;
  webUrl: string;
};

const ContactListS1: FunctionComponent<Props> = ({
  address,
  phone,
  webUrl,
}) => {
  return (
    <ul className={styles.contactList}>
      <li className={styles.contactList__item}>
        <div className={styles.item}>
          <span className={styles.item__icon}>
            <span className="x_location-pin-1"></span>
          </span>

          <p className={`${styles.item__text} body-1`}>{address}</p>
        </div>
      </li>

      <li className={styles.contactList__item}>
        <div className={styles.item}>
          <span className={styles.item__icon}>
            <span className="x_phone-1"></span>
          </span>

          <a href={`tel:${phone}`} className={`${styles.item__link} body-1`}>
            {phone}
          </a>
        </div>
      </li>

      <li className={styles.contactList__item}>
        <div className={styles.item}>
          <span className={styles.item__icon}>
            <span className="x_globe-1"></span>
          </span>

          <a
            href={webUrl}
            target="_blank"
            className={`${styles.item__link} body-1`}
          >
            {webUrl}
          </a>
        </div>
      </li>
    </ul>
  );
};

export default ContactListS1;
