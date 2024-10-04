import camila from '../assets/camila-pedroza.png';
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
            <div className='my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                    <img src={camila} alt="Camila Emoji"></img>
            </div>

            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>
                        Eu sou
                    </span> <br />
                    <TypeAnimation
                    sequence={[
                        "Dev Front-End",
                        1000,
                        "Dev Back-End",
                        1000,
                        "Web Designer",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>

                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    Olá, eu sou a Camila Pedroza, estudante de Engenharia de Software e Desenvolvedora FullStack. 
                    Aqui você encontra um pouco sobre mim, meus projetos e tecnologias que eu utilizo.
                </p>

                <div className='my-8'>
                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4
                    bg-gradient-to-br from-blue-500 to-pink-700 text-white'>
                        Baixar CV
                    </a>
                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4
                    border border-gray-400 hover:bg-gradient-to-br from-blue-500 to-pink-700 text-white hover:border-none'>
                    Meu Github
                    </a>     

                </div>

            </div>
        </div>

    )
}

export default Hero;