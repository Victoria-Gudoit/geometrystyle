import React, { useState, useRef, useEffect } from "react";
import css from "./production.module.css";
import { videos } from "../../data";
import { VideoModal } from "../VideoModal";
import { Helmet } from "react-helmet-async";

export const ProductionProcess = ({ isHomePage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRefs = useRef([]);

  const controlVideosPlayback = (play) => {
    videoRefs.current.forEach((video) => {
      if (video) {
        play ? video.play() : video.pause();
      }
    });
  };

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    controlVideosPlayback(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  return (
    <>
      {!isHomePage && (
        <Helmet>
    <link rel="canonical" href="https://geometrystyle.by/production/" />
          <title>Geometry Style - Процесс Производства</title>
          <meta
            name="description"
            content="Узнайте о процессе производства от Геометрии Стиля — видео о создании столешниц и интерьерных решений из кварцевого агломерата в Беларуси."
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="столешницы из камня, каменные столешницы, кварцевые подоконники, Минск, Беларусь, процесс производства"
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
                  name: "Процесс производства",
                  item: "https://geometrystyle.by/production/"
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      <section className={`${css.main} ${isHomePage ? css.noPadding : ""}`}>
        <h1 className={css.title}>Процесс производства</h1>
        <div className={css.videoList}>
          {videos.map((video, index) => (
            <div key={video.id} className={css.videoWrapper}>
              <video
                className={css.video}
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                poster={video.poster}
                controls
                loop
                playsInline
                aria-label={video.title}
              />
              <h2 onClick={() => openModal(video)} className={css.videoTitle}>
                {video.title}
              </h2>
              <p className={css.videoDescription}>{video.description}</p>
            </div>
          ))}
        </div>
        <VideoModal
          isModalOpen={isModalOpen}
          videoSrc={selectedVideo?.src}
          videoPoster={selectedVideo?.poster}
          videoTitle={selectedVideo?.title}
          setIsModalOpen={closeModal}
        />
      </section>
    </>
  );
};