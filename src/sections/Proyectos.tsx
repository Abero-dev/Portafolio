import { projects } from "@/assets/proyects"
import ProjectCard from "@/components/ProjectCard"

function Proyectos() {
    return (
        <section id="Proyectos" className="min-h-screen flex flex-col justify-center items-center gap-y-20 lg:px-50 px-5 lg:mt-0 mt-70">
            <h2
                className="text-6xl text-green-500 font-bold lg:mt-50"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="false"
            >
                Proyectos
            </h2>
            <div className="lg:grid lg:grid-cols-2 flex flex-col gap-10">
                {projects.map(p =>
                    <ProjectCard img={p.img} title={p.title} desc={p.desc} techs={p.techs} codeLink={p.codeLink} flip_to={p.flip_to} delay={p.delay}/>
                )}
            </div>
        </section>
    )
}

export default Proyectos