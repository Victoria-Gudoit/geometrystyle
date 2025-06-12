import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./workDetail.module.css";
import { works } from "../../data";
import { SmallModal } from "../SmallModal";
import { truncateText } from "../utils";

export const WorkDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (image, description) => {
    setSelectedImage(image);
    setDescription(description);
    setIsModalOpen(true);
  };

  const toggleText = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  const { id } = useParams();
  const work = works.find((work) => work.id === parseInt(id));

  if (!work) {
    return <div>Работа не найдена</div>;
  }

  return (
    <section className={css.main}>
      <h1 className={css.title}>{work.title}</h1>
      <div className={css.subtitleWrapper}>
        <p className={css.subtitle}>
          {truncateText(work.subtitle, isTextExpanded)}
          {isMobile && !isTextExpanded && work.subtitle?.length > 100 && (
            <button className={css.showMoreButton} onClick={toggleText}>
              Ещё
            </button>
          )}
        </p>
      </div>
      <div className={css.work}>
        {work.images.map((image, index) => (
          <div
            key={index}
            className={css.wrapper}
            onClick={() => openModal(image, work.description?.[index] || "")}
          >
            <img
              key={index}
              className={css.img}
              src={image}
              alt={`${work.title} ${index + 1}`}
            />{" "}
            <p className={css.text}>
              {work.description?.[index] || "Описание отсутствует"}
            </p>{" "}
          </div>
        ))}
      </div>
      <SmallModal
        isModalOpen={isModalOpen}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        setIsModalOpen={setIsModalOpen}
        description={description}
      />
    </section>
  );
};
