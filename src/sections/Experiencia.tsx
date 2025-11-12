import TechTag from "@/components/TechTag";
import { useLanguageStore } from "@/store/languageStore";

const techs: string[] = ["HTML5", "CSS", "TailwindCSS", "TypeScript", "React", "Tanstack Query", "Docker", "Playwright"];

function Experiencia() {

    const { t, language } = useLanguageStore();

    return (
        <section id="Experiencia" className="min-h-screen flex flex-col justify-center items-center gap-y-10 md:pt-80 lg:pt-10 lg:mt-0 mt-70 xl:0">
            <div
                className="text-center space-y-5"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="true"
            >
                {language === 'es'
                    ?
                    <p className="text-gray-200 text-4xl font-bold">Experiencia <span className="text-green-500">Profesional</span></p>
                    :
                    <p className="text-gray-200 text-4xl font-bold"><span className="text-green-500">Professional </span>Experience</p>
                }
                <p className="text-gray-200 text-xl lg:p-0 px-2">{t("exp_subtitulo")}.</p>
            </div>
            <div
                className="bg-[#00120c] min-h-40 max-w-[80%] border-3 border-green-950 rounded-xl px-12 py-8 flex flex-col gap-y-16 hover:border-green-700 transition-colors duration-300"
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-delay="500"
                data-aos-once="true"
            >
                <div className="flex lg:justify-between lg:gap-y-0 gap-y-10 lg:flex-row flex-col items-center gap-x-40 text-gray-200">
                    <div className="space-y-2">
                        <p className="text-2xl font-bold">{t("profesion")}</p>
                        <p className="text-lg text-stone-400 font-bold">{t("centro")}</p>
                    </div>
                    <p className="border-2 border-green-800 bg-green-950 text-md text-green-400 px-4 py-1 rounded-full font-semibold">2024 - {t("presente")}</p>
                </div>
                <div className="text-gray-300">
                    <p className="text-lg font-bold">
                        {t("tarea")}
                    </p>
                </div>
                <div className="flex gap-x-5 flex-wrap gap-y-4">
                    {techs.map(t =>
                        <TechTag key={t} tech={t} />
                    )}
                </div>
            </div>
        </section >
    )
}

export default Experiencia