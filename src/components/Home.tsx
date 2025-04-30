"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function HomeSection() {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current!, {
      strings: ["Desenvolvedor Frontend Web e Mobile"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-6 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient"
    >
      {/* Imagem de perfil */}
      <motion.div
        className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-blue-500 hover:border-blue-400 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/perfil.jpg"
          alt="João Gabriel"
          layout="fill"
          objectFit="cover"
          className="animate-fadeIn"
        />
      </motion.div>

      {/* Saudação */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold animate-slideIn"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Hi, I’m <span className="text-blue-400">João Gabriel!</span>
      </motion.h1>

      {/* Subtítulo com animação de escrita */}
      <motion.div
        className="flex items-center text-base sm:text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span ref={typedElement}></span>
      </motion.div>

      {/* Botões */}
      <motion.div
        className="flex gap-4 mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <a
          href="/curriculo.pdf"
          target="_blank"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-80 hover:shadow-lg hover:scale-105 transition-transform animate-pulse-custom"
        >
          Meu currículo
        </a>
      </motion.div>
    </section>
  );
}