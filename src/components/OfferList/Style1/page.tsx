import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {
  attributesList: {
    icon: any;
    key: string;
    value: string;
  }[];
};

const OfferListS1: FunctionComponent<Props> = ({ attributesList }) => {
  return (
    <div>
      <ul className={styles.offerList}>
        {attributesList && attributesList.length
          ? attributesList.map(({ icon, key, value }, index) => {
              return (
                <li key={index} className={styles.offerList__item}>
                  <div className={styles.item}>
                    <span className={styles.item__icon}>
                      <Image
                        src={icon}
                        alt="Icon"
                        width={16}
                        height={16}
                        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                      />
                    </span>

                    <div>
                      <span className={`${styles.item__key} body-1`}>
                        {key}:{" "}
                      </span>
                      <span className={`${styles.item__value} body-1`}>
                        {value}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default OfferListS1;
