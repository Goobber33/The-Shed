import MainHero from "@/components/MainHero";
import App from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

import "@/app/globals.css";
import { CarouselPlugin } from "@/components/AboutContent";
import Trainers from "@/components/Trainers";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Main() {
  return (
    <div>
      <App />
      <MainHero />
      <CarouselPlugin />
      <Trainers />
      <Programs />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}
