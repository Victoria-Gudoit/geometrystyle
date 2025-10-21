import { useEffect, useState } from "react";
import { Popup } from "./Popup";
import { AppRouter } from "./components/AppRouter";
import { BackToTopButton } from "./components/BackToTopButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import css from "./style.module.css";

export const App = () => {
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setPopupActive(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={css.app}>
      <Header />
      <ScrollToTop/>
      <BackToTopButton/>
      <main>
        <AppRouter />
      </main>
      <Footer />
      <Popup active={popupActive} setActive={setPopupActive} />
    </div>
  );
};
