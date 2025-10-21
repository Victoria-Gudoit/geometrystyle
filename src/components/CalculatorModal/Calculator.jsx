import React, { useState } from "react";
import "./calculator.css";
import validator from "validator";
import { useNavigate } from "react-router-dom";

export const Calculator = ({ active, setActive }) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (e) => {
    const email = e.target.value;
    const isValidEmail = validator.isEmail(email);
    setBtnDisabled(!isValidEmail);
    setError(isValidEmail ? "" : "Введите корректный email");
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const formData = new FormData(form);
      formData.append("access_key", "6d05202c-ed52-4fd9-b86c-ff7dbd5580d4"); 
      formData.append("subject", "Расчет стоимости"); 

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setActive(false);
        navigate("/thank-you");
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
        <form className="form-inner" onSubmit={sendForm}>
          <h3 className="form-title">Рассчитать стоимость</h3>
          <input
            className={error ? "modal__email error" : "modal__email"}
            type="text"
            name="email_from"
            id="emailFrom"
            placeholder="Ваша почта*"
            onChange={(e) => validateEmail(e)}
          />
          {error && <p className="error-message">{error}</p>}
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
          <input
            disabled={btnDisabled}
            type="submit"
            value="Отправить"
            className="submit-button"
          />
        </form>
      </div>
    </div>
  );
};