import cssBtn from "../../components/UI/button/MyButton.module.css";
import cssMain from "../../style.module.css";
import "./heroSection.css";
import { MyButton } from "../UI/button/MyButton";
import classNames from "classnames";
import { Calculator } from "../CalculatorModal";
import { useState } from "react";
import mainImage from "../../img/img-01.webp";

export const HeroSection = () => {
  const [modalActive, setModalActive] = useState(false);

  let circleClasses = classNames({
    circle: true,
    [cssMain.centering]: true,
  });

  let titleClasses = classNames({
    title: true,
  });

  let subTitleClasses = classNames({
    subTitle: true,
  });

  let btnClasses = classNames({
    [cssBtn.btn]: true,
    btnSlider: true,
  });

  const openModal = (event) => {
    event.preventDefault();
    setModalActive(true);
  };

  return (
    <section className="wrapper">
      <img className="img" src={mainImage} alt="Мастерская интерьерные решения" />
      <span className={circleClasses}>
        <div className="content">
          <h1 className={titleClasses}>
            Мастерская <br /> интерьерных решений
          </h1>
          <span className={subTitleClasses}>
            Столешницы, подоконники <br /> и другие изделия из кварца
          </span>
          <MyButton
            to="/calculator"
            className={btnClasses}
            onClick={(e) => openModal(e)}
          >
            рассчитать стоимость
          </MyButton>
        </div>
      </span>
      <Calculator active={modalActive} setActive={setModalActive} />
    </section>
  );
};