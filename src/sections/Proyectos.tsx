import { projects } from "@/assets/proyects"
import ProjectCard from "@/components/ProjectCard"

function Proyectos() {
    return (
        <section id="Proyectos" className="min-h-screen flex flex-col justify-center items-center gap-y-20 lg:px-50 px-5 lg:mt-0 mt-70">
            <h2 className="text-6xl text-green-500 font-bold lg:mt-50">Proyectos</h2>
            <div className="lg:grid lg:grid-cols-2 flex flex-col gap-10">
                {projects.map(p =>
                    <ProjectCard img={p.img} title={p.title} desc={p.desc} techs={p.techs} codeLink={p.codeLink} />
                )}
            </div>
        </section>
    )
}

export default Proyectos