import { useParams } from "react-router-dom"; 
import projs from "../data/projs.json"; 

export default function DetalheProjeto() {
  const { id } = useParams(); 
  const projeto = projs.find((proj) => proj.id === parseInt(id)); 

  if (!projeto) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <h1 className="md:text-4xl text-2xl font-bold mb-5 text-white">{projeto.name}</h1>
      <img src={`/public/${projeto.imagem}`} alt={projeto.name} className="w-full h-96 object-cover mb-5" />
      <p className="text-gray-700 mb-5">{projeto.description}</p>
      <p className="text-gray-500 mb-5">Ano de Desenvolvimento: {projeto.ano_desenvolvimento}</p>
      <p className="text-gray-500">Tecnologias Utilizadas: {projeto.tecnologias.join(", ")}</p>
    </div>
  );
}
