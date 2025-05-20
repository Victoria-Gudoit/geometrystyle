import React from "react";
import css from "./footer.module.css";
import instagram from "../../img/instagram.svg";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.wrapper}>
        <address className={css.contacts}>
          +375 (29) 548-45-98 <br />
          <a href="mailto:infostone@mail.ru"> infostone@mail.ru</a>
        </address>
        <img className={css.img} src={instagram} alt="instagram" />
        <div className={css.rights}>
          © 2025. All Rights Reserved. Design by VictoriaGud
        </div>
      </div>
    </footer>
  );
};
