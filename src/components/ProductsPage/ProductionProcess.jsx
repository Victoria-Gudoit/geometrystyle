import React, { useState } from "react";
import css from "./production.module.css";
import { videos } from "../../data";
import { VideoModal } from "../VideoModal";

export const ProductionProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <section className={css.main}>
      <h1 className={css.title}>Процесс производства</h1>
      <div className={css.videoList}>
        {videos.map((video) => (
          <div
            key={video.id}
            className={css.videoWrapper}
            onClick={() => openModal(video)}
          >
            <video
              className={css.video}
              src={video.src}
              poster={video.poster}
              controls
              muted
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
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};
