'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiVite, SiTailwindcss, SiJavascript } from 'react-icons/si';

export default function SkillsSection() {
  const skills = [
    { id: 1, name: 'React', icon: <FaReact size={50} className="text-blue-400" />, hoverColor: 'group-hover:text-blue-500' },
    { id: 2, name: 'React Native', icon: <FaReact size={50} className="text-blue-400" />, hoverColor: 'group-hover:text-blue-500' },
    { id: 3, name: 'Next.js', icon: <SiNextdotjs size={50} className="text-gray-300" />, hoverColor: 'group-hover:text-white' },
    { id: 4, name: 'Python', icon: <SiPython size={50} className="text-yellow-400" />, hoverColor: 'group-hover:text-yellow-500' },
    { id: 5, name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-500" />, hoverColor: 'group-hover:text-green-600' },
    { id: 6, name: 'Vite', icon: <SiVite size={50} className="text-purple-400" />, hoverColor: 'group-hover:text-purple-500' },
    { id: 7, name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-blue-500" />, hoverColor: 'group-hover:text-blue-600' },
    { id: 8, name: 'Git', icon: <FaGitAlt size={50} className="text-orange-500" />, hoverColor: 'group-hover:text-orange-600' },
    { id: 9, name: 'JavaScript', icon: <SiJavascript size={50} className="text-yellow-400" />, hoverColor: 'group-hover:text-yellow-500' },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 pt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
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
            <div className={`transition-transform duration-300 group-hover:scale-110 ${skill.hoverColor}`}>
              {skill.icon}
            </div>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}