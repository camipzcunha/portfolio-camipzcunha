import React, { useState } from 'react';

const Contato = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);
    
    // Aqui você pode adicionar mais lógica, como enviar os dados para um servidor
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">Entre em Contato</h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5 relative">
                    <input 
                      type="text" 
                      placeholder="Seu Nome" 
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      value={nome} // Bind o valor do input ao estado
                      onChange={(e) => setNome(e.target.value)} // Atualiza o estado no change
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5 relative">
                    <input 
                      type="email" 
                      placeholder="Seu Email" 
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      value={email} // Bind o valor do input ao estado
                      onChange={(e) => setEmail(e.target.value)} // Atualiza o estado no change
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5 relative">
                    <textarea 
                      placeholder="Mensagem" 
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" 
                      rows={4}
                      value={mensagem} // Bind o valor do textarea ao estado
                      onChange={(e) => setMensagem(e.target.value)} // Atualiza o estado no change
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button 
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                  > 
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato;
