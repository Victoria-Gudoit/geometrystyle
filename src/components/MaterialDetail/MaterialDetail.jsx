import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./materialDetail.module.css";

export const MaterialDetail = () => {
  // Получаем ID материала из URL
  const { id } = useParams();

  // Сопоставление ID материала с папкой и названием
  const materialMap = {
    1: { folder: "avant", title: "Avant Quartz" },
    2: { folder: "noblle", title: "Noblle" },
    // Добавьте другие материалы здесь, например:
    // 3: { folder: 'newCollection', title: 'New Collection' },
  };

  // Текущая папка и заголовок на основе ID
  const currentMaterial = materialMap[id] || {
    folder: "avant",
    title: "Avant Quartz",
  };

  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
        case "noblle": // Или 'belenco', если это опечатка
          requireImages = require.context(
            "../../noblle",
            false,
            /\.(png|jpe?g|webp)$/
          );
          break;
        default:
          console.warn(`Папка ${folder} не найдена, используем avant`);
          requireImages = require.context(
            "../avant",
            false,
            /\.(png|jpe?g|webp)$/
          );
      }
      const loadedImages = requireImages
        .keys()
        .map((filename) => requireImages(filename));
      setImages(loadedImages);
    } catch (error) {
      setImages([]);
    }
  };

  // Загружаем изображения при изменении ID
  useEffect(() => {
    loadImages(currentMaterial.folder);
  }, [currentMaterial.folder]);

  // Функция открытия модального окна
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Функция закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Обработчик клика по модальному окну
  const handleModalClick = (e) => {
    // Закрываем модальное окно только если клик был по самому .modal (фону)
    if (e.target.classList.contains(css.modal)) {
      closeModal();
    }
  };

  return (
    <section className={css.main}>
      <h1 className={css.title}>{currentMaterial.title}</h1>
      <div className={css.container}>
        {images.map((image, index) => (
          <img
            key={index}
            className={css.img}
            src={image}
            alt={`Photo ${index + 1}`}
            onClick={() => openModal(image)} // Открываем модальное окно при клике
            loading="lazy"
          />
        ))}
      </div>

      {/* Модальное окно */}
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
    </section>
  );
};
