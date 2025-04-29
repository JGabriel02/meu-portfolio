'use client';

export default function YouTubeSection() {
  return (
    <section
      id="youtube"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">Fique por dentro dos meus projetos!</h2>

      {/* Vídeo Incorporado */}
      <div className="w-full max-w-4xl aspect-video mt-8">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/STvXMADzn6M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}