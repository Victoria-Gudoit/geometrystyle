import React from "react";
import { Slider } from "./components/Slider";
import img01 from "./img/img-01.jpg";
import img02 from "./img/img-02.jpg";

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

export const MainPage = () => {
  return (
    <div>
      <Slider swiperImages={swiperImages} />
    </div>
  );
};
