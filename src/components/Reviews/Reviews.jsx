import React from "react";
import css from "./reviews.module.css";

import reviewOne from "../../img/reviews/reviewOne.webp";
import reviewTwo from "../../img/reviews/reviewTwo.webp";
import reviewThree from "../../img/reviews/reviewThree.webp";
import reviewFour from "../../img/reviews/reviewFour.webp";

// Статический массив с отзывами
const reviews = [
  {
    id: 1,
    image: reviewOne, // Базовое изображение
  },
  {
    id: 2,
    image: reviewTwo,
  },
  {
    id: 3,
    image: reviewThree,
  },
  {
    id: 3,
    image: reviewFour,
  },
];

export const Reviews = () => {
  return (
    <section className={css.reviewsSection}>
      <h2 className={css.title}>Отзывы наших клиентов</h2>
      <div className={css.reviewsGrid}>
        {reviews.map((review) => (
          <div key={review.id} className={css.reviewCard}>
            <img
              src={review.image}
              alt={`Отзыв ${review.id}`}
              className={css.reviewImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
