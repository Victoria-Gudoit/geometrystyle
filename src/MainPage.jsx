import React from "react";
import { Slider } from "./components/Slider";
import img01 from "./img/img-01.webp";
import img02 from "./img/img-02.webp";
import { Reviews } from "./components/Reviews";
import { AboutUs } from "./components/AboutUs";
import { ProductionProcess } from "./components/Production";
import { Helmet } from "react-helmet";
import { OurWorks } from "./components/OurWorks";

const swiperImages = [
  {
    image: img01,
    title: "МАСТЕРСКАЯ",
    titleContinuous: "ИНТЕРЬЕРНЫХ РЕШЕНИЙ",
    subtitle: "вы можете у нас:",
    btn: "рассчитать стоимость",
    path: "calculator",
  },
  {
    image: img02,
    title: "МАСТЕРСКАЯ",
    titleContinuous: "ИНТЕРЬЕРНЫХ РЕШЕНИЙ",
    subtitle: "вы можете у нас:",
    btn: "рассчитать стоимость",
    path: "materials",
  },
];

export const MainPage = ({ isHomePage }) => {
  return (
    <div>
      <Helmet>
        <title>
        Столешницы из камня в Минске | Geometry Style - Заказ и Производство
        </title>
        <meta
          name="description"
          content="Geometry Style - производство столешниц, подоконников из камня в Минске и Беларуси. Рассчитайте стоимость и выберите материалы!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Geometry Style, процесс производства, столешницы из камня, кварцевый агломерат, каменные подоконники Минск, технологии"
        />
      </Helmet>

      <Slider swiperImages={swiperImages} />
      <AboutUs isHomePage={true} />
      <Reviews />
      <OurWorks isHomePage={true} />
      <ProductionProcess isHomePage={true} />
    </div>
  );
};
