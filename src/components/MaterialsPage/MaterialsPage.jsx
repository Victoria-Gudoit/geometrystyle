import css from "../OurWorks/works.module.css";
import avant from "../../avant/7060 Калакатта Мон Сен-Мишель_ZOOM_2025.webp";
import noblle from "../../noblle/Q798-Calacatta-Elegant_ZOOM.webp";
import caesarstone from "../../caesarstone/6270 Atlantic salt_Caesarstone_zoom.webp";
import avarus from "../../avarus/R538 Горы Кавказа_ZOOM.webp";

import { Link } from "react-router-dom";

export const MaterialsPage = () => {
  const materials = [   
     { image: avant, title: "Avant Quartz", id: 1 },
    { image: noblle, title: "Noblle Quartz", id: 2 },
    { image: caesarstone, title: "Caesarstone", id: 3 },
    { image: avarus, title: "Аварус", id: 4 },
  ];

  return (
    <section className={css.main}>
      <h1 className={css.title}>Кварц</h1>
      <div className={css.work}>
        {materials.map((material) => (
          <Link key={material.id} to={`/material/${material.id}`} className={css.wrapper}>
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
  );
};
