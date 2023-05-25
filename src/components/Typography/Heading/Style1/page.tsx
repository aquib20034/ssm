import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";

type Props = {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  text: string;
  variant?: "tiny" | "small" | "medium" | "large" | "huge";
  color?: "default" | "primary" | "secondary" | "disabled";
  align?: "left" | "center" | "right";
};

const HeadingS1: FunctionComponent<Props> = ({
  headingLevel = "h1",
  text = "",
  variant = "medium",
  color = "default",
  align = "left",
}) => {
  const Heading = headingLevel;
  return (
    <Heading
      className={`
      ${styles.headingS1}
      ${styles[`headingS1--${variant}`]} 
      ${styles[`headingS1--${color}`]}
      ${styles[`headingS1--${align}`]}
      `}
      aria-label={text}
    >
      {text}
    </Heading>
  );
};

export default HeadingS1;
