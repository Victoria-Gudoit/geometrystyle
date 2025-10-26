import React from "react";
import { Reviews } from "./components/Reviews";
import { ProductionProcess } from "./components/Production";
import { OurWorks } from "./components/OurWorks";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Helmet } from "react-helmet-async";
import css from "./components/AboutUs/about.module.css";

export const MainPage = ({ isHomePage }) => {
  return (
    <div>
      <Helmet>
      <link rel="canonical" href="https://geometrystyle.by/" />
        <title>Столешницы из камня в Минске</title>
        <meta
          name="description"
          content="Geometry Style - производство столешниц, подоконников из камня в Минске и Беларуси. Рассчитайте стоимость и выберите материалы!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Geometry Style, столешницы из камня, кварцевый агломерат, каменные подоконники Минск, столешницы из кварца"
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
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Geometrystyle",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Минск",
              "addressCountry": "BY",
            },
            "telephone": "+375447517700",
            "url": "https://geometrystyle.by/",
            "description": "Производство столешниц, подоконников и барных стоек из кварцевого агломерата в Минске и Беларуси."
          })}
        </script>
      </Helmet>
      <HeroSection />
      <div className={css.main}>
        <h1 className={css.mainTitle}>Мастерская интерьерных решений «Геометрия стиля»</h1>
        <div className={css.text}>
          <p className={css.paragraph}>
            <strong>
              Мы специализируемся на изготовлении столешниц, подоконников, барных стоек и других
              элементов из кварцевого агломерата в Минске и Беларуси,
            </strong>{" "}
            превращая ваши идеи в долговечные и стильные решения.
          </p>
        </div>
        <h3 className={css.title}>Наши услуги:</h3>
        <ul className={css.list}>
          <li className={css.item}>Стильные и прочные столешницы для кухонь и ванных комнат.</li>
          <li className={css.item}>Элегантные подоконники, идеально дополняющие интерьер.</li>
          <li className={css.item}>Барные стойки, ресепшены и другие элементы для дома и бизнеса.</li>
          <li className={css.item}>Консультации по подбору материалов и дизайну.</li>
          <li className={css.item}>Профессиональная установка с гарантией качества.</li>
        </ul>
      </div>
      <OurWorks isHomePage={true} />
      <Reviews isHomePage={true} />
      <ProductionProcess isHomePage={true} />
    </div>
  );
};