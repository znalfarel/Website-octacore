import Image from "next/image";
import ScrollVelocity from "./component/ScrollVelocity";

export default function Page() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black-600 to-blue-700 text-white flex flex-col items-center py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-10 md:py-15">

        {/* LEFT CONTENT */}
        <div className="md:ml-10 text-center md:text-left">

          <h1 className="space-y-5 font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-sora">
            Jempol kecelup santen
          </h1>

          <p className="space-y-5 text-base md:text-lg opacity-90 mt-4">
            Layanan pembuatan website, service laptop, app premium, dan top-up saldo e-wallet. Buat harimu menjadi mudah.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-200 transition">
              Gasken lek
            </button>
            <button className="px-6 py-3 rounded-2xl bg-blue-900/40 backdrop-blur-lg border border-white/20 hover:bg-blue-900/60 transition">
              Malas
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE / ILLUSTRATION */}
        <div className="flex justify-center order-first md:order-last">
          <Image
            src="/hero.png"
            alt="Hero image"
            width={550}
            height={550}
            className="drop-shadow-2xl rounded-2xl w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] h-auto"
          />
        </div>

      </div>
      
      {/* ScrollVelocity - Now centered and full width */}
      <div className="w-full text-center mt-6 md:mt-0">
        <ScrollVelocity
          texts={['Octacore Official', 'Buat Harimu Menjadi Mudah Bersama Kami ☆']}
        />
      </div>
    </section>
  );
}