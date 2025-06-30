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
    imageHighRes: "/images/review1@2x.webp", // Для ретина-экранов
  },
  {
    id: 2,
    image: reviewTwo,
    imageHighRes: "/images/review2@2x.webp",
  },
  {
    id: 3,
    image: reviewThree,
    imageHighRes: "/images/review3@2x.webp",
  },
  {
    id: 3,
    image: reviewFour,
    imageHighRes: "/images/review3@2x.webp",
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
              srcSet={`${review.image} 1x, ${review.imageHighRes} 2x`}
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
