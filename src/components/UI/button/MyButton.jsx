import React from "react";
import { Link } from "react-router-dom";
import css from "./MyButton.module.css";

export const MyButton = ({ children, ...props }) => {
  return (
    <Link className={css.btn} {...props}>
      {children}
    </Link>
  );
};
