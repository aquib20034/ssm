import React from "react";
import styles from "./index.module.scss";

const ReviewSummaryS1 = () => {
  const localRating = 2;

  return (
    <div className={styles.reviewSummaryS1}>
      <div className={styles.reviewSummaryS1__wrapper}>
        <div className={styles.reviewSummaryS1__info}>
          <p>
            Based on 20 customer reviews and online research, zarahome.com has a
            rating of 1.6 out of 5 stars, indicating that most customers are not
            satisfied with Zara Home.
          </p>
        </div>

        <div className={styles.reviewSummaryS1__grid}>
          <div className={styles.reviewSummaryS1__left}>
            <div>
              <div className={styles.reviewSummaryS1__result}>
                <span className={styles.obtainedReview}>1.6</span>
                <span className={styles.maxReview}>/5.0</span>
              </div>

              <div className={styles.reviewSummaryS1__reviewCount}>
                20 Reviews
              </div>
            </div>

            <div>
              <div className={styles.reviewSummaryS1__stars}>
                {[...Array(5)].map((e, index) => {
                  return (
                    <span
                      key={`star-${index}`}
                      className={`${styles.icon} ${
                        localRating <= index ? "" : styles["icon--active"]
                      }`}
                    >
                      <span
                        className={`${
                          localRating <= index
                            ? "x_star-unfilled"
                            : "x_star-filled"
                        }`}
                      ></span>
                    </span>
                  );
                })}
              </div>

              <div className={styles.reviewSummaryS1__remarks}>Bad</div>
            </div>
          </div>

          <div className={styles.reviewSummaryS1__right}>
            <div className={styles.ratingDetail}>
              <div className={styles.ratingDetail__item}>
                <div className={styles.ratingDetail__title}>5 star (2)</div>
                <div className={styles.ratingDetail__progress}>
                  <div></div>
                </div>
                <div className={styles.ratingDetail__percentage}>10%</div>
              </div>

              <div className={styles.ratingDetail__item}>
                <div className={styles.ratingDetail__title}>4 star (2)</div>
                <div className={styles.ratingDetail__progress}>
                  <div></div>
                </div>
                <div className={styles.ratingDetail__percentage}>10%</div>
              </div>

              <div className={styles.ratingDetail__item}>
                <div className={styles.ratingDetail__title}>3 star (2)</div>
                <div className={styles.ratingDetail__progress}>
                  <div></div>
                </div>
                <div className={styles.ratingDetail__percentage}>10%</div>
              </div>

              <div className={styles.ratingDetail__item}>
                <div className={styles.ratingDetail__title}>2 star (2)</div>
                <div className={styles.ratingDetail__progress}>
                  <div></div>
                </div>
                <div className={styles.ratingDetail__percentage}>10%</div>
              </div>

              <div className={styles.ratingDetail__item}>
                <div className={styles.ratingDetail__title}>1 star (17)</div>
                <div className={styles.ratingDetail__progress}>
                  <div></div>
                </div>
                <div className={styles.ratingDetail__percentage}>10%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummaryS1;
