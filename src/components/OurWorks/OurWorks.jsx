import React from "react";
import css from "./works.module.css";
import { Link } from "react-router-dom";
import { works } from "../../data";

export const OurWorks = () => {
  return (
    <section className={css.main}>
      <h1 className={css.title}>Примеры работ</h1>
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
  );
};
