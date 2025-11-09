import React, { useState } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { MyButton } from "../UI/button/MyButton";

export const Menu = ({ items, active, setActive }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (value) => {
    setOpenSubmenu((prev) => (prev === value ? null : value));
  };
  const menuItems = items;

  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="blur" onClick={() => setActive(false)} />
      <nav className="menu__content">
        <ul className="menu__list">
          {menuItems.map((item) => {
            if (item.submenu) {
              const isOpen = openSubmenu === item.value;
              return (
                <li key={item.value} className="menu__item">
                  <div
                    className={`menu__item-toggle ${isOpen ? "active" : ""}`}
                    onClick={() => toggleSubmenu(item.value)}
                  >
                    {item.value}
                    <span className="arrow"></span>
                  </div>

                  {isOpen && (
                    <ul className="submenu">
                      {item.submenu.map((sub) => (
                        <li key={sub.href}>
                          <Link to={sub.href} onClick={() => setActive(false)}>
                            {sub.value}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            if (item.href) {
              return (
                <li key={item.href}>
                  <Link to={item.href} onClick={() => setActive(false)}>
                    {item.value}
                  </Link>
                </li>
              );
            }

            return null;
          })}
        </ul>

        <div className="menu__btns">
          <MyButton to="/materials" onClick={() => setActive(false)}>
            Материалы
          </MyButton>
          <MyButton to="/production" onClick={() => setActive(false)}>
            Производство
          </MyButton>
        </div>
      </nav>
    </div>
  );
};
