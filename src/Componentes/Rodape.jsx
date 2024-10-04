import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa';

const items = [
    { name: 'Github', icon: FaGithub, link: "https://github.com/camipzcunha" },
    { name: 'Linkedin', icon: FaLinkedin, link: "https://www.linkedin.com/in/camipzcunha" },
    { name: 'Instagram', icon: FaInstagram, link: "https://www.instagram.com/camspedroza/" },
];

const Rodape = () => {
  return (
    <div className='flex flex-col max-w-[1200px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 Camila Pedroza da Cunha. Todos os direitos reservados</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            {items.map((item, index) => {
                const Icon = item.icon; // Armazenando o componente de ícone
                return (
                    <a 
                      key={index} 
                      href={item.link} // Usando o link correto
                      target="_blank" // Abrindo em nova aba
                      rel="noopener noreferrer" // Segurança
                      className='hover:text-white'
                    >
                        <Icon />
                    </a>
                );
            })}
        </div>
    </div>
  );
}

export default Rodape;
