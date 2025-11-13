import { projectsES, projectsEN } from "@/assets/proyects"
import ProjectCard from "@/components/ProjectCard"
import { useLanguageStore } from "@/store/languageStore"

function Proyectos() {

    const { t, language } = useLanguageStore();

    return (
        <section id="Proyectos" className="min-h-screen flex flex-col justify-center items-center gap-y-20 md:pt-80 lg:pt-0 lg:px-50 px-5 lg:mt-0 pt-30">
            <h2
                className="text-4xl text-green-500 font-bold lg:mt-50"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="true"
            >
                {t("proyectos")}
            </h2>
            <div className="lg:grid lg:grid-cols-2 flex flex-col gap-10 lg:min-w-screen xl:min-w-full lg:px-15 xl:px-0">
                {language === 'es' ?
                    projectsES.map(p =>
                        <ProjectCard key={p.title} img={p.img} title={p.title} desc={p.desc} techs={p.techs} codeLink={p.codeLink} flip_to={p.flip_to} delay={p.delay} />
                    )
                    :
                    projectsEN.map(p =>
                        <ProjectCard key={p.title} img={p.img} title={p.title} desc={p.desc} techs={p.techs} codeLink={p.codeLink} flip_to={p.flip_to} delay={p.delay} />
                    )
                }
            </div>
        </section>
    )
}

export default Proyectos