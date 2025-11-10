import TechCard from "../components/TechCard"

function Tecnologías() {
    return (
        <section id="Tecnologías" className="min-h-screen flex flex-col justify-center items-center gap-y-10 lg:mt-0 mt-70 pb-15">
            <h2
                className="text-6xl text-green-500 font-bold"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="false"
            >
                Tecnologías
            </h2>
            <p
                className="text-white text-2xl lg:p-0 lg:text-left text-center px-2"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="false"
            >
                A continuación se muestran las tecnologías con las que he interactuado recientemente:
            </p>
            <div className="flex lg:flex-row flex-col lag:gap-y-0 gap-y-10 justify-center gap-x-15">
                <div data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="700"
                    data-aos-once="false"
                >
                    <TechCard
                        title="Frontend"
                        icons={["HTML5", "CSS3", "TailwindCSS", "JavaScript", "TypeScript", "React", "Redux Toolkit", "Tanstack Query", "Zustand"]}

                    />
                </div>
                <div className="flex flex-col lg:gap-y-5 gap-y-10">
                    <div data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-delay="950"
                        data-aos-once="false"
                    >
                        <TechCard
                            title="Backend"
                            icons={["Nest.js", "PostgresSQL"]}
                        />
                    </div>
                    <div data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-delay="1200"
                        data-aos-once="false"
                    >
                        <TechCard
                            title="Herramientas"
                            icons={["Git", "Docker", "Playwright"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tecnologías