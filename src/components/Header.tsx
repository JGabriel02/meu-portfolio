'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0A0A0A] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo - Redireciona para Home */}
        <Link href="#home" className="flex items-center">
          <Image src="/teste.png" alt="Logo" width={40} height={40} />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-6 text-white font-semibold">
          <a href="#about" className="hover:text-blue-500 transition">Sobre</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projetos</a>
          <a href="#youtube" className="hover:text-blue-500 transition">YouTube</a>
        </nav>

        {/* Ícones Github, Linkedin e WhatsApp */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/JGabriel02" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-700 hover:text-blue-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/slpjg/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-gray-700 hover:text-blue-500 transition" />
          </a>
          <a href="https://wa.me/5551994715897" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} className="text-green-500 hover:text-green-600 transition" />
          </a>
        </div>

        {/* Botão de Menu Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Menu Suspenso Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] text-white flex flex-col items-center gap-4 py-4">
          <a href="#about" className="hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#skills" className="hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Projetos</a>
          <a href="#youtube" className="hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>YouTube</a>

          {/* Ícones Github, Linkedin e WhatsApp */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/JGabriel02" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-700 hover:text-blue-500 transition" />
            </a>
            <a href="https://www.linkedin.com/in/slpjg/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-700 hover:text-blue-500 transition" />
            </a>
            <a href="https://wa.me/5551994715897" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} className="text-green-500 hover:text-green-600 transition" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}