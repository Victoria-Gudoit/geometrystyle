import React from "react";
import css from "./works.module.css";
import workOne from "../../img/bathroom.webp";
import workTwo from "../../img/ourtable.webp";
import workThree from "../../img/sill.webp";
import workFour from "../../img/reception.webp";
import workFive from "../../img/ku.webp";
import workSix from "../../img/ourstairs.webp";


const works = [
  {
    image: workOne,
    title: "Столешница из камня для ванной комнаты",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",
  },
  {
    image: workFive,
    title: "Столешница из камня для кухни",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",

  },

  {
    image: workSix,
    title: "Лестница из камня",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",

  },

  {
    image: workFour,
    title: "Ресепшен из камня для вашего бизнеса",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",

  },
  {
    image: workTwo,
    title: "Столешница из камня для кухни",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",

  },
  {
    image: workThree,
    title: "Подоконник из камня",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",
  },
];

export const OurWorks = () => {
  return (
    <section className={css.main}>
      <h1 className={css.title}>Примеры работы</h1>
      <div className={css.work}>
        {works.map((work) => (
          <article key={work.title} className={css.wrapper}>
            <img className={css.img} src={work.image} alt={work.title} />
            <h2 className={css.text}>{work.title}</h2>
            <p className={css.text}>{work.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
