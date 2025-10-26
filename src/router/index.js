import { MainPage } from "../MainPage";
import { MaterialsPage } from "../components/MaterialsPage";
import { AboutUs } from "../components/AboutUs";
import { OurWorks } from "../components/OurWorks";
import { Contacts } from "../components/Contacts";
import { MaterialDetail } from "../components/MaterialDetail";
import { WorkDetail } from "../components/WorkDetail";
import { ProductionProcess } from "../components/Production";
import { Reviews } from "../components/Reviews";
import { ThankYouPage } from "../components/ThankYou";
import { NotFound } from "../components/NotFound";

export const routes = [
  { path: "/", component: MainPage },
  { path: "materials/", component: MaterialsPage },
  { path: "production/", component: ProductionProcess },
  { path: "aboutUs/", component: AboutUs },
  { path: "ourWorks/", component: OurWorks },
  { path: "contacts/", component: Contacts },
  { path: "material/:id/", component: MaterialDetail },
  { path: "work/:id/", component: WorkDetail },
  { path: "reviews/", component: Reviews },
  { path: "thank-you/", component: ThankYouPage },
  { path: "*", component: NotFound },
];
