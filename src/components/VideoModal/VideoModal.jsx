import React, { useRef, useEffect } from "react";
import css from "./videoModal.module.css";
export const VideoModal = ({
  isModalOpen,
  videoSrc,
  videoPoster,
  videoTitle,
  setIsModalOpen,
}) => {
  const videoRef = useRef(null);
  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
  };
  const handleModalClick = (e) => {
    if (e.target.classList.contains(css.modal)) {
      closeModal();
    }
  };
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);
  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Ошибка автозапуска видео:", error);
      });
    }
  }, [isModalOpen]);
  if (!isModalOpen || !videoSrc) return null;
  return (
    <div className={css.modal} onClick={handleModalClick}>
      <button
        className={css.modalClose}
        onClick={closeModal}
        aria-label="Закрыть модальное окно"
        title="Закрыть"
      >
        ×
      </button>
      <div className={css.modalContentWrapper}>
        <video
          ref={videoRef}
          className={css.modalVideo}
          src={videoSrc}
          poster={videoPoster}
          controls
          autoPlay
          playsInline
          aria-label={videoTitle || "Видео в полноэкранном режиме"}
        />
        {videoTitle && <h2 className={css.modalTitle}>{videoTitle}</h2>}
      </div>
    </div>
  );
};
