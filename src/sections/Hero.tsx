import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"


function Hero() {

    return (
        <section className="h-screen text-white flex lg:flex-row flex-col justify-around lg:mt-0 mt-75 lg:-space-x-30 lg:items-center">
            <div className="lg:max-w-[35%] flex flex-col gap-y-5">
                <p className="text-[70px] font-bold md:text-left text-center">Soy <span className="text-green-500">Abel Robaina</span>, Frontend Developer</p>
                <p className="lg:text-5xl text-2xl lg:text-left text-center">{"{usuario.status === 'complacido' && <span>🥳💚</span>}"}</p>
                <hr className="border-[3px] border-dashed border-green-600 my-6 lg:mx-0 mx-5" />
                <p className="text-2xl lg:mx-0 mx-5">
                    <span className="font-bold text-green-600">Enfocado </span>
                    en crear interfaces
                    <span className="font-bold text-green-600"> intuitivas </span>
                    ,
                    <span className="font-bold text-green-600"> eficientes </span>
                    y orientadas al usuario priorizando la
                    <span className="font-bold text-green-600"> optimización </span>
                    , la
                    <span className="font-bold text-green-600"> claridad </span>
                    y la
                    <span className="font-bold text-green-600"> experiencia final </span>
                    en cada producto.
                </p>
                <div className="flex lg:flex-row flex-col items-center lg:gap-x-10 lg:gap-y-0 gap-y-10 mt-10">
                    <button className="flex items-center gap-x-4 px-6 py-3 bg-green-600 text-white text-2xl font-bold rounded-lg cursor-pointer drop-shadow-green-800 drop-shadow-lg hover:bg-green-700 transition-colors duration-300">
                        <p>Ver Proyectos</p>
                        <ArrowDown size={40} />
                    </button>
                    <button className="cursor-pointer border-2 border-gray-600 px-6 py-3 rounded-lg text-2xl hover:border-green-500 hover:scale-110 transition-all duration-300">
                        Contáctame
                    </button>
                </div>
                <div className="mt-10 flex justify-center lg:justify-normal gap-x-6">
                    <a
                        href="https://github.com/Abero-dev"
                        target="_blank"
                        rel='noopener noreferrer'
                    >
                        <Github className="w-12 h-12 p-2 border-2 border-transparent rounded-lg hover:bg-green-950 hover:stroke-green-400 transition-all duration-300" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abel-robaina-89a918360/"
                        target="_blank"
                        rel='noopener noreferrer'
                    >
                        <Linkedin className="w-12 h-12 p-2 border-2 border-transparent rounded-lg hover:bg-green-950 hover:stroke-green-400 transition-all duration-300" />
                    </a>
                    <a
                        href="mailto:abel04.mata@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Mail className="w-12 h-12 p-2 border-2 border-transparent rounded-lg hover:bg-green-950 hover:stroke-green-400 transition-all duration-300" />
                    </a>
                </div>
            </div>
            <div className="flex justify-center lg:mt-0 mt-10">
                <img alt="mi_foto" src="img/profile.webp" className="lg:w-150 lg:h-150 w-60 h-60 rounded-full border-3 drop-shadow-2xl drop-shadow-green-950 border-transparent hover:border-green-800 hover:scale-110 transition duration-300" />
            </div>
        </section>
    )
}

export default Hero