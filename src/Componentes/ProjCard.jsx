import { Link } from "react-router-dom"; // Importa o Link para navegação

export default function ProjCard({ id, name, image }) { // Certifique-se de que as props estão recebendo id, name e image
  return (
    <div
      className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
        mx-auto content-div h-[200px] bg-cover relative"
    >
      <img src={`/public/${image}`} alt={name} className="w-full h-full object-cover" />
      <div
        className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex
          flex-col justify-center"
      >
        <span className="text-1xl font-bold text-white text-center p-5 uppercase tracking-wider">
          {name}
        </span>
        <div className="pt-8 text-center">
          <Link to={`/projetos/${id}`}>
            <button className="bg-[#1f2937] text-white px-4 py-2 rounded-md">
              Ver detalhes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
