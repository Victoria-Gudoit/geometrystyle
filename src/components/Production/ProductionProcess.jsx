import React, { useState, useRef, useEffect } from "react";
import css from "./production.module.css";
import { videos } from "../../data";
import { VideoModal } from "../VideoModal";
import { Helmet } from "react-helmet";

export const ProductionProcess = ({ isHomePage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRefs = useRef([]); // Массив для хранения референсов на видео

  // Функция для управления воспроизведением всех видео
  const controlVideosPlayback = (play) => {
    videoRefs.current.forEach((video) => {
      if (video) {
        play ? video.play() : video.pause();
      }
    });
  };

  // Открытие модального окна
  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    controlVideosPlayback(false); // Приостанавливаем все фоновые видео
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    // controlVideosPlayback(true); // Раскомментируйте, если хотите возобновить видео после закрытия
  };

  // Инициализация референсов для видео
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  return (
    <>
      <Helmet>
        <title>Geometry Style - Процесс Производства</title>
        <meta
          name="description"
          content="Узнайте о процессе производства от Геометрии Стиля — видео о создании столешниц и интерьерных решений из кварцевого агломерата в Беларуси."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Geometry Style, процесс производства, столешницы из камня, кварцевый агломерат, каменные подоконники Минск, технологии"
        />
      </Helmet>
      <section className={`${css.main} ${isHomePage ? css.noPadding : ""}`}>
        <h1 className={css.title}>Процесс производства</h1>
        <div className={css.videoList}>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={css.videoWrapper}
              onClick={() => openModal(video)}
            >
              <video muted
                className={css.video}
                ref={(el) => (videoRefs.current[index] = el)} // Привязываем референс
                src={video.src}
                poster={video.poster}
                controls
                loop
                playsInline
                aria-label={video.title}
              />
              <h2 className={css.videoTitle}>{video.title}</h2>
              <p className={css.videoDescription}>{video.description}</p>
            </div>
          ))}
        </div>
        <VideoModal
          isModalOpen={isModalOpen}
          videoSrc={selectedVideo?.src}
          videoPoster={selectedVideo?.poster}
          videoTitle={selectedVideo?.title}
          setIsModalOpen={closeModal} // Используем closeModal
        />
      </section>
    </>
  );
};