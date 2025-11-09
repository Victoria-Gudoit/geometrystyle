import React from "react";
import css from "./works.module.css";
import { Link } from "react-router-dom";
import { works } from "../../data";
import { Helmet } from "react-helmet-async";

export const OurWorks = ({ isHomePage }) => {
  return (
    <>
      {!isHomePage && (
        <Helmet>
          <link rel="canonical" href="https://geometrystyle.by/ourWorks/" />
          <title>Геометрия Стиля - Наши Работы</title>
          <meta
            name="description"
            content="Посмотрите наши работы от Geometry Style — столешницы, подоконники, барные стойки и другие изделия из кварцевого агломерата"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Geometry Style, Геометрия стиля, Минск, наши работы, столешницы из камня, барные стойки из камня, кварцевый агломерат, Минск, дизайн"
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
                  item: "https://geometrystyle.by/"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Наши работы",
                  item: "https://geometrystyle.by/ourWorks/"
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      <section className={`${css.main} ${isHomePage ? css.noPadding : ""}`}>
        <h3 className={css.title}>Наши работы</h3>
        <div className={css.work}>
          {works.map((work) => (
            <Link
              key={work.title}
              to={`/work/${work.id}/`}
              className={css.wrapper}
            >
              <img className={css.img} src={work.images[0]} alt={work.title} />
              <h3 className={css.text}>{work.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};