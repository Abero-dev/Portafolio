import TechTag from "@/components/TechTag";
import { useLanguageStore } from "@/store/languageStore";

const techs: string[] = ["HTML5", "CSS", "TailwindCSS", "TypeScript", "React", "Tanstack Query", "Docker", "Playwright"];

function Experiencia() {
    const { t, language } = useLanguageStore();

    return (
        <section id="Experiencia" className="min-h-screen flex flex-col justify-center items-center gap-y-10 md:pt-80 lg:pt-10 lg:mt-0 pt-30 xl:pt-0 bg-gradient-to-b from-gray-950 to-[#00120c]">
            <div
                className="text-center space-y-5"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="true"
            >
                {language === 'es'
                    ?
                    <p className="text-gray-100 text-4xl font-bold">Experiencia <span className="text-green-400">Profesional</span></p>
                    :
                    <p className="text-gray-100 text-4xl font-bold"><span className="text-green-400">Professional </span>Experience</p>
                }
                <p className="text-gray-200 text-xl lg:p-0 px-2 font-medium">{t("exp_subtitulo")}.</p>
            </div>
            <div
                className="bg-[#001a13] min-h-40 max-w-[80%] border-2 border-green-800 rounded-xl px-12 py-8 flex flex-col gap-y-16 hover:border-green-400 hover:bg-[#002a1a] hover:shadow-green-500/10 hover:shadow-xl transition-all duration-300"
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-delay="500"
                data-aos-once="true"
            >
                <div className="flex lg:justify-between lg:gap-y-0 gap-y-10 lg:flex-row flex-col items-center gap-x-40">
                    <div className="space-y-2">
                        <p className="text-2xl font-bold text-gray-100">{t("profesion")}</p>
                        <p className="text-lg text-gray-300 font-semibold">{t("centro")}</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-lg font-medium">
                            2024 - {t("presente")}
                        </p>
                    </div>
                </div>
                <div className="text-gray-200">
                    <p className="text-lg font-semibold leading-relaxed">
                        {t("tarea")}
                    </p>
                </div>
                <div className="flex gap-x-5 flex-wrap gap-y-4">
                    {techs.map(t =>
                        <TechTag key={t} tech={t} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Experiencia