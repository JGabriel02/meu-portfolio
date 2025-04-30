import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-6">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Informações de Contato */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-blue-400">Contato</h3>
          <p className="text-gray-300">
            E-mail: <a href="mailto:joaogabrielrocha.dev@gmail.com" className="text-blue-400 hover:underline">joaogabrielrocha.dev@gmail.com</a>
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/JGabriel02" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-white hover:text-blue-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/slpjg/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-white hover:text-blue-500 transition" />
          </a>
          <a href="https://wa.me/5551994715897" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} className="text-white hover:text-green-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}