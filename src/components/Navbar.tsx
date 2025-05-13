'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full h-[80px]">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto h-full px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-2xl">
          <span>🌿</span>
          <span>Op Fleur</span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-8 text-base font-medium">
          <Link href="#hero">Home</Link>
          <Link href="#uslugi">Usługi</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Kontakt</Link>
        </div>

        {/* Kontakt info */}
        <div className="hidden md:flex items-center space-x-6 text-base text-gray-800 whitespace-nowrap">
          <a
            href="https://instagram.com/opfleur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1"
          >
            <img src="/insta.svg" alt="Instagram" className="w-5 h-5" />
            <span>@opfleur</span>
          </a>
          <span>+48 123 456 789</span>
          <a
            href="mailto:kontakt@opfleur.pl"
            className="text-blue-600 hover:underline"
          >
            kontakt@opfleur.pl
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 flex flex-col items-center py-4 space-y-3 text-base font-medium">
          <Link href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="#uslugi" onClick={() => setMenuOpen(false)}>
            Usługi
          </Link>
          <Link href="#portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Kontakt
          </Link>
        </div>
      )}
    </nav>
)
}
