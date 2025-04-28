'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0A0A0A] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo - Redireciona para Home */}
        <Link href="#home" className="flex items-center">
          <Image src="/teste.png" alt="Logo" width={40} height={40} />
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex gap-6 text-white font-semibold">
          <a href="#about" className="hover:text-blue-500 transition">Sobre</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projetos</a>
          <a href="#youtube" className="hover:text-blue-500 transition">YouTube</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contato</a>
        </nav>

        {/* Ícones Github e Linkedin */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/JGabriel02" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-700 hover:text-blue-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/slpjg/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-gray-700 hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </header>
  );
}
