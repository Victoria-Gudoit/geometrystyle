import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import css from "./stoneItemDetail.module.css";
import { stoneItems, works } from "../../data";
import { SmallModal } from "../SmallModal";
import { Helmet } from "react-helmet-async";

export const StoneItemDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const { slug } = useParams();
  const item = stoneItems.find((i) => i.slug === slug);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!item) {
    return <div>Изделие не найдено</div>;
  }

  const relatedWorks = works.filter((w) => w.category === slug);

  const openModal = (image, desc) => {
    setSelectedImage(image);
    setDescription(desc);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://geometrystyle.by/${item.slug}/`} />
        <title>Геометрия Стиля - {item.title}</title>
        <meta name="description" content={item.subtitle} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`${item.title}, кварцевый агломерат, изделия из камня, Минск, Беларусь`}
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
                item: "https://geometrystyle.by/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Изделия из камня",
                item: "https://geometrystyle.by/izdeliya-iz-kamny/",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: item.title,
                item: `https://geometrystyle.by/${item.slug}/`,
              },
            ],
          })}
        </script>
      </Helmet>

      <section className={css.main}>
        <div>
          <Link className={css.breadcrumb} to="/">
            Главная
          </Link>{" "}
          →{" "}
          <Link className={css.breadcrumb} to="/izdeliya-iz-kamny/">
            Изделия из камня
          </Link>{" "}
          → <span>{item.title}</span>
        </div>
        <h1 className={css.title}>{item.title}</h1>
        <div className={css.gridContainer}>
          <div className={css.mainImage}>
            <div
              className={css.galleryItem}
              onClick={() => openModal(item.images[0])}
            >
              <img
                className={css.galleryImg}
                src={item.images[0]}
                alt={item.title}
                loading="lazy"
              />
            </div>
          </div>
          <div className={css.textBlock}>
            <p className={css.descriptionText}>{item.description}</p>
          </div>
        </div>
        <div className={css.orderSteps}>
          <h2 className={css.orderTitle}>Как сделать заказ?</h2>
          <ol className={css.stepsList}>
            <li className={css.step}>
              <span className={css.stepNumber}>1</span>
              <p>
                Напишите нам в мессенджеры (<strong>Telegram</strong>,{" "}
                <strong>Viber</strong>, <strong>Instagram</strong>) или
                позвоните по номеру{" "}
                <a href="tel:+375447517700" className={css.phone}>
                  +375 44 751 77 00
                </a>
                .
              </p>
            </li>
            <li className={css.step}>
              <span className={css.stepNumber}>2</span>
              <p>Назовите примерные размеры вашего изделия.</p>
            </li>
            <li className={css.step}>
              <span className={css.stepNumber}>3</span>
              <p>
                Мы делаем <strong>предварительный расчёт</strong>. Если всё
                устраивает — выезжаем на <strong>бесплатный замер</strong> и
                помогаем выбрать камень.
              </p>
            </li>
            <li className={css.step}>
              <span className={css.stepNumber}>4</span>
              <p>Заключаем договор с предоплатой.</p>
            </li>
            <li className={css.step}>
              <span className={css.stepNumber}>5</span>
              <p>
                Заказываем материал и изготавливаем изделие в срок{" "}
                <strong>7–14 дней</strong>.
              </p>
            </li>
            <li className={css.step}>
              <span className={css.stepNumber}>6</span>
              <p>
                Монтируем изделие и производим{" "}
                <strong>окончательную оплату</strong>.
              </p>
            </li>
          </ol>
        </div>
        {relatedWorks.length > 0 && (
          <div className={css.miniGallerySection}>
            <h2 className={css.miniGalleryTitle}>Примеры наших работ</h2>
            <div className={css.miniGallery}>
              {relatedWorks.flatMap((work) =>
                work.images.map((image, index) => (
                  <div
                    key={`${work.id}-${index}`}
                    className={css.miniWrapper}
                    onClick={() => openModal(image, "")}
                  >
                    <img
                      src={image}
                      alt={`Пример работы ${work.id}`}
                      className={css.miniImg}
                      loading="lazy"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        )}
        <SmallModal
          isModalOpen={isModalOpen}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          setIsModalOpen={setIsModalOpen}
        />
      </section>
    </>
  );
};
