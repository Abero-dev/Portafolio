import TechCard from "../components/TechCard"

function Tecnologías() {
    return (
        <section id="Tecnologías" className="min-h-screen flex flex-col justify-center items-center gap-y-10">
            <p className="text-white text-2xl">
                A continuación se muestran las tecnologías con las que he interactuado recientemente:
            </p>
            <div className="flex justify-center gap-x-15">
                <TechCard
                    title="Frontend"
                    icons={["HTML5", "CSS3", "TailwindCSS", "JavaScript", "TypeScript", "React", "Redux Toolkit", "Tanstack Query", "Zustand"]}
                />
                <div className="flex flex-col gap-y-5">
                    <TechCard
                        title="Backend"
                        icons={["Nest.js", "PostgresSQL"]}
                    />
                    <TechCard
                        title="Herramientas"
                        icons={["Git", "Docker", "Playwright"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Tecnologías