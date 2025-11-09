import React from "react";
import css from "../OurWorks/works.module.css";
import { Link } from "react-router-dom";
import { stoneItems } from "../../data";
import { Helmet } from "react-helmet-async";

export const StoneItems = ({ isHomePage }) => {
  return (
    <>
      {!isHomePage && (
        <Helmet>
          <link
            rel="canonical"
            href="https://geometrystyle.by/izdeliya-iz-kamny/"
          />
          <title>Геометрия Стиля - Изделия из камня</title>
          <meta name="description" content="Изделия из искусственного камня" />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="изделия из камня, столешницы из искусственного камня, ресепшены из камня, каменные подоконники"
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
                  name: "Наши работы",
                  item: "https://geometrystyle.by/izdeliya-iz-kamny/",
                },
              ],
            })}
          </script>
        </Helmet>
      )}
      <section className={`${css.main} ${isHomePage ? css.noPadding : ""}`}>
        <h1 className={css.title}>Изделия из камня</h1>
        <div className={css.work}>
          {stoneItems.map((item) => (
            <Link
              key={item.title}
              to={`/izdeliya-iz-kamny/${item.slug}/`}
              className={css.wrapper}
            >
              <img className={css.img} src={item.images[0]} alt={item.title} />
              <h3 className={css.text}>{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
