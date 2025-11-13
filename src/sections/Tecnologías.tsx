import { useIsSmallScreen } from "@/hooks/useIsSmallScreen"
import TechCard from "../components/TechCard"
import { useLanguageStore } from "@/store/languageStore";

function Tecnologías() {
    const isSmallScreen = useIsSmallScreen();
    const { t } = useLanguageStore();

    return (
        <section id="Tecnologías" className="min-h-screen flex flex-col justify-center items-center gap-y-10 md:pt-80 lg:pt-30 lg:mt-0 pt-30 bg-linear-to-b from-[#00120c] to-gray-950">
            <h2
                className="text-4xl text-green-400 font-bold"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="true"
            >
                {t("tecnologias")}
            </h2>
            <p
                className="text-gray-200 text-xl lg:p-0 lg:text-left text-center px-2 font-medium"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="true"
            >
                {t("tecn_subtitulo")}:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-5.5 px-4">
                <div
                    data-aos={isSmallScreen ? "fade-up" : "fade-right"}
                    data-aos-duration="500"
                    data-aos-delay="700"
                    data-aos-once="true"
                >
                    <TechCard
                        title="Frontend"
                        icons={["HTML5", "CSS3", "TailwindCSS", "JavaScript", "TypeScript", "React", "Redux Toolkit", "Tanstack Query", "Zustand"]}
                    />
                </div>
                <div className="flex flex-col lg:gap-4 gap-5.5">
                    <div
                        data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                        data-aos-duration="500"
                        data-aos-delay={isSmallScreen ? "100" : "950"}
                        data-aos-once="true"
                    >
                        <TechCard
                            title="Backend"
                            icons={["Nest.js", "PostgresSQL"]}
                        />
                    </div>
                    <div
                        data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                        data-aos-duration="500"
                        data-aos-delay={isSmallScreen ? "100" : "1200"}
                        data-aos-once="true"
                    >
                        <TechCard
                            title={t("herramientas")}
                            icons={["Git", "Docker", "Playwright"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tecnologías