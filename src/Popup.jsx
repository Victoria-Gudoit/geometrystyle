import React from "react";
import "./Popup.css";
import ad from "./img/ad.jpg"

export const Popup = ({ active, setActive }) => {
  if (!active) return null;

  return (
    <div className="popup" onClick={() => setActive(false)}>
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <span className="popup__close" onClick={() => setActive(false)}>
          &times;
        </span>
        <img
          src={ad} 
          alt="Popup"
          className="popup__image"
        />
      </div>
    </div>
  );
};