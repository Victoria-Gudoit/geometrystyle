import React, { useState } from 'react';
import css from "./materialDetail.module.css";

export const MaterialDetail = () => {
    const requireImages = require.context('../../avant/', false, /\.(png|jpe?g|webp)$/);
    const images = requireImages.keys().map((filename) => requireImages(filename));

      // Состояние для модального окна и выбранного изображения
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Функция открытия модального окна
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Функция закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

    // Обработчик клика по модальному окну
    const handleModalClick = (e) => {
      // Закрываем модальное окно только если клик был по самому .modal (фону)
      if (e.target.classList.contains(css.modal)) {
        closeModal();
      }
    };

    return    <section className={css.main}>
    <h1 className={css.title}>
      Avant Quartz
    </h1>  
    <div  className={css.container}>
{images.map((image, index) => (
          <img key={index} className={css.img}         
          src={image}
          alt={`Photo ${index + 1}`} 
          onClick={() => openModal(image)} // Открываем модальное окно при клике
          loading="lazy"
          
          />
          
      ))}
    </div>

    
      {/* Модальное окно */}
      {isModalOpen && (
        <div className={css.modal} onClick={handleModalClick}>
          <span className={css.modalClose} onClick={closeModal}>
            ×
          </span>
          <img className={css.modalContent} src={selectedImage} alt="Full screen" />
        </div>
      )}

  </section>
}
