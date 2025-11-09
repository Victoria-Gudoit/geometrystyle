import React, { useState } from "react";
import "./callModal.css";
import { useNavigate } from "react-router-dom";

export const CallModal = ({ active, setActive }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const sendForm = async (e) => {
    e.preventDefault();
    const form = e.target;

    setBtnDisabled(true);

    try {
      const formData = new FormData(form);
      formData.append("access_key", "e7107900-36a7-4fe7-b575-b21c53eab740");
      formData.append("subject", "Заявка с формы (имя + телефон)");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setActive(false);
        navigate("/thank-you");
      } else {
        throw new Error("Ошибка сервера");
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Не удалось отправить. Попробуйте позже.");
    } finally {
      setBtnDisabled(false);
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
          <h3 className="form-title">Оставьте заявку</h3>

          <input
            type="text"
            name="name"
            placeholder="Ваше имя*"
            required
            className="modal__input"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона*"
            required
            className="modal__input"
          />

          <input
            type="submit"
            value="Отправить"
            disabled={btnDisabled}
            className="submit-button"
          />
        </form>
      </div>
    </div>
  );
};
