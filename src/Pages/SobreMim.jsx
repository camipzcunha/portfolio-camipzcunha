import React from 'react';
import code from '../assets/code.jpg';

export default function SobreMim() {
  return (
    <div className="min-h-screen bg-black p-10">
      <h1 className="text-5xl font-bold text-primary-color mb-6 animate__animated animate__fadeIn">
        Sobre Mim
      </h1>

      <div className="flex flex-col md:flex-row md:items-start mb-10">
        <img
          src={code} 
          alt="Camila Pedroza"
          className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 animate__animated animate__fadeIn"
          style={{ animationDelay: '0.2s' }}
        />
        
        <div className="md:ml-6 w-full">
          <p className="text-lg text-gray-300 animate__animated animate__fadeIn" style={{ animationDelay: '0.4s' }}>
            Olá! Meu nome é <span className="text-primary-color font-bold">Camila Pedroza</span>, sou apaixonada por tecnologia e desenvolvimento web. Desde o meu primeiro contato com a programação, percebi que era o caminho que queria seguir. Estou sempre em busca de aprender novas tecnologias e melhorar minhas habilidades.
          </p>

          <h2 className="text-3xl font-bold text-primary-color mt-6 mb-4 animate__animated animate__fadeIn" style={{ animationDelay: '0.6s' }}>
            Minhas Habilidades
          </h2>
          <p className="text-gray-300 mb-4 animate__animated animate__fadeIn" style={{ animationDelay: '0.8s' }}>
            - HTML, CSS e JavaScript<br />
            - React e Tailwind<br />
            - Python e PHP<br />
            - Desenvolvimento de APIs<br />
            - Gerenciamento de projetos
          </p>

          <h2 className="text-3xl font-bold text-primary-color mt-6 mb-4 animate__animated animate__fadeIn" style={{ animationDelay: '1s' }}>
            Hobbies & Curiosidades
          </h2>
          <p className="text-gray-300 mb-4 animate__animated animate__fadeIn" style={{ animationDelay: '1.2s' }}>
            - Amo dançar e explorar diferentes estilos de dança.<br />
            - Sou uma leitora ávida e aprecio poesia.<br />
            - Adoro cozinhar e experimentar novas receitas.<br />
            - Tenho interesse em fotografia e gosto de capturar momentos especiais.
          </p>

          <div className="mt-8">
            <h2 className="text-3xl font-bold text-primary-color mt-6 mb-4 animate__animated animate__fadeIn" style={{ animationDelay: '1.4s' }}>
              Vamos Conversar!
            </h2>
            <p className="text-lg text-gray-300 mb-4 animate__animated animate__fadeIn" style={{ animationDelay: '1.6s' }}>
              Estou sempre aberta a novas oportunidades e colaborações. Sinta-se à vontade para me contatar através das minhas redes sociais!
            </p>
            <a 
              href="mailto:camipzcunha@gmail.com" 
              className="bg-primary-color text-white px-6 py-3 rounded-md transition duration-300 hover:bg-opacity-90 animate__animated animate__fadeIn" 
              style={{ animationDelay: '1.8s' }}
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
