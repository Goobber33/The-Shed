"use client";

import React, { useState, useEffect } from "react";
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

  const menuItems = ["HOME", "TRAINERS", "PROGRAMS", "CONTACT"];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      const offset = -800;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <Navbar
      position="sticky"
      className={`py-2 sm:py-4 md:py-12 text-white font-sans w-full`}
      onMenuOpenChange={setIsMenuOpen}
     
    >
      <div className="flex items-center justify-start max-w-4xl space-x-44">
        <NavbarBrand className="shrink-0">
          <img
            src="/shed logo.png"
            className="h-12 sm:h-20 md:h-22 lg:h-32"
            alt="Logo"
          />
        </NavbarBrand>
        <NavbarContent className="flex gap-4 justify-center hidden sm:flex">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} className="gradient-underline">
              <Button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white"
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "default"
                }
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
      />
      <NavbarMenu className="py-6 bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="gradient-underline">
            <Button
              onClick={() => scrollToSection(item.toLowerCase())}
              className="w-full text-center text-white"
            >
              {item}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
