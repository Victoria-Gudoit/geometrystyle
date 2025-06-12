import React from "react";
import css from "./videoModal.module.css";

export const VideoModal = ({
  isModalOpen,
  videoSrc,
  videoPoster,
  videoTitle,
  setIsModalOpen,
}) => {
  const closeModal = () => {
    setIsModalOpen(false);
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
            <video
              className={css.modalVideo}
              src={videoSrc}
              poster={videoPoster}
              controls
              autoPlay
              muted 
              playsInline
              aria-label={videoTitle || "Full screen video"}
            />
            {videoTitle && <h2 className={css.modalTitle}>{videoTitle}</h2>}
          </div>
        </div>
      )}
    </>
  );
};
