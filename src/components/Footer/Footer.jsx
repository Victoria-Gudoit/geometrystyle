import React from "react";
import css from "./footer.module.css";
import instagram from "../../img/instagram.png";
import viber from "../../img/viber.png";
import telegram from "../../img/telegram.png";


export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.wrapper}>
        <address className={css.contacts}>
        <div>     <img src={viber} className={css.viber} alt="viber" />
        <a href="https://t.me/geometrystylequartz" target="_blank"><img src={telegram} alt="telegram" /></a>  </div>
          +375 (44) 751-77-00 <br />
          <a href="mailto:stilya.geometriya@mail.ru"> stilya.geometriya@mail.ru</a>
        </address>
        <a href="https://www.instagram.com/geometrystyle.by?igsh=OGhrcnYybmszZ3hv" target="_blank"><img className={css.img} src={instagram} alt="instagram" /></a>
        <div className={css.rights}>
          © 2025. УНП 193857310
        </div>
      </div>
    </footer>
  );
};
