import React from "react";
import css from "./smallModal.module.css";

export const SmallModal = ({
  isModalOpen,
  selectedImage,
  setSelectedImage,
  setIsModalOpen,
  description,
}) => {
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleModalClick = (e) => {
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
                alt={description || "Full screen"}
              />
            )}
            {description && <h2 className={css.modalTitle}>{description}</h2>}
          </div>
        </div>
      )}
    </>
  );
};
