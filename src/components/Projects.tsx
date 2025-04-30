'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Convite de Formatura',
      description:
        'Bem-vindo ao convite de formatura online! Este projeto foi desenvolvido com React e Node.js para oferecer uma experiência interativa e divertida aos convidados.',
      images: [
        '/assets/projects/project2/convite1.jpg',
        '/assets/projects/project2/convite2.jpg',
      ],
      repoLink: 'https://github.com/JGabriel02/convite',
      deployLink: 'https://convite--jg.vercel.app',
    },
    {
      id: 2,
      title: 'Pokelauncher',
      description:
        'Aplicativo desktop desenvolvido em Electron, projetado para centralizar, organizar e facilitar o acesso a hack rooms de Pokémon.',
      images: [
        '/assets/projects/project3/PokeLauncher1.jpg',
        '/assets/projects/project3/PokeLauncher2.jpg',
        '/assets/projects/project3/PokeLauncher3.jpg',
      ],
      repoLink: 'https://github.com/JGabriel02/PokeLauncher',
      downloadLink:
        'https://drive.google.com/file/d/1jnWCwkplbafiC0XySdV7H9Eam-61zCjy/view',
    },
    {
      id: 3,
      title: 'Money',
      description:
        'Aplicativo de controle financeiro pessoal desenvolvido com React Native e Expo.',
      images: [
        '/assets/projects/project4/Money1.jpeg',
        '/assets/projects/project4/Money2.jpeg',
        '/assets/projects/project4/Money3.jpeg',
      ],
      repoLink: 'https://github.com/JGabriel02/money',
      downloadLink:
        'https://expo.dev/accounts/slpjg007/projects/money/builds/7de6020b-9192-40df-9b70-1738ae925a0e',
    },
    {
      id: 4,
      title: 'Lista de Tarefas',
      description:
        'Aplicativo de lista de tarefas desenvolvido com Expo e React Native.',
      images: [
        '/assets/projects/project5/Lista1.jpeg',
        '/assets/projects/project5/Lista2.jpeg',
      ],
      repoLink: 'https://github.com/JGabriel02/lista-de-tarefas',
      downloadLink:
        'https://expo.dev/accounts/slpjg007/projects/lista-de-tarefas/builds/7586a1cd-3e28-45eb-b64e-25797cf4be1f',
    },
    {
      id: 5,
      title: 'Imhere',
      description:
        'ImHere é um aplicativo desenvolvido com React Native, projetado para facilitar o gerenciamento de listas de participantes.',
      images: [
        '/assets/projects/project6/imHere.jpg',
        '/assets/projects/project6/imHere01.jpg',
      ],
      repoLink: 'https://github.com/JGabriel02/imhere',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Título */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-blue-400 pt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meus Projetos
      </motion.h2>

      {/* Grid de Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg shadow-blue-400 overflow-hidden flex flex-col border border-blue-400 p-4 m-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Carrossel para projetos com múltiplas imagens */}
            {project.images ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-64"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`${project.title} - Slide ${index + 1}`}
                      width={400}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Imagem única para projetos sem carrossel
              <div className="w-full h-64 flex items-center justify-center bg-gray-700 text-white">
                <p>Sem imagem disponível</p>
              </div>
            )}

            {/* Conteúdo do Card */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>

              {/* Links */}
              <div className="mt-auto flex gap-4 pt-5 items-center">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition"
                >
                  <FaGithub size={24} />
                </a>
                {project.deployLink && (
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:opacity-80 hover:shadow-lg transition"
                  >
                    Acessar Deploy
                  </a>
                )}
                {project.downloadLink && (
                  <a
                    href={project.downloadLink}
                    download
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:opacity-80 hover:shadow-lg transition"
                  >
                    Download
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}