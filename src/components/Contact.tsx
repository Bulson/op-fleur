'use client';

import { FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 bg-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skontaktuj się z nami</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12">
          {/* E-mail */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl text-green-500 mb-4" />
            <a
              href="mailto:kontakt@opfleur.pl"
              className="text-lg text-gray-800 hover:underline"
            >
              kontakt@opfleur.pl
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <FaInstagram className="text-4xl text-green-500 mb-4" />
            <a
              href="https://www.instagram.com/opfleur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 hover:underline"
            >
              @opfleur
            </a>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-4xl text-green-500 mb-4" />
            <a
              href="tel:+48123456789"
              className="text-lg text-gray-800 hover:underline"
            >
              +48 123 456 789
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
