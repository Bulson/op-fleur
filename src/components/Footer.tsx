// components/Footer.tsx
'use client'

import { FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Informacje kontaktowe */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
          {/* E-mail */}
          <a
            href="mailto:kontakt@opfleur.pl"
            className="flex items-center space-x-2 hover:text-green-400"
          >
            <FaEnvelope className="w-5 h-5" />
            <span>kontakt@opfleur.pl</span>
          </a>

          {/* Telefon */}
          <a
            href="tel:+48123456789"
            className="flex items-center space-x-2 hover:text-green-400"
          >
            <FaPhoneAlt className="w-5 h-5" />
            <span>+48 123 456 789</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/opfleur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-green-400"
          >
            <FaInstagram className="w-5 h-5" />
            <span>@opfleur</span>
          </a>
        </div>

        {/* Prawa autorskie */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Op Fleur. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
