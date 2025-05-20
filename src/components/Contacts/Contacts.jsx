import React from "react";
import css from "./contacts.module.css";
import contacts from "../../img/contacts.jpg";

export const Contacts = () => {
  return (
    <section className={css.main}>
      <div className={css.blockone}>
        <img className={css.img} src={contacts} alt="кухня" />
      </div>
      <div className={css.contacts}>
        <h1 className={css.title}>Связаться с нами</h1>
        <p>
          Мы здесь, чтобы удовлетворить все ваши потребности и найти лучшие
          решения!
        </p>
        <address>
          <a href="mailto:infostone@mail.ru">infostone@mail.ru</a> <br />
          <a href="tel:+375295484598">+375 (29) 548-45-98</a>
        </address>
      </div>
    </section>
  );
};
