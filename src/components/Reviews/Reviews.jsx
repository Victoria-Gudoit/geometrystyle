import React, { useState } from "react";
import css from "./reviews.module.css";
import reviewFour from "../../img/reviews/reviewFour.webp";
import reviewFive from "../../img/reviews/rFive.webp";
import rSix from "../../img/reviews/rSix.webp";
import rSeven from "../../img/reviews/rSeven.webp";
import rEight from "../../img/reviews/rEight.webp";
import rNine from "../../img/reviews/rNine.webp";
import { Modal } from "../Modal";
import { Helmet } from "react-helmet-async";

const reviews = [
  {
    id: 5,
    image: reviewFive,
  },
  {
    id: 6,
    image: rSix,
  },
  {
    id: 7,
    image: rSeven,
  },
  {
    id: 8,
    image: rEight,
  },
  {
    id: 4,
    image: reviewFour,
  },
  {
    id: 9,
    image: rNine,
  },
];

export const Reviews = ({isHomePage}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image.image);
    setIsModalOpen(true);
  };

  return (
    <>
    {!isHomePage && (
      <Helmet>
    <link rel="canonical" href="https://geometrystyle.by/reviews/" />
        <title>Отзывы наших клиентов</title>
        <meta
          name="description"
          content="Читайте отзывы клиентов о Geometry Style — мастерской интерьерных решений в Беларуси. Качество столешниц и услуг подтверждено!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Geometry Style, отзывы клиентов, каменные столешницы, каменные подоконники, кварцевый агломерат, Беларусь, качество"
        />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Главная",
                  item: "https://geometrystyle.by/"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Отзывы",
                  item: "https://geometrystyle.by/reviews/"
                }
              ]
            })}
          </script>
      </Helmet>)}
      <section className={`${css.reviewsSection} ${isHomePage ? css.noPadding : ""}`}>
        <h2 className={css.title}>Отзывы наших клиентов</h2>
        <div className={css.reviewsGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={css.reviewCard}>
              <img
                src={review.image}
                alt={`Отзыв ${review.id}`}
                className={css.reviewImage}
                loading="lazy"
                onClick={() => openModal(review)}
              />
            </div>
          ))}
        </div>
        <Modal
          isModalOpen={isModalOpen}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          setIsModalOpen={setIsModalOpen}
        />
      </section>
    </>
  );
};
