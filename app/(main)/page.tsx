import MainHero from "@/components/MainHero";
import App from "@/components/Navbar";

import { Navbar } from "@nextui-org/react";
import "@/app/globals.css";
import { CarouselPlugin } from "@/components/AboutContent";

export default function Main() {
  return (
    <div>
      <App />
      <Navbar />
      <MainHero />
      <CarouselPlugin />
     
    </div>
  );
}
