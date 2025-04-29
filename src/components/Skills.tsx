'use client';

import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiVite, SiTailwindcss, SiJavascript } from 'react-icons/si';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">
        Minhas Skills
      </h2>

      {/* Ícones das Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
        {/* React */}
        <div className="flex flex-col items-center group">
          <FaReact size={50} className="text-blue-400 group-hover:scale-110 group-hover:text-blue-500 transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">React</p>
        </div>

        {/* React Native */}
        <div className="flex flex-col items-center group">
          <FaReact size={50} className="text-blue-400 group-hover:scale-110 group-hover:text-blue-500 transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">React Native</p>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center group">
          <SiNextdotjs size={50} className="text-gray-300 group-hover:scale-110 group-hover:text-white transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">Next.js</p>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center group">
          <SiPython size={50} className="text-yellow-400 group-hover:scale-110 group-hover:text-yellow-500 transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">Python</p>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center group">
          <FaNodeJs size={50} className="text-green-500 group-hover:scale-110 group-hover:text-green-600 transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">Node.js</p>
        </div>

        {/* Vite */}
        <div className="flex flex-col items-center group">
          <SiVite size={50} className="text-purple-400 group-hover:scale-110 group-hover:text-purple-500 transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">Vite</p>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center group">
          <SiTailwindcss size={50} className="text-blue-500 group-hover:scale-110 group-hover:text-blue-600 transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">Tailwind CSS</p>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center group">
          <FaGitAlt size={50} className="text-orange-500 group-hover:scale-110 group-hover:text-orange-600 transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">Git</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center group">
          <SiJavascript size={50} className="text-yellow-400 group-hover:scale-110 group-hover:text-yellow-500 transition-transform duration-300" />
          <p className="mt-2 text-lg font-semibold">JavaScript</p>
        </div>
      </div>
    </section>
  );
}