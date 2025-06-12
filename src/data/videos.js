import video1 from "../video/video1.MP4";
import video2 from "../video/video2.MP4";
import video3 from "../video/video3.MP4";
import preview1 from "../img/video1.webp"; 
import preview2 from "../img/video2.webp";
import preview3 from "../img/video3.webp";

export const videos = [

  {
    id: 1,
    src: video1,
    poster: preview2,
    title: "Процесс монтажа светодиодной подсветки в радиусный остров часть 1",
    description: "Этапы монтажа острова из кварца.",
  }, 
   {
    id: 2,
    src: video2,
    poster: preview1,
    title: "Процесс монтажа светодиодной подсветки в радиусный остров часть 2",
    description: "Демонстрация работы с кварцевым агломератом.",
  },
  {
    id: 3,
    src: video3,
    poster: preview3,
    title: "Обзор подоконника",
    description: "Готовый подоконник в дом клиента.",
  },
];
