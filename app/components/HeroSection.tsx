import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="w-full min-h-screen text-white flex items-center py-36 md:py-12 lg:py-24 ">
        <div className="container mx-auto px-8 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:max-w-6xl">
          {/* LEFT CONTENT */}
          <div className="space-y-4">
            <h1 className="font-sora text-4xl md:text-6xl font-extrabold leading-tight">
              Jempol kecelup santen
            </h1>

            <p className="text-base md:text-lg opacity-90 max-w-sm leading-relaxed tracking-normal">
              Layanan pembuatan website, service laptop, app premium, dan top-up
              saldo e-wallet. Buat harimu menjadi mudah.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-gray-200 transition">
                Gasken lek
              </button>
              <button className="px-4 py-3 md:px-6 md:py-4 rounded-xl bg-blue-900/40 backdrop-blur-lg border border-white/20 hover:bg-blue-900/60 transition">
                Malas
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE / ILLUSTRATION */}
          <div className="flex justify-center ">
            <Image
              src="/hero.png"
              alt="Hero image"
              width={500}
              height={500}
              className="drop-shadow-2xl rounded-2xl w-96 md:w-100 lg:w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
