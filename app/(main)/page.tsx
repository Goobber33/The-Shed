import MainHero from "@/components/MainHero";
import App from "@/components/Navbar";

import "@/app/globals.css";
import { CarouselPlugin } from "@/components/AboutContent";
import Trainers from "@/components/Trainers";

export default function Main() {
  return (
    <div>
      <App />
      <MainHero />
      <CarouselPlugin />
      <Trainers />
    </div>
  );
}
