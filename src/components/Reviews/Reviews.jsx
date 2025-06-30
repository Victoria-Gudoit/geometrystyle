// Reviews.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./reviews.module.css";

import reviewOne from "../../img/reviews/reviewOne.webp"
import reviewTwo from "../../img/reviews/reviewTwo.webp"
import reviewThree from "../../img/reviews/reviewThree.webp"


// Статический массив с отзывами
const reviews = [
  {
    id: 1,
    image: reviewOne
  },
  {
    id: 2,
    image: reviewTwo
  },
  {
    id: 3,
    image: reviewThree
  },
];

export const Reviews = () => {
  const sliderSettings = {
    dots: true, // Минималистичные точки навигации
    infinite: true, // Зацикленный слайдер
    speed: 500, // Скорость анимации (в миллисекундах)
    slidesToShow: 2, // Показывать по два слайда
    slidesToScroll: 1, // Прокручивать по одному слайду
    arrows: false, // Без стрелок для минимализма
    autoplay: true, // Включаем автопрокрутку
    autoplaySpeed: 3000, // Интервал автопрокрутки (3 секунды)
    pauseOnHover: true, // Пауза при наведении мыши
    responsive: [
      {
        breakpoint: 1024, // Таблетки
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Мобильные устройства
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={css.reviewsSection}>
      <h2 className={css.title}>Отзывы наших клиентов</h2>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <div key={review.id} className={css.reviewCard}>
      <img
              src={review.image}
              alt={`Отзыв ${review.id}`}
              className={css.reviewImage}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};