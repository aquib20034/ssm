import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";

type Props = {
  type?: "button" | "reset" | "submit" | undefined;
  title: string;
  variant?: "primary" | "secondary" | "green" | "disabled";
  showIcon?: boolean;
  clickHandler: () => void;
};

const ButtonS2: FunctionComponent<Props> = ({
  type = "button",
  title,
  variant = "primary",
  showIcon = true,
  clickHandler,
}) => {
  return (
    <button
      type={type}
      aria-label={title}
      className={`${styles.buttonS2} ${
        variant ? styles[`buttonS2--${variant}`] : ""
      }`}
      onClick={clickHandler}
    >
      <span className={styles.buttonS2__title}>{title}</span>
      {showIcon ? (
        <span className={styles.buttonS2__icon}>
          <span className="x_arrow-right-1"></span>
        </span>
      ) : null}
    </button>
  );
};

export default ButtonS2;
