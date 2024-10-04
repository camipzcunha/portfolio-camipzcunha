
import sobreImg from '../assets/sobreImg.jpg' 

const Sobre = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'> Sobre Mim </h2>
                    <p className='text-base lg:text-lg'>
                        Olá, sou a Camila, tenho 18 anos, sou desenvolvedora do banco BTG Pactual e estudante de Engenharia de Software na FIAP. 
                        Atualmente, estou focada em me tornar uma desenvolvedora FullStack. 
                        Sou apaixonada por tecnologia e por aprender coisas novas. 
                        Estou sempre em busca de novos desafios e conhecimentos.
                    </p>
                    <div className='mt-10'>
                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 
                    bg-gradient-to-br from-blue-500 to-pink-700 text-white'>
                        Ver mais
                    </a>
                    </div>
                </div>
            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={sobreImg} alt="" width={300} height={300} />
        </div>


    </div>
  )
}

export default Sobre