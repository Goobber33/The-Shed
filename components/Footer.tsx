import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-800 text-white py-6 flex justify-center items-center">
        <div className="flex space-x-4">
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-600 hover:text-pink-500 w-8 h-8" />
          </a>
          {/* Facebook Icon */}
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 hover:text-blue-500 w-8 h-8" />
          </a>
        </div>
      </footer>
    </>
  );
}
