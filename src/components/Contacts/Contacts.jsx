import React from "react";
import css from "./contacts.module.css";
import contacts from "../../img/otherkitchen.webp";
import instagram from "../../img/instagram.png";
import viber from "../../img/viber.png";
import telegram from "../../img/telegram.png";


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
        <address className={css.address}>
          <div>     <img src={viber} className={css.viber} alt="viber" />
          <a href="https://t.me/geometrystylequartz" target="_blank"> <img src={telegram} alt="telegram" /></a> </div>
          +375 (44) 751-77-00 <br />
          <a href="mailto:stilya.geometriya@mail.ru"> stilya.geometriya@mail.ru</a>
        </address>
        <a href="https://www.instagram.com/geometrystyle.by?igsh=OGhrcnYybmszZ3hv" target="_blank"><img src={instagram} alt="instagram" /></a>
      </div>
    </section>
  );
};
