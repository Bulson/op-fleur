'use client'

import { useState } from 'react'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  image: string
  fullDescription: string
}

const projects: Project[] = [
  {
    title: 'Event: Zielony Skwer',
    description: 'Projekt zielonej przestrzeni na wydarzenie plenerowe w Hadze.',
    image: '/projects/project1.jpg',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sapien ac orci cursus sodales...',
  },
  {
    title: 'Lokal: Rustykalne Bistro',
    description: 'Aranżacja wnętrza z żywą zielenią i dekoracją ścienną.',
    image: '/projects/project2.jpg',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a dui in arcu finibus luctus...',
  },
  // ... kolejne projekty
]

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="scroll-mt-20 py-16 bg-[#f9f9f9]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {selected ? selected.title : 'Portfolio'}
        </h2>

        {!selected && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelected(p)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-500 hover:scale-105"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-60"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {selected && (
          <div className="mt-6 text-center">
            <Image
              src={selected.image}
              alt={selected.title}
              width={800}
              height={500}
              className="rounded-2xl mx-auto mb-6 object-cover"
            />
            <p className="text-lg text-gray-800 mb-6">{selected.fullDescription}</p>
            <button
              onClick={() => setSelected(null)}
              className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              ← Powrót do portfolio
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
