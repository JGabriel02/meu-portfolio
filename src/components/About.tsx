"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 pt-20 bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white overflow-y-auto"
    >
      {/* Título */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Sobre Mim
      </motion.h2>

      {/* Texto de apresentação */}
      <motion.p
  className="text-lg sm:text-xl leading-relaxed max-w-4xl text-gray-300"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.5 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Olá! Meu nome é <span className="text-blue-400 font-semibold">João Gabriel</span>, e sou um desenvolvedor apaixonado por tecnologia, aprendizado contínuo e soluções criativas. Transformo ideias em código e ajudo novos talentos a brilharem no mundo tech. Sou desenvolvedor de aplicações <span className="text-blue-400">web</span> e <span className="text-blue-400">mobile</span>, além de compartilhar dicas e conteúdos sobre frontend nas redes sociais para quem deseja se aventurar nesse vasto universo da tecnologia.
</motion.p>

<motion.p
  className="text-lg sm:text-xl leading-relaxed max-w-4xl text-gray-300"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.5 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  Sou de <span className="text-blue-400 font-semibold">Alvorada/RS</span> e apaixonado por games e futebol. Também gosto muito de tatuagens, atualmente todas as minhas tatuagens têm relação com o mundo geek. Meu Pokémon favorito é o <span className="text-purple-400 font-semibold">Gengar</span>. Além disso, adoro explorar novos lugares, especialmente aqueles com uma boa comida, e minha comida favorita é um delicioso sushi.
</motion.p>
      {/* Idiomas */}
      <motion.div
        className="text-left max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-white mt-6">Idiomas</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Português (Nativo)</li>
          <li>Inglês (Intermediário)</li>
        </ul>
      </motion.div>

      {/* Educação */}
      <motion.div
        className="text-left max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-white mt-6">Educação</h3>
        <p className="text-gray-300">
          Curso Superior em <span className="text-blue-400">Análise e Desenvolvimento de Sistemas</span> - SENAC/RS
        </p>
      </motion.div>
    </section>
  );
}