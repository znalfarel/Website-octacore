import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="w-full min-h-screen bg-linear-120 from-purple-950 to-blue-800 text-white flex items-center py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-5 ml-10">
            <h1 className="font-sora text-5xl md:text-6xl font-extrabold leading-tight">
              Jempol kecelup santen
            </h1>

            <p className="text-lg opacity-90">
              Layanan pembuatan website, service laptop, app premium, dan top-up
              saldo e-wallet. Buat harimu menjadi mudah.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-200 transition">
                Gasken lek
              </button>
              <button className="px-6 py-3 rounded-2xl bg-blue-900/40 backdrop-blur-lg border border-white/20 hover:bg-blue-900/60 transition">
                Malas
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE / ILLUSTRATION */}
          <div className="flex justify-center">
            <Image
              src="/hero.png"
              alt="Hero image"
              width={550}
              height={550}
              className="drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
