export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="relative z-10 max-w-xl text-center px-6 py-12 bg-white-600 bg-opacity-75 rounded-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold text-white mb-4">
          Zielone wnętrza i ogrody
        </h1>
        <p className="text-xl text-white">
          Tworzymy przestrzenie pełne życia i roślin — dla Ciebie i Twojego otoczenia.
        </p>
      </div>
    </section>
  );
}
