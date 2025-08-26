import React from "react";
import css from "./contacts.module.css";
import contacts from "../../img/otherkitchen.webp";
import instagram from "../../img/instagram.png";
import viber from "../../img/viber.png";
import telegram from "../../img/telegram.png";
import { Helmet } from "react-helmet";

export const Contacts = () => {
  return (
    <>
    <Helmet>
      <title>Geometry Style - Контакты | Свяжитесь с Нами</title>
      <meta
        name="description"
        content="Свяжитесь с Geometry Style — мастерской интерьерных решений в Беларуси. Звоните: +375 (44) 751-77-00, пишите: geometrystyle99@gmail.com, или следите за нами в Instagram!"
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="Geometry Style, контакты, связь, столешницы из камня Минск, Беларусь, подоконники из камня, Instagram"
      />
    </Helmet>
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
          <a href="mailto:geometrystyle99@gmail.com"> geometrystyle99@gmail.com</a>
        </address>
        <a href="https://www.instagram.com/geometrystyle.by?igsh=OGhrcnYybmszZ3hv" target="_blank"><img src={instagram} alt="instagram" /></a>
      </div>
    </section>
    </>
  );
};
