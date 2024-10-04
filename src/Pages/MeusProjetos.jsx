import ProjCard from "../Componentes/ProjCard"; 
import projs from "../data/projs.json"; 

export default function MeusProjetos() {
  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Meus projetos</p>
        <p className="text-gray-400">
          Dê uma olhada em alguns dos meus projetos recentes!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projs.map((proj) => (
          <ProjCard
            key={proj.id} 
            id={proj.id} 
            name={proj.name} 
            image={proj.imagem} 
          />
        ))}
      </div>
    </div>
  );
}
