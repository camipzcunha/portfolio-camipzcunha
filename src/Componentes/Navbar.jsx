import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div>
      <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex
      justify-between items-center '>
        <h1 className='text-3xl font-bold primary-color ml-4'>CAMILA PEDROZA</h1>
        <ul className="hidden md:flex ">
          <li className="p-5">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-5">
            <NavLink to="/projetos">Meus projetos</NavLink>
          </li>
          <li className="p-5">
            <NavLink to="/sobremim">Sobre Mim</NavLink>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden mr-6'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
          : 'fixed left-[-100%]'}>
          <h1 className='text-3xl font-bold primary-color m-4'>CAMILA PEDROZA</h1>
          <ul className='p-8 text-1xl'>
            <li className="p-5"><a href="">Tecnologias</a></li>
            <li className="p-5"><a href="">Meus projetos</a></li>
            <li className="p-5"><a href="">Sobre Mim</a></li>
            <li className="p-5"><a href="">Entre em contato</a></li>
            <li className="p-5"><a href="">Redes sociais</a></li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Navbar;