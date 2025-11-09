import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./header.module.css";
import { MyButton } from "../UI/button";
import { Menu } from "../Menu";
import "../Menu/menu.css";
import logo from "../../img/logo.jpg";
import { Calculator } from "../CalculatorModal/Calculator";
import instagram from "../../img/instagram.svg";
import viber from "../../img/viber.png";
import telegram from "../../img/telegram.png";
import { CallModal } from "../CallModal";
export const items = [
  {
    value: "О нас",
    href: null,
    submenu: [
      { value: "О нас", href: "/aboutUs/" },
      { value: "Статьи", href: "/blog/" },
    ],
  },
  {
    value: "Изделия из камня",
    href: null,

    submenu: [
      {
        value: "Столешницы для кухни",
        href: "/izdeliya-iz-kamny/stoleshnitsy-na-kuhnyu/",
      },
      {
        value: "Столешницы для ванной",
        href: "/izdeliya-iz-kamny/stoleshnitsy-dlya-vannoj/",
      },
      {
        value: "Подоконники",
        href: "/izdeliya-iz-kamny/podokonniki-iz-kamnya/",
      },
      {
        value: "Барные стойки",
        href: "/izdeliya-iz-kamny/barnye-stoyki-iz-kamnya/",
      },
      { value: "Лестницы", href: "/izdeliya-iz-kamny/lestnitsy-iz-kamnya/" },
      { value: "Ресепшены", href: "/izdeliya-iz-kamny/resepsheny-iz-kamnya/" },
      {
        value: "Прочее",
        href: "/izdeliya-iz-kamny/prochie-izdeliya-iz-kamnya/",
      },
    ],
  },
  { value: "Материалы", href: "/materials/" },
  { value: "Наши работы", href: "/ourWorks/" },
  { value: "Контакты", href: "/contacts/" },
  { value: "Отзывы", href: "/reviews/" },
];
export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [submenuActive, setSubmenuActive] = useState(null);
  const [calculatorActive, setCalculatorActive] = useState(false);
  const openModal = (event) => {
    event.preventDefault();
    setCalculatorActive(true);
  };
  const handleSubmenuClick = () => {
    setSubmenuActive(null);
  };
  return (
    <header className={css.header}>
      <div className={css.headerLeft}>
        {" "}
        <div className={css.information}>
          <Link className={css.logo} to="/">
            <img
              className={css.img}
              src={logo}
              alt="Мастерская интерьерных решений"
            />
          </Link>
          <div className={css.sections}>
            <section className={css.contacts}>
              {" "}
              <p>г.Минск</p>
              <div className={css.phone}>
                <a href="tel:+375447517700">+375 (44) 751-77-00</a>
                <a href="tel:+375257329504">+375 (25) 732-95-04</a>
              </div>
              <div className={css.social}>
                <a href="viber://chat?number=%2B37525732-95-04" target="_blank">
                  <img src={viber} alt="viber" />
                </a>
                <a href="https://t.me/geometrystylequartz" target="_blank">
                  <img src={telegram} alt="telegram" />
                </a>
                <a
                  href="https://www.instagram.com/geometrystyle.by?igsh=OGhrcnYybmszZ3hv"
                  target="_blank"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
              <MyButton className={css.calc} onClick={(e) => openModal(e)}>
                Заказать звонок
              </MyButton>
              <CallModal
                active={calculatorActive}
                setActive={setCalculatorActive}
              />
            </section>
            <div className={css.divider}></div>
            <section className={css.navigation}>
              <nav>
                <ul className={css.list}>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className={`${css.items} ${
                        item.submenu && css.hasSubmenu
                      }`}
                      onMouseEnter={() =>
                        item.submenu && setSubmenuActive(index)
                      }
                      onMouseLeave={() =>
                        item.submenu && setSubmenuActive(null)
                      }
                    >
                      {item.href ? (
                        <Link to={item.href}>{item.value}</Link>
                      ) : (
                        <span>{item.value}</span>
                      )}
                      {item.submenu && submenuActive === index && (
                        <ul className={css.submenu}>
                          {item.submenu.map((subItem) => (
                            <li key={subItem.href} className={css.submenuItem}>
                              <Link
                                to={subItem.href}
                                onClick={handleSubmenuClick}
                              >
                                {subItem.value}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>{" "}
            </section>
          </div>
        </div>
        <div className={css.burger} onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
        <Menu
          active={menuActive}
          setActive={setMenuActive}
          header={"Мастерская камня"}
          items={items}
        />
      </div>
    </header>
  );
};
