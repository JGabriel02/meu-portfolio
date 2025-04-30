'use client';

import { motion } from 'framer-motion';

export default function YouTubeSection() {
  return (
    <section
      id="youtube"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Título */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Fique por dentro dos meus projetos!
      </motion.h2>

      {/* Vídeo Incorporado */}
      <motion.div
        className="w-full max-w-4xl aspect-video mt-8 border border-blue-400 rounded-lg shadow-lg shadow-blue-400 p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/STvXMADzn6M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </motion.div>
    </section>
  );
}