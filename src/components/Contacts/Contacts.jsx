import React from "react";
import css from "./contacts.module.css";
import contacts from "../../img/contacts.webp";
import instagram from "../../img/instagram.png";
import viber from "../../img/viber.png";
import telegram from "../../img/telegram.png";
import { Helmet } from "react-helmet-async";

export const Contacts = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://geometrystyle.by/contacts/" />
      <title>Geometry Style - Контакты</title>
      <meta
        name="description"
        content="Свяжитесь с Geometry Style — мастерской интерьерных решений в Беларуси. Звоните: +375 (44) 751-77-00, пишите: geometrystyle99@gmail.com, или следите за нами в Instagram!"
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="Geometry Style, контакты, связь, столешницы из камня Минск, Беларусь, подоконники из камня, Instagram"
      />
        <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Главная",
                  item: "https://geometrystyle.by/"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Контакты",
                  item: "https://geometrystyle.by/contacts/"
                }
              ]
            })}
          </script>
          <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Geometrystyle",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Минск",
              "addressCountry": "BY",
            },
            "telephone": "+375447517700",
            "url": "https://geometrystyle.by/",
            "description": "Производство столешниц, подоконников и барных стоек из кварцевого агломерата в Минске и Беларуси."
          })}
        </script>
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
          <a href="tel:+375447517700">+375 (44) 751-77-00</a>
          <a href="mailto:geometrystyle99@gmail.com"> geometrystyle99@gmail.com</a>
        </address>
        <div className={css.insta}>
        <a href="https://www.instagram.com/geometrystyle.by?igsh=OGhrcnYybmszZ3hv" target="_blank"><img src={instagram} alt="instagram" /></a>
        <p>@geometrystyle.by</p>
        </div>
      </div>
    </section>
    </>
  );
};
