import { MainPage } from "../MainPage";
import { MaterialsPage } from "../components/MaterialsPage";
import { ProductsPage } from "../components/ProductsPage";
import { AboutUs } from "../components/AboutUs";
import { OurWorks } from "../components/OurWorks";
import { Contacts } from "../components/Contacts";
import { MaterialDetail } from "../components/MaterialDetail";

export const routes = [
  { path: "/", component: MainPage },
  { path: "materials", component: MaterialsPage },
  { path: "products", component: ProductsPage },
  { path: "aboutUs", component: AboutUs },
  { path: "ourWorks", component: OurWorks },
  { path: "contacts", component: Contacts },
  { path: "material/:id", component: MaterialDetail },

];
