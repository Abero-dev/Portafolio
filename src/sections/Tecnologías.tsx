import TechCard from "../components/TechCard"

function Tecnologías() {
    return (
        <section id="Tecnologías" className="min-h-screen flex flex-col justify-center items-center gap-y-10 lg:mt-0 mt-70">
            <h2 className="text-5xl text-green-500 font-bold">Tecnologías</h2>
            <p className="text-white text-2xl lg:p-0 lg:text-left text-center px-2">
                A continuación se muestran las tecnologías con las que he interactuado recientemente:
            </p>
            <div className="flex lg:flex-row flex-col lag:gap-y-0 gap-y-10 justify-center gap-x-15">
                <TechCard
                    title="Frontend"
                    icons={["HTML5", "CSS3", "TailwindCSS", "JavaScript", "TypeScript", "React", "Redux Toolkit", "Tanstack Query", "Zustand"]}
                />
                <div className="flex flex-col lg:gap-y-5 gap-y-10">
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