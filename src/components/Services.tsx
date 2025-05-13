'use client'

import Image from 'next/image'

const services = [
  {
    title: "Projektowanie wnętrz",
    description: "Tworzymy unikalne aranżacje z żywą zielenią w Twoim domu i biurze.",
    image: "/service1.jpg",
  },
  {
    title: "Projektowanie zewnętrzne",
    description: "Zielone ogrody, tarasy i patio dopasowane do otoczenia.",
    image: "/service2.jpg",
  },
  {
    title: "Rośliny na eventy",
    description: "Dekoracje roślinne na wesela, konferencje i inne wydarzenia.",
    image: "/service3.jpg",
  },
  {
    title: "Sprzedaż roślin",
    description: "Szeroki wybór roślin doniczkowych i ogrodowych w jednym miejscu.",
    image: "/service4.jpg",
  },
]

export default function Services() {
  return (
    <section
      id="uslugi"
      className="scroll-mt-20 py-16 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">Usługi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-gray-700">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
