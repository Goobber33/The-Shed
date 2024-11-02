"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleContactClick = () => {
    window.location.href = "mailto:jenattheshed@gmail.com";
  };

  const buttonStyle = isHovered
    ? { backgroundImage: "linear-gradient(to right, #dde04b, #54b04d)" }
    : {};

  return (
    <div id="contact" className="flex flex-col items-center justify-center">
      <div className="gap-8 sm:gap-12 md:gap-16 lg:gap-24 p-2 lg:p-2 items-center justify-center">
        <div className="flex flex-col">
          <p className="text-white font-100 text-lg sm:text-2xl md:text-3xl lg:text-xl text-center lg:text-left lg:max-w-xl w-auto font-sans mb-12">
            Got questions or ready to join? Email us today and take the first
            step toward your fitness goals!
          </p>
        </div>
      </div>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleContactClick}
        style={buttonStyle}
        className="text-white border-2 px-4 py-2 mt-8 rounded-2xl font-sans text-xl hover:border-none hover:shadow-md hover:shadow-black mb-12 "
      >
        Contact
      </Button>
    </div>
  );
};

export default Contact;
