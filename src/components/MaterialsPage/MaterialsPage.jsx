import css from "../OurWorks/works.module.css";
import avant from "../../img/caesar.jpg";
import belenco from "../../img/belenco.jpg";
import { Link } from "react-router-dom";

export const MaterialsPage = () => {
  const materials = [   
     { image: avant, title: "Avant Quartz", id: 1 },
    { image: belenco, title: "Noblle Quartz", id: 2 },
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
