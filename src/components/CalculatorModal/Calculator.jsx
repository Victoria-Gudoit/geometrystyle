import React, { useState } from "react";
import "./calculator.css";
import validator from "validator";

export const Calculator = ({ active, setActive, playHero }) => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const validateEmail = (e) => {
    console.log(btnDisabled);
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const formData = new FormData(form);
      const response = await fetch("https://formspree.io/f/xdkdzjrz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setActive(false);
        alert("Форма успешно отправлена!");
      } else {
        throw new Error("Ошибка отправки формы");
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Не удалось отправить форму. Попробуйте снова.");
    }
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <span onClick={() => setActive(false)} className="modal__close" />
        <form className="form-inner" onSubmit={sendEmail}>
          <h3 className="form-title">Рассчитать стоимость</h3>
          <input
            className={btnDisabled ? "modal__email" : ""}
            type="text"
            name="email_from"
            id="emailFrom"
            placeholder="Ваша почта*"
            onChange={(e) => validateEmail(e)}
          />
          <input type="text" placeholder="Ваше имя" name="name" id="name" />
          <input type="tel" placeholder="Телефон" name="phone" id="phone" />
          <textarea
            name="width"
            id="width"
            placeholder="Ширина изделия, мм"
            rows="1"
          ></textarea>
          <textarea
            name="length"
            id="length"
            placeholder="Длина изделия, мм"
            rows="1"
          ></textarea>
          <input disabled={btnDisabled} type="submit" value="Отправить" />
        </form>
      </div>
    </div>
  );
};
