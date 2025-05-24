import React, { useState } from "react";
import vannaya from "../../img/bath.webp";
import kuchnia from "../../img/otherkitchen.webp";
import windowsill from "../../img/windowsill.webp";
import other from "../../img/other.webp";
import bar from "../../img/bar.webp";
import island from "../../img/island.webp";
import stairs from "../../img/otherstairs.webp";

import css from "../OurWorks/works.module.css";
import { SmallModal } from "../SmallModal";

const products = [
  {
    image: vannaya,
    title: "Столешницы из камня для ванной комнаты",
    subtitle:
      "Выбрать идеальную столешницу для ванной комнаты очень просто. Нужно понять какие есть возможности в изготовлении, какие цвета и фактуры камня больше всего подходят к материалам и отделке вашей кухни. Лучше вдохновится идеями самых разных проектов - искусственный камень даёт практически неограниченные возможности для дизайна.",
  },
  {
    image: kuchnia,
    title: "Столешницы из камня для кухни",
    subtitle:
      "Вы делаете ремонт и решили выбрать столешницу на кухню. Но вот с чего начать? Мы предлагаем простой пошаговый план действий, основанный на нашем многолетнем опыте и отзывах наших клиентов. Самое важное — потратьте время на планирование — это сохранит ваши нервы и деньги.",
  },
  {
    image: stairs,
    title: "Лестницы",
    subtitle:
      "Какой бы материал вы ни выбрали – акриловый камень или кварцевый агломерат, в любом случае оконный проем с этим подоконником будет выглядеть роскошно, а многообразие цветовых решений и фактур, которые мы предлагаем, создадут пространство для вашего творчества и фантазии.",
  },

  {
    image: other,
    title: "Прочее",
    subtitle:
      "Какой бы материал вы ни выбрали – акриловый камень или кварцевый агломерат, в любом случае оконный проем с этим подоконником будет выглядеть роскошно, а многообразие цветовых решений и фактур, которые мы предлагаем, создадут пространство для вашего творчества и фантазии.",
  },
  {
    image: island,
    title: "Кухонный остров",
    subtitle:
      "Какой бы материал вы ни выбрали – акриловый камень или кварцевый агломерат, в любом случае оконный проем с этим подоконником будет выглядеть роскошно, а многообразие цветовых решений и фактур, которые мы предлагаем, создадут пространство для вашего творчества и фантазии.",
  },
  {
    image: bar,
    title: "Барная стойка",
    subtitle:
      "Какой бы материал вы ни выбрали – акриловый камень или кварцевый агломерат, в любом случае оконный проем с этим подоконником будет выглядеть роскошно, а многообразие цветовых решений и фактур, которые мы предлагаем, создадут пространство для вашего творчества и фантазии.",
  },
  {
    image: windowsill,
    title: "Подоконники из камня",
    subtitle:
      "Какой бы материал вы ни выбрали – акриловый камень или кварцевый агломерат, в любом случае оконный проем с этим подоконником будет выглядеть роскошно, а многообразие цветовых решений и фактур, которые мы предлагаем, создадут пространство для вашего творчества и фантазии.",
  },
];

export const ProductsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState(null);

  const openModal = (image, title, text) => {
    setSelectedImage(image);
    setTitle(title);
    setText(text);
    setIsModalOpen(true);
  };

  return (
    <section className={css.main}>
      <h1 className={css.title}>Найди новые идеи и вдохновись</h1>
      <div className={css.work}>
        {products.map((product) => (
          <article
            key={product.title}
            className={css.wrapper}
            onClick={() =>
              openModal(product.image, product.title, product.subtitle)
            }
          >
            <img className={css.img} src={product.image} alt={product.title} />
            <h2 className={css.text}>{product.title}</h2>
            <p className={css.text}>{product.subtitle}</p>
          </article>
        ))}
      </div>
      <SmallModal
        isModalOpen={isModalOpen}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        setIsModalOpen={setIsModalOpen}
        title={title}
        text={text}
      />
    </section>
  );
};
