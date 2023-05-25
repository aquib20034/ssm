"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./index.module.scss";

type Props = {
  avatarUrl: string;
  authorName: string;
  rating: number;
  reviewText: string;
  images: string[];
};

const ReviewS1: FunctionComponent<Props> = ({
  avatarUrl,
  authorName,
  rating,
  reviewText,
  images,
}) => {
  const [localRating, setLocalRating] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleImages = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setLocalRating(rating);
  }, [rating]);

  return (
    <div className={styles.reviewS1}>
      <div
        className={`${styles.reviewS1__wrapper} ${
          isExpanded ? styles["reviewS1__wrapper--expanded"] : ""
        }`}
      >
        <div className={styles.reviewS1__top}>
          <div className={styles.author}>
            <div className={styles.author__avatar}>
              <figure>
                <img src={avatarUrl} alt={authorName} />
              </figure>
            </div>

            <div className={styles.author__name}>
              <p>{authorName}</p>
            </div>
          </div>

          <div className={styles.rating}>
            <div className={styles.rating__wrapper}>
              {[...Array(5)].map((e, index) => {
                return (
                  <span
                    key={`star-${index}`}
                    className={`${styles.rating__icon} ${
                      localRating <= index ? "" : styles["rating__icon--active"]
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
          </div>
        </div>

        <div className={styles.reviewS1__mid}>
          <div className={styles.reviewS1__text}>
            <p>{reviewText}</p>
          </div>

          <div className={styles.reviewS1__cta}>
            <button type="button" onClick={toggleImages}>
              <span className={styles.text}>View Images</span>
              <span
                className={`${styles.icon} ${
                  isExpanded ? styles["icon--rotated"] : ""
                }`}
              >
                <span className="x_arrow-down-1"></span>
              </span>
            </button>
          </div>
        </div>

        <div
          className={`${styles.reviewS1__bottom} ${
            isExpanded ? styles["reviewS1__bottom--expanded"] : ""
          }`}
        >
          <div className={styles.imageGrid}>
            {images && images.length
              ? images.map((url, index) => {
                  return (
                    <div
                      key={`image-${index}`}
                      style={{ display: `${index > 2 ? "none" : "block"}` }}
                      className={styles.imageGrid__item}
                    >
                      <figure>
                        <img src={url} alt={`Review Image ${index + 1}`} />
                      </figure>

                      {index === 2 ? (
                        <div
                          key={images.length + index}
                          className={styles.imageGrid__overlay}
                        >
                          <span>+{images.length - (index + 1)}</span>
                        </div>
                      ) : null}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewS1;
