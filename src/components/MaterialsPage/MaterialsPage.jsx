import css from "../OurWorks/works.module.css";
import avant from "../../avant/7060 Калакатта Мон Сен-Мишель.webp";
import noblle from "../../noblle/Q798 Calacatta Elegant.webp";
import caesarstone from "../../caesarstone/6270 Atlantic salt.webp";
import avarus from "../../avarus/R538 Горы Кавказа.webp";
import radianz from "../../radianz/Aster.webp";
import belenco from "../../belenco/Alinda.webp";
import stratos from "../../stratos/Calacatta Classic.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const MaterialsPage = () => {
  const materials = [
    { image: avant, title: "Avant Quartz", id: 1 },
    { image: noblle, title: "Noblle Quartz", id: 2 },
    { image: caesarstone, title: "Caesarstone", id: 3 },
    { image: avarus, title: "Аварус", id: 4 },
    { image: radianz, title: "Radianz", id: 5 },
    { image: belenco, title: "Belenco", id: 6 },
    { image: stratos, title: "Stratos", id: 7 },
  ];

  return (
    <>
      <Helmet>
    <link rel="canonical" href="https://geometrystyle.by/materials/" />
        <title>Geometry Style - Кварцевый агломерат</title>
        <meta
          name="description"
          content="Палитра кварцевого агломерата от Geometry Style: Avant Quartz, Noblle, Caesarstone и другие. Выберите идеальный вариант для вашего интерьера!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Geometry Style, Геометрия стиля, кварцевые материалы, Avant Quartz, Noblle, Caesarstone, Belenco, Минск, Беларусь"
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
                  name: "Материалы",
                  item: "https://geometrystyle.by/materials/"
                }
              ]
            })}
          </script>
      </Helmet>
      <section className={css.main}>
        <h1 className={css.title}>Кварц</h1>
        <div className={css.work}>
          {materials.map((material) => (
            <Link
              key={material.id}
              to={`/material/${material.id}/`}
              className={css.wrapper}
            >
              <img
                className={css.img}
                src={material.image}
                alt={material.title}
              />
              <h2 className={css.text}>{material.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
