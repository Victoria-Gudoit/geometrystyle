import React from "react";
import css from "./works.module.css";
import { Link } from "react-router-dom";
import { works } from "../../data";
import { Helmet } from "react-helmet";

export const OurWorks = () => {
  return (
    <>
    <Helmet>
      <title>Geometry Style - Наши Работы</title>
      <meta
        name="description"
        content="Посмотрите наши работы от Geometry Style — столешницы, подоконники, барные стойки и другие изделия из кварцевого агломерата"
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="Geometry Style, Геометрия стиля, Минск, наши работы, столешницы, барные стойки, кварцевый агломерат, Беларусь, дизайн"
      />
    </Helmet>
    <section className={css.main}>
      <h1 className={css.title}>Наши работ</h1>
      <div className={css.work}>
        {works.map((work) => (
          <Link
            key={work.title}
            to={`/work/${work.id}`}
            className={css.wrapper}
          >
            <img className={css.img} src={work.images[0]} alt={work.title} />
            <h2 className={css.text}>{work.title}</h2>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
};
