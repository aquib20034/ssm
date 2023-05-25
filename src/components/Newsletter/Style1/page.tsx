import React from "react";
import styles from "./index.module.scss";

const NewsletterS1 = () => {
  return (
    <div className={styles.newsletterS1}>
      <div className={`${styles.newsletterS1__wrapper} container`}>
        <div className={styles.newsletterS1__left}>
          <p>
            <span>STAY BULLETPROOF: </span>

            <span>SUBSCRIBE TODAY</span>
          </p>
        </div>

        <div className={styles.newsletterS1__right}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.newsletterS1__form}
          >
            <div className={styles.newsletterS1__input}>
              <input type="text" placeholder="Enter Email Address"></input>
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterS1;
