import { useIsSmallScreen } from "@/hooks/useIsSmallScreen"
import { useScrollToSection } from "@/hooks/useScrollToSection"
import { useLanguageStore } from "@/store/languageStore"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"


function Hero() {

    const scrollToSection = useScrollToSection()
    const isSmallScreen = useIsSmallScreen()
    const { t, language } = useLanguageStore();

    return (
        <section id="Hero" className="min-h-screen text-white flex lg:flex-row flex-col justify-around lg:pt-10 pt-10 lg:-space-x-30 items-center bg-linear-to-br from-black via-black to-green-950 overflow-hidden px-4">

            <div
                className="flex justify-center lg:mt-0 max-w-full -mb-5"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-once="true"
            >
                <img
                    alt="mi_foto"
                    src="img/profile.webp"
                    className="lg:w-100 lg:h-100 w-48 h-48 rounded-full border-3 drop-shadow-2xl drop-shadow-green-950 border-transparent hover:border-green-800 hover:scale-110 transition duration-300 max-w-full object-cover"
                />
            </div>

            <div className={`lg:max-w-[40%] flex flex-col gap-y-5 px-2 flex-wrap lg:mt-0`}>
                <p
                    className="lg:text-5xl text-3xl font-bold md:text-center lg:text-left text-center leading-tight"
                    data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                    data-aos-duration="500"
                    data-aos-delay="1500"
                    data-aos-once="true"
                >
                    {t("soyHero")} <span className="text-green-500">Abel Robaina</span>, {t("profesion")}
                </p>
                <p
                    className={'lg:text-3xl text-xl lg:text-left text-center'}
                    data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                    data-aos-duration="500"
                    data-aos-delay={isSmallScreen ? "1500" : "2000"}
                    data-aos-once="true"
                >
                    {`{${t("usuario")}.status === '${t("complacido")}' &&`}
                </p>
                <p
                    className="lg:text-3xl text-xl lg:text-left text-center"
                    data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                    data-aos-duration="500"
                    data-aos-delay="2000"
                    data-aos-once="true"
                >
                    {'<span>🥳💚</span> }'}
                </p>
                <p
                    className="lg:text-xl text-lg lg:mx-0 mx-2 text-center lg:text-left leading-relaxed"
                    data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                    data-aos-duration="500"
                    data-aos-delay="2500"
                    data-aos-once="true"
                >
                    {language === 'es' ?
                        <>
                            <span className="font-bold text-green-500">Enfocado </span>
                            en crear GUIs
                            <span className="font-bold text-green-500"> intuitivas </span>
                            ,
                            <span className="font-bold text-green-500"> eficientes </span>
                            y orientadas al usuario priorizando la
                            <span className="font-bold text-green-500"> optimización </span>
                            , la
                            <span className="font-bold text-green-500"> claridad </span>
                            y la
                            <span className="font-bold text-green-500"> experiencia final </span>
                            en cada producto.
                        </>
                        :
                        <>
                            <span className="font-bold text-green-500">Focused </span>
                            on creating
                            <span className="font-bold text-green-500"> intuitive </span>
                            ,
                            <span className="font-bold text-green-500"> efficient </span>
                            and user-oriented GUIs prioritizing
                            <span className="font-bold text-green-500"> optimization </span>
                            ,
                            <span className="font-bold text-green-500"> clarity </span>
                            and the
                            <span className="font-bold text-green-500"> final experience </span>
                            in every product.
                        </>
                    }
                </p>

                <div
                    className="flex lg:flex-row  flex-col items-center lg:gap-x-5 lg:gap-y-0 gap-y-6 mt-10 flex-wrap justify-center lg:justify-start"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="3000"
                    data-aos-once="true"
                >
                    <button
                        onClick={() => scrollToSection('Proyectos')}
                        className="flex items-center gap-x-3 px-4 py-2 bg-green-600 text-stone-300 text-lg lg:text-xl font-bold rounded-lg cursor-pointer drop-shadow-green-800 drop-shadow-lg hover:bg-green-800 transition-colors duration-300"
                    >
                        <p>{t("ver_proyectos")}</p>
                        <ArrowDown size={30} />
                    </button>
                    <div className="flex gap-x-5">
                        <button
                            onClick={() => scrollToSection('Contacto')}
                            className="cursor-pointer border-2 border-gray-600 px-4 py-2 rounded-lg text-lg lg:text-xl hover:border-green-500 hover:scale-110 transition-all duration-300"
                        >
                            {t("contactame")}
                        </button>
                        <a
                            className="px-4 py-2 bg-green-600 text-white text-xl lg:text-xl font-bold rounded-lg cursor-pointer drop-shadow-green-800 drop-shadow-lg hover:bg-green-800 transition-colors duration-300"
                            href={`/pdf/CV-Abel-Robaina-Mata-${language === 'es' ? 'ES' : 'EN'}.pdf`}
                            download={`CV-Abel-Robaina-Mata-${language === 'es' ? 'ES' : 'EN'}.pdf`}
                        >
                            {t("descargar_cv")}
                        </a>
                    </div>
                </div>

                <div
                    className="flex justify-center lg:justify-normal gap-x-4 lg:mt-4 lg:pb-0 pb-4"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="3500"
                    data-aos-once="true"
                >
                    <a href="https://github.com/Abero-dev" target="_blank" rel='noopener noreferrer'>
                        <Github className="w-10 h-10 p-2 border-2 border-transparent rounded-lg hover:bg-green-950 hover:stroke-green-400 transition-all duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/abel-robaina-89a918360/" target="_blank" rel='noopener noreferrer'>
                        <Linkedin className="w-10 h-10 p-2 border-2 border-transparent rounded-lg hover:bg-green-950 hover:stroke-green-400 transition-all duration-300" />
                    </a>
                    <a href="mailto:abel04.mata@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="w-10 h-10 p-2 border-2 border-transparent rounded-lg hover:bg-green-950 hover:stroke-green-400 transition-all duration-300" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero