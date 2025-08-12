import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./materialDetail.module.css";
import { Modal } from "../Modal";

export const MaterialDetail = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { id } = useParams();

  const materialMap = {
    1: { folder: "avant", title: "Avant Quartz" },
    2: { folder: "noblle", title: "Noblle" },
    3: { folder: "caesarstone", title: "Caesarstone" },
    4: { folder: "avarus", title: "Аварус" },
    5: { folder: "radianz", title: "Radianz" },
    6: { folder: "belenco", title: "Belenco" },
  };

  const currentMaterial = materialMap[id] || {
    folder: "avant",
    title: "Avant Quartz",
  };

  const loadImages = (folder) => {
    try {
      let requireImages;
      switch (folder) {
        case "avant":
          requireImages = require.context("../../avant", false, /\.(png|jpe?g|webp)$/);
          break;
        case "noblle":
          requireImages = require.context("../../noblle", false, /\.(png|jpe?g|webp)$/);
          break;
        case "caesarstone":
          requireImages = require.context("../../caesarstone", false, /\.(png|jpe?g|webp)$/);
          break;
        case "avarus":
          requireImages = require.context("../../avarus", false, /\.(png|jpe?g|webp)$/);
          break;
        case "radianz":
          requireImages = require.context("../../radianz", false, /\.(png|jpe?g|webp)$/);
          break;
        case "belenco":
          requireImages = require.context("../../belenco", false, /\.(png|jpe?g|webp)$/);
          break;
        default:
          console.warn(`Папка ${folder} не найдена, используем avant`);
          requireImages = require.context("../../avant", false, /\.(png|jpe?g|webp)$/);
      }
      const loadedImages = requireImages.keys().map((filename) => ({
        src: requireImages(filename),
        alt: filename.split("/").pop().split(".")[0], // Извлекаем имя без расширения
      }));

      setImages(loadedImages);
    } catch (error) {
      console.error("Ошибка загрузки изображений:", error);
      setImages([]);
    }
  };

  useEffect(() => {
    loadImages(currentMaterial.folder);
  }, [currentMaterial.folder]);

  const openModal = (image) => {
    setSelectedImage(image.src);
    setIsModalOpen(true);
  };

  return (
    <section className={css.main}>
      <h1 className={css.title}>{currentMaterial.title}</h1>
      <div className={css.container}>
        {images.map((image, index) => (
          <div key={index} className={css.imageWrapper}>
            <img
              className={css.img}
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(image)}
              loading="lazy"
            />
            {currentMaterial.folder === "belenco" && (
              <p className={css.imageCaption}>{image.alt}</p>
            )}
          </div>
        ))}
      </div>
      <Modal
        isModalOpen={isModalOpen}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};