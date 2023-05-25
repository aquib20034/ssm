import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

type Props = {
  routes: {
    title: string;
    path: string;
  }[];
};

const BreadcrumbS1: FunctionComponent<Props> = ({ routes }) => {
  return (
    <div className={styles.breadcrumbS1}>
      <div className={styles.breadcrumbS1__wrapper}>
        {routes && routes.length
          ? routes.map(({ title, path }, index) => {
              return (
                <div key={index} className={styles.breadcrumbS1__linkWrapper}>
                  <Link
                    href={path}
                    aria-label={title}
                    className={styles.breadcrumbS1__link}
                  >
                    {title}
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default BreadcrumbS1;
