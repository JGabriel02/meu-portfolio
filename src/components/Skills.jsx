'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiVite, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { useState } from 'react';

export default function SkillsSection() {
  const [showDoom, setShowDoom] = useState(false);

  const handleJavascriptClick = () => {
    setShowDoom(true);
  };

  const closeDoom = () => {
    setShowDoom(false);
  };

  const skills = [
    { id: 1, name: 'React', icon: <FaReact size={50} className="text-blue-400" />, hoverColor: 'group-hover:text-blue-500' },
    { id: 2, name: 'React Native', icon: <FaReact size={50} className="text-blue-400" />, hoverColor: 'group-hover:text-blue-500' },
    { id: 3, name: 'Next.js', icon: <SiNextdotjs size={50} className="text-gray-300" />, hoverColor: 'group-hover:text-white' },
    { id: 4, name: 'Python', icon: <SiPython size={50} className="text-yellow-400" />, hoverColor: 'group-hover:text-yellow-500' },
    { id: 5, name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-500" />, hoverColor: 'group-hover:text-green-600' },
    { id: 6, name: 'Vite', icon: <SiVite size={50} className="text-purple-400" />, hoverColor: 'group-hover:text-purple-500' },
    { id: 7, name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-blue-500" />, hoverColor: 'group-hover:text-blue-600' },
    { id: 8, name: 'Git', icon: <FaGitAlt size={50} className="text-orange-500" />, hoverColor: 'group-hover:text-orange-600' },
    { 
      id: 9, 
      name: 'JavaScript', 
      icon: <SiJavascript size={50} className="text-yellow-400 cursor-pointer" />, 
      hoverColor: 'group-hover:text-yellow-500',
      onClick: handleJavascriptClick
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 pt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative"
    >
      {/* Modal do Doom */}
      {showDoom && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-4xl bg-black rounded-lg overflow-hidden border-2 border-yellow-400 shadow-2xl">
            <div className="bg-gray-800 p-4 border-b border-yellow-400">
              <h3 className="text-yellow-400 text-xl font-bold">🚀 DOOM - JavaScript Edition</h3>
            </div>
            
            <div className="w-full h-96 sm:h-[500px] bg-gray-900 flex items-center justify-center">
              <iframe
                src="https://admiring-davinci-152c0f.netlify.app"
                      title="DOOM"
                      className="size-full"
                      allow="fullscreen"
              />
            </div>
          </div>
          
          {/* Botão de fechar */}
          <button
            onClick={closeDoom}
            className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300 text-lg"
          >
            Fechar Doom
          </button>
        </motion.div>
      )}

      {/* Título */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Minhas Skills
      </motion.h2>

      {/* Ícones das Skills */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex flex-col items-center group"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div 
              className={`transition-all duration-300 group-hover:scale-110 ${skill.hoverColor} ${
                skill.onClick ? 'cursor-pointer hover:scale-125 transform-gpu' : ''
              }`}
              onClick={skill.onClick || (() => {})}
            >
              {skill.icon}
            </div>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            {skill.onClick && (
              <motion.span 
                className="text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
              >
                🎮 Clique para jogar!
              </motion.span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Easter Egg hint */}
      <motion.div
        className="text-gray-400 text-sm mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="mb-2">💡 Dica: Tente clicar em alguma skill...</p>
        <div className="flex justify-center items-center gap-2 text-yellow-400 animate-pulse">
        </div>
      </motion.div>
    </section>
  );
}