import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blog01 from "../../img/bathroom/w_03.webp";
import blog02 from "../../img/kitchen/k8.webp";

import css from "./blogPage.module.css";

const articles = [
  {
    slug: "kak-vybrat-stoleshnitsu",
    title: "Как выбрать столешницу из кварцевого агломерата в Минске",
    description: "Советы по выбору столешницы для кухни или ванной комнаты.",
    image: blog01,
  },
  {
    slug: "uhod-za-kvarcem",
    title: "Как ухаживать за кварцевыми столешницами",
    description: "Простые правила ухода за кварцевыми поверхностями.",
    image: blog02,
  },
];

export const BlogPage = () => {
  return (
    <div className={css.blog}>
      <Helmet>
        <link rel="canonical" href="https://geometrystyle.by/blog/" />
        <title>Блог Geometrystyle | Столешницы и подоконники в Минске</title>
        <meta
          name="description"
          content="Полезные статьи о столешницах, подоконниках и кварцевом агломерате от Geometrystyle в Минске."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Geometrystyle, блог, столешницы Минск, кварцевый агломерат"
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
                name: "Блог",
                item: "https://geometrystyle.by/blog/",
              },
            ],
          })}
        </script>
      </Helmet>
      <h1>Статьи Geometrystyle</h1>
      <div className={css.articles}>
        {articles.map((article) => (
          <Link
            to={`/blog/${article.slug}/`}
            key={article.slug}
            className={css.articleCard}
          >
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
