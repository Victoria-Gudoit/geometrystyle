import React, { useState } from "react";
import "./calculator.css";
import emailjs from "@emailjs/browser";
import validator from "validator";

export const Calculator = ({ active, setActive, playHero }) => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const validateEmail = (e) => {
    console.log(btnDisabled);
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setBtnDisabled(!true);
    } else {
      setBtnDisabled(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_q13205s",
      "template_6dyvyz9",
      e.target,
      "gzZNL7ACAv1KHV68d"
    );
    setActive(false);
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
      <span onClick={() => setActive(false)} class="modal__close"/>
        <form class="form-inner" onSubmit={sendEmail}>
          <h3 class="form-title">Рассчитать стоимость</h3>
          <input class={btnDisabled ? "modal__email" : ""}
            type="text"
            name="email_from"
            id="emailFrom"
            placeholder={`Ваша почта*`}
            onChange={(e) => validateEmail(e)}
          />{" "}

          <input type="text" placeholder="Ваше имя" name="name" id="name" />
          <input type="tel" placeholder="Телефон" name="phone" id="phone" />
          <textarea
            name="message"
            id="message"
            placeholder="Ширина изделия, мм"
            rows="1"
          ></textarea>
          <textarea
            name="message"
            id="message"
            placeholder="Длина изделия, мм"
            rows="1"
          ></textarea>
          <input disabled={btnDisabled} type="submit" value="Отправить" />
        </form>
      </div>
    </div>
  );
};
