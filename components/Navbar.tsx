"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["HOME", "ABOUT", "TRAINERS", "PROGRAMS", "RATES", "HOURS", "CONTACT"];

  const scrollToSection = (sectionId: string) => {
    const isDesktop = window.innerWidth >= 768;
    let offset = 0;

    if (isDesktop) {
      switch (sectionId) {
        case "trainers":
          offset = -85;
          break;
        case "programs":
          offset = 150;
          break;
        default:
          offset = 100;
          break;
          case "rates":
          offset = 0;
          break;
  
          case "hours":
          offset = 270;
          break;
      }
    } else {
      switch (sectionId) {
        case "programs":
          offset = 100;
          break;
        default:
          offset = 0;
          break;
      }
    }

    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <Navbar
      position="sticky"
      className={`py-2 sm:py-4 md:py-8 text-white font-sans w-full`}
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="flex items-center justify-start max-w-4xl space-x-40">
        <NavbarBrand className="shrink-0">
          <img
            src="/shed logo.png"
            className="h-12 sm:h-20 md:h-22 lg:h-32"
            alt="Shed Logo"
          />
        </NavbarBrand>
        <NavbarContent className="flex gap-4 justify-center hidden sm:flex">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} className="gradient-underline">
              <Button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white"
              >
                {item}
              </Button>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {isMenuOpen && (
        <NavbarMenu className="py-8 bg-black">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index} className="text-lg p-1">
              <Button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="w-full text-center text-white font-bold font-sans"
              >
                {item}
              </Button>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
