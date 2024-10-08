import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import python from '../assets/python.png';


const Tecnologias = () => {
  return (
    <div className='bg-black md:py-20 border border-gray-600 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 
    place-items-center md:flex md:justify-between md:items-center'>
      <h2 className='text-gray-700 text-1xl md:text-3xl font-bold m-6'>
       Tech <br /> Skills
      </h2>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={html} alt="" />
        <p className='mt-2'>HTML</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={css} alt="" />
        <p className='mt-2'>CSS</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={js} alt="" />
        <p className='mt-2'>JavaScript</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={react} alt="" />
        <p className='mt-2'>React</p>
      </div>


      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={python} alt="" />
        <p className='mt-2'>Python</p>
      </div>


    </div>
  )
}

export default Tecnologias