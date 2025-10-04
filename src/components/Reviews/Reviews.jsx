import React, {useState} from "react";
import css from "./reviews.module.css";
import reviewOne from "../../img/reviews/reviewOne.webp";
import reviewTwo from "../../img/reviews/reviewTwo.webp";
import reviewThree from "../../img/reviews/reviewThree.webp";
import reviewFour from "../../img/reviews/reviewFour.webp";
import reviewFive from "../../img/reviews/rFive.webp";
import rSix from "../../img/reviews/rSix.webp";
import rSeven from "../../img/reviews/rSeven.webp";
import rEight from "../../img/reviews/rEight.webp";
import rNine from "../../img/reviews/rNine.webp";

import { Modal } from "../Modal";
import { Helmet } from "react-helmet";

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

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image.image);
    setIsModalOpen(true);
  };
  
  return (
    <>
          <Helmet>
        <title>Geometry Style - Столешницы из камння</title>
        <meta
          name="description"
          content="Читайте отзывы клиентов о Geometry Style — мастерской интерьерных решений в Беларуси. Качество столешниц и услуг подтверждено!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Geometry Style, отзывы клиентов, каменные столешницы, каменные подоконники, кварцевый агломерат, Беларусь, качество"
        />
      </Helmet>
    <section className={css.reviewsSection}>
      <h2 className={css.title}>Отзывы наших клиентов</h2>
      <div className={css.reviewsGrid}>
        {reviews.map((review) => (
          <div key={review.id} className={css.reviewCard}>
            <img
              src={review.image}
              alt={`Отзыв ${review.id}`}
              className={css.reviewImage}
              loading="lazy"   onClick={() => openModal(review)}
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
