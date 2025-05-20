import { AppRouter } from "./components/AppRouter";
import { BackToTopButton } from "./components/BackToTopButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

export const App = () => {
  return (
    <div>
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
