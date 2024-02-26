import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="w-full text-white py-6 flex justify-center items-center hover:scale-100">
        <div className="flex space-x-4">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/theshedsandpoint/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-600 hover:text-white w-12 h-12"
            />
          </a>
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/theshedatsandpointidaho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-blue-600 hover:text-white w-12 h-12 hover:scale-100"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
