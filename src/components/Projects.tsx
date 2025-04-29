'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Meu Portfólio',
      description: 'Este é o meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiências como desenvolvedor. O site foi construído utilizando tecnologias modernas como React, Next.js e Tailwind CSS, com foco em design responsivo e performance. Ele inclui seções como Sobre Mim, Skills, Projetos e Contato, além de animações interativas e uma interface intuitiva',
      image: '/assets/projects/project1/meu-portifólio.png',
      repoLink: 'https://github.com/JGabriel02/meu-portfolio',
    },
    {
    id: 2,
      title: 'Convite de Formatura',
      description: 'Bem-vindo ao convite de formatura online! Este projeto foi desenvolvido com React e Node.js para oferecer uma experiência interativa e divertida aos convidados. O convite simula uma tela de ´hackeamento´ antes de revelar o convite oficial. Após uma animação inicial, os convidados podem acessar informações detalhadas sobre a formatura, como data, local e horário, além de confirmar presença. O convite também inclui um QR Code e uma chave PIX para presentes, tornando a experiência prática e moderna.',
      images: [
        '/assets/projects/project2/convite1.jpg',
        '/assets/projects/project2/convite2.jpg',
      ],
      repoLink: 'https://github.com/JGabriel02/convite',
      deployLink: 'https://convite--jg.vercel.app', 

    },
    
    {
      id: 3,
      title: 'Pokelauncher',
      description: 'Aplicativo desktop desenvolvido em Electron, projetado para centralizar, organizar e facilitar o acesso a hack rooms de Pokémon. O PokéLauncher oferece uma interface intuitiva que permite gerenciar ROMs de forma prática, com suporte para download e execução direta através de um emulador integrado. Ideal para fãs de Pokémon que buscam uma solução simplificada e eficiente para explorar e jogar suas hack rooms favoritas.',
      images: [
        '/assets/projects/project3/PokeLauncher1.jpg',
        '/assets/projects/project3/PokeLauncher2.jpg',
        '/assets/projects/project3/PokeLauncher3.jpg',
      ],
      repoLink: 'https://github.com/JGabriel02/PokeLauncher',
      downloadLink: 'https://drive.google.com/file/d/1jnWCwkplbafiC0XySdV7H9Eam-61zCjy/view'
    },
    {
        id: 4,
        title: 'Money',
        description: 'Aplicativo de controle financeiro pessoal desenvolvido com React Native e Expo, projetado para facilitar o gerenciamento das suas finanças. Com ele, você pode adicionar transações, categorizá-las como despesas ou receitas, e acompanhar seu saldo de forma clara e prática. O aplicativo oferece uma interface intuitiva e responsiva, garantindo uma experiência fluida. Disponível para download em formato APK para dispositivos Android.',
        images: [
          '/assets/projects/project4/Money1.jpeg',
          '/assets/projects/project4/Money2.jpeg',
          '/assets/projects/project4/Money3.jpeg',
        ],
        repoLink: 'https://github.com/JGabriel02/money',
        downloadLink: 'https://expo.dev/accounts/slpjg007/projects/money/builds/7de6020b-9192-40df-9b70-1738ae925a0e',
      },
    
    {
      id: 5,
      title: 'Lista de Terefas',
      description: 'Aplicativo de lista de tarefas desenvolvido com Expo e React Native, criado como parte de um desafio prático da Rocketseat. O app permite que os usuários adicionem, concluam e excluam tarefas de forma simples e intuitiva, além de acompanhar o progresso das tarefas concluídas. Com uma interface moderna e responsiva, ele é ideal para organizar o dia a dia e aumentar a produtividade. Disponível para download em formato APK para dispositivos Android.',
      images: [
        '/assets/projects/project5/Lista1.jpeg',
        '/assets/projects/project5/Lista2.jpeg',
      ],
      repoLink: 'https://github.com/JGabriel02/lista-de-tarefas',
      downloadLink: 'https://expo.dev/accounts/slpjg007/projects/lista-de-tarefas/builds/7586a1cd-3e28-45eb-b64e-25797cf4be1f',
    },
    {
      id: 6,
      title: 'Imhere',
      description: 'ImHere é um aplicativo desenvolvido com React Native, projetado para facilitar o gerenciamento de listas de participantes. Com ele, você pode adicionar novos nomes, visualizar quem está presente e remover participantes de forma prática, seja por meio de um botão ou com gestos intuitivos de deslizar. Ideal para eventos, reuniões ou qualquer situação que exija organização eficiente.',
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
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">Meus Projetos</h2>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
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
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="object-contain"
              />
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
          </div>
        ))}
      </div>
    </section>
  );
}