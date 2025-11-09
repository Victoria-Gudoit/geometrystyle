import { useEffect, useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { BackToTopButton } from "./components/BackToTopButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import css from "./style.module.css";
import { Helmet } from "react-helmet-async";

export const App = () => {

  return (
    <div className={css.app}>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Geometry Style</title>
        <meta
          name="description"
          content="Мастерская интерьерных решений Geometry Style — столешницы, подоконники и другие изделия из кварцевого агломерата в Минске."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <ScrollToTop />
      <BackToTopButton />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};