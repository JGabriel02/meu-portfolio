'use client';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z0i22hr', 
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
        form.current!,
        'YOUR_USER_ID' // Substitua pelo seu User ID (chave pública)
      )
      .then(
        (result) => {
          console.log('Mensagem enviada:', result.text);
          alert('Mensagem enviada com sucesso!');
        },
        (error) => {
          console.error('Erro ao enviar mensagem:', error.text);
          alert('Erro ao enviar mensagem. Tente novamente.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-8 px-6 pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">Entre em Contato</h2>

      {/* Formulário de Contato */}
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg mt-8 flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Seu Nome"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Seu E-mail"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          rows={5}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-80 hover:shadow-lg transition"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}