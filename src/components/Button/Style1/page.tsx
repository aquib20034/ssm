import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";

type Props = {
  type?: "button" | "reset" | "submit" | undefined;
  title: string;
  variant?: "light" | "dark";
  clickHandler: () => void;
};

const ButtonS1: FunctionComponent<Props> = ({
  type = "button",
  title,
  variant = "dark",
  clickHandler,
}) => {
  return (
    <button
      type={type}
      aria-label={title}
      className={`${styles.buttonS1} ${
        variant ? styles[`buttonS1--${variant}`] : ""
      }`}
      onClick={clickHandler}
    >
      <span className={styles.buttonS1__title}>{title}</span>
    </button>
  );
};

export default ButtonS1;
