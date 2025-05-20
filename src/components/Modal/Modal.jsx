import React from "react";
import css from "./modal.module.css";

export const Modal = ({
  isModalOpen,
  selectedImage,
  setSelectedImage,
  setIsModalOpen,
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
          <img
            className={css.modalContent}
            src={selectedImage}
            alt="Full screen"
          />
        </div>
      )}
    </>
  );
};
