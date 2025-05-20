import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { MyButton } from "../UI/button/MyButton";

export const Menu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <nav className="menu__content" onClick={(e) => e.stopPropagation()}>
        <ul className="menu__list" onClick={() => setActive(false)}>
          {items.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setActive(false)} className="menu__btns">
        <MyButton to="/materials">Материалы</MyButton>
        <MyButton to="/products">Изделия</MyButton>
      </div>
      </nav>
    </div>
  );
};
