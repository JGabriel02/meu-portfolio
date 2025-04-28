"use client";

import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-6 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient"
    >
      {/* Imagem de perfil */}
      <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-blue-500 hover:border-blue-400 transition">
        <Image
          src="/perfil.jpg"
          alt="João Gabriel"
          layout="fill"
          objectFit="cover"
          className="animate-fadeIn"
        />
      </div>

      {/* Saudação */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-slideIn">
        Hi, i´m<span className="text-blue-400"> João Gabriel!</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300">
        Desenvolvedor <span className="text-white">Frontend</span>
      </p>

      {/* Botões */}
      <div className="flex gap-4 mt-6">
        <a
          href="/curriculo.pdf"
          target="_blank"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-80 hover:shadow-lg hover:scale-105 transition-transform"
        >
          Meu currículo
        </a>
        <a
          href="https://linktr.ee/SLPJG"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-red-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-80 hover:shadow-lg hover:scale-105 transition-transform"
        >
          Saiba mais
        </a>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-4 animate-bounce">
        <span className="text-gray-400">Scroll Down</span>
        <div className="w-4 h-4 border-b-2 border-r-2 border-gray-400 rotate-45 mt-2"></div>
      </div>
    </section>
  );
}