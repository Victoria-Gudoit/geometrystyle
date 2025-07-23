import { AppRouter } from "./components/AppRouter";
import { BackToTopButton } from "./components/BackToTopButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import css from "./style.module.css";

export const App = () => {
  return (
    <div className={css.app}>
      <Header />
      <ScrollToTop/>
      <BackToTopButton/>
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};
