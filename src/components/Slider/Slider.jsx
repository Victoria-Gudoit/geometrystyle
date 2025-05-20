import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cssBtn from "../../components/UI/button/MyButton.module.css";
import cssMain from "../../style.module.css";
import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MyButton } from "../UI/button/MyButton";
import classNames from "classnames";
import { Calculator } from "../CalculatorModal";
import { useState } from "react";

export const Slider = ({ swiperImages }) => {
  const [modalActive, setModalActive] = useState(false);
  const [heroSwiper, setSwiperRef] = useState(null);

  let circleClasses = classNames({
    circle: true,
    [cssMain.centering]: true,
  });

  let titleClasses = classNames({
    title: true,
    [cssMain.centering]: true,
  });

  let subTitleClasses = classNames({
    subTitle: true,
    [cssMain.centering]: true,
  });

  let btnClasses = classNames({
    [cssBtn.btn]: true,
    [cssMain.centering]: true,
    btnSlider: true,
  });

  const openModal = (event) => {
    event.preventDefault();
    setModalActive(true);
  };

  const pauseHero = () => {
    heroSwiper.autoplay.stop();
  };
  return (
    <section className="wrapper">
      <Swiper
        ref={heroSwiper}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 5200,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={setSwiperRef}
        onSlideChange={() => console.log("slide change")}
      >
        {swiperImages.map((swiperImage) => (
          <SwiperSlide key={swiperImage.image}>
            <img className="img" src={swiperImage.image} alt="" />
            <span className={circleClasses}></span>
            <h1 className={titleClasses}>Мастерская <br /> интерьерных решений</h1>
            <span className={subTitleClasses}>{swiperImage.subtitle}</span>
            <MyButton
              to={`/${swiperImage.path}`}
              className={btnClasses}
              onClick={openModal}
              onPointerUp={pauseHero}
            >
              {swiperImage.btn}
            </MyButton>
            <Calculator
              active={modalActive}
              setActive={setModalActive}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
