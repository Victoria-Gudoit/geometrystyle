import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./materialDetail.module.css";
import { Modal } from "../Modal";

export const MaterialDetail = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Получаем ID материала из URL
  const { id } = useParams();

  // Сопоставление ID материала с папкой и названием
  const materialMap = {
    1: { folder: "avant", title: "Avant Quartz" },
    2: { folder: "noblle", title: "Noblle" },
    3: { folder: "caesarstone", title: "Caesarstone" },
    4: { folder: "avarus", title: "Аварус" },
  };

  // Текущая папка и заголовок на основе ID
  const currentMaterial = materialMap[id] || {
    folder: "avant",
    title: "Avant Quartz",
  };

  // Функция для загрузки изображений из указанной папки
  const loadImages = (folder) => {
    try {
      let requireImages;
      // Используем статические пути для каждой папки
      switch (folder) {
        case "avant":
          requireImages = require.context(
            "../../avant", // Путь относительно MaterialDetail.js
            false,
            /\.(png|jpe?g|webp)$/
          );
          break;
        case "noblle":
          requireImages = require.context(
            "../../noblle",
            false,
            /\.(png|jpe?g|webp)$/
          );
          break;
        case "caesarstone":
          requireImages = require.context(
            "../../caesarstone",
            false,
            /\.(png|jpe?g|webp)$/
          );
          break;
        case "avarus":
          requireImages = require.context(
            "../../avarus",
            false,
            /\.(png|jpe?g|webp)$/
          );
          break;
        default:
          console.warn(`Папка ${folder} не найдена, используем avant`);
          requireImages = require.context(
            "../../avant",
            false,
            /\.(png|jpe?g|webp)$/
          );
      }
      const loadedImages = requireImages.keys().map((filename) => ({
        src: requireImages(filename), // Путь к изображению
        alt: filename.split("/").pop().split(".")[0], // Извлекаем имя файла без пути и расширения
      }));

      setImages(loadedImages);
    } catch (error) {
      console.error("Ошибка загрузки изображений:", error);
      setImages([]);
    }
  };

  // Загружаем изображения при изменении ID
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
          <img
            key={index}
            className={css.img}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(image)}
            loading="lazy"
          />
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
