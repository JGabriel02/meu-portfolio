"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white snap-start"
    >
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">
        Sobre Mim
      </h2>

      {/* Texto de apresentação */}
      <p className="text-lg sm:text-xl leading-relaxed max-w-4xl text-gray-300">
        Olá! Meu nome é <span className="text-blue-400 font-semibold">João Gabriel</span>, e sou um desenvolvedor apaixonado por tecnologia, aprendizado contínuo e soluções criativas. Minha jornada na área de TI começou com a curiosidade em entender como as coisas funcionam por trás da tela e hoje transformo essa curiosidade em código que entrega valor real.
      </p>

      {/* Experiência */}
      <p className="text-lg sm:text-xl leading-relaxed max-w-4xl text-gray-300">
        Tenho me especializado em <span className="text-white font-semibold">desenvolvimento frontend</span>, com experiência em projetos que utilizam tecnologias como <span className="text-blue-400">React</span>, <span className="text-blue-400">React Native</span>, <span className="text-blue-400">Next.js</span> e <span className="text-blue-400">Vite</span>. Adoro desafios que me tiram da zona de conforto e me motivam a criar soluções que impactam pessoas de forma positiva.
      </p>

      {/* Idiomas */}
      <div className="text-left max-w-4xl">
        <h3 className="text-2xl font-semibold text-white mt-6">Idiomas</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Português (Nativo)</li>
          <li>Inglês (Intermediário)</li>
        </ul>
      </div>

      {/* Educação */}
      <div className="text-left max-w-4xl">
        <h3 className="text-2xl font-semibold text-white mt-6">Educação</h3>
        <p className="text-gray-300">
          Curso Superior em <span className="text-blue-400">Análise e Desenvolvimento de Sistemas</span> - SENAC/RS
        </p>
      </div>
    </section>
  );
}