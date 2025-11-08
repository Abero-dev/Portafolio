import { ArrowDown } from "lucide-react"


function Hero() {

    return (
        <section className="h-screen text-white flex justify-around items-center">
            <div className="max-w-[35%] flex flex-col gap-y-5">
                <p className="text-3xl font-bold">DESARROLLADOR FRONTEND</p>
                <p className="text-[80px] font-bold">Soy <span className="text-green-500">Abel Robaina</span></p>
                <p className="text-5xl">{"{usuario.status === 'complacido' && <span>🥳💚</span>}"}</p>
                <hr className="border-[3px] border-dashed border-green-600 my-6" />
                <p className="text-2xl">
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
                <div className="flex items-center gap-x-10 mt-10">
                    <button className="flex items-center gap-x-4 px-6 py-3 bg-green-600 text-white text-2xl font-bold rounded-lg cursor-pointer drop-shadow-green-800 drop-shadow-lg hover:bg-green-700 transition-colors duration-300">
                        <p>Ver Proyectos</p>
                        <ArrowDown size={40} />
                    </button>
                    <button className="cursor-pointer border-2 border-gray-600 px-6 py-3 rounded-lg text-2xl hover:border-green-500 hover:scale-110 transition-all duration-300">
                        Contáctame
                    </button>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <img alt="mi_foto" src="vite.svg" className="w-80 h-80" />
            </div>
        </section>
    )
}

export default Hero