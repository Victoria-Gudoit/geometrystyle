import React from "react";
import css from "./smallModal.module.css";

export const SmallModal = ({
  isModalOpen,
  selectedImage,
  setSelectedImage,
  setIsModalOpen,
  title, // Новый пропс для заголовка (опциональный)
  text,  // Новый пропс для текста (опциональный)
}) => {
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleModalClick = (e) => {
    // Закрываем модальное окно только если клик был по самому .modal (фону)
    if (e.target.classList.contains(css.modal)) {
      closeModal();
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className={css.modal} onClick={handleModalClick}>
          <span className={css.modalClose} onClick={closeModal}>
            ×
          </span>
          <div className={css.modalContentWrapper}>
            {selectedImage && (
              <img
                className={css.modalImage}
                src={selectedImage}
                alt={title || "Full screen"} 
              />
            )}
            {title && <h2 className={css.modalTitle}>{title}</h2>}
            {text && <p className={css.modalText}>{text}</p>}
          </div>
        </div>
      )}
    </>
  );
};