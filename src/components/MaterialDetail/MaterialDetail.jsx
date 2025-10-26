import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./materialDetail.module.css";
import { Modal } from "../Modal";
import { Helmet } from "react-helmet-async";

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
    7: { folder: "stratos", title: "Stratos" },
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
          requireImages = require.context(
            "../../avant",
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
        case "radianz":
          requireImages = require.context(
            "../../radianz",
            false,
            /\.(png|jpe?g|webp)$/
          );
          break;
        case "belenco":
          requireImages = require.context(
            "../../belenco",
            false,
            /\.(png|jpe?g|webp)$/
          );
          break;
        case "stratos":
          requireImages = require.context(
            "../../stratos",
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
        src: requireImages(filename),
        alt: filename.split("/").pop().split(".")[0],
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
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`https://geometrystyle.by/material/${id}/`}
        />
        <title>Геометрия Стиля - {currentMaterial.title}</title>
        <meta
          name="description"
          content={`Ознакомьтесь с материалом ${currentMaterial.title} от Geometry Style для столешниц и подоконников из кварцевого агломерата в Минске.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`${currentMaterial.title}, Геометрия стиля материалы, столешницы из камня Минск, подоконники из камня, кварцевый агломерат, Беларусь`}
        />
      </Helmet>
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

              <p className={css.imageCaption}>{image.alt}</p>
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
    </>
  );
};
