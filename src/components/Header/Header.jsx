import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./header.module.css";
import { MyButton } from "../UI/button";
import { Menu } from "../Menu";
import "../Menu/menu.css";
import logo from "../../img/logo3.svg";

  export const items = [
    { value: "О нас", href: "/aboutUs/" },
    { value: "Наши работы", href: "/ourWorks/" },
    { value: "Контакты", href: "/contacts/" },
    { value: "Отзывы", href: "/reviews/" },
  ];

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className={css.header}>
      <div className={css.burger} onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>{" "}
      <Link className={css.logo} to={"/"}>
        <img
          className={css.img}
          src={logo}
          alt="Мастерская интерьерных решений"
        />
      </Link>
      <nav>
        <ul className={css.list}>
          {" "}
          {items.map((item) => (
            <li key={item.href} className={css.items}>
              <Link to={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>{" "}
      </nav>
      <a className={css.phone} href="tel:+375447517700">+375 (44) 751-77-00</a>
      <div className={css.btns}>
        <MyButton to="/materials/">Материалы</MyButton>
        <MyButton to="/production/">Производство</MyButton>
      </div>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Мастерская камня"}
        items={items}
      />
    </header>
  );
};
