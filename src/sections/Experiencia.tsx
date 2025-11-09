const techs: string[] = ["HTML5", "CSS", "TailwindCSS", "TypeScript", "React", "Tanstack Query", "Docker", "Playwright"];

function Experiencia() {
    return (
        <section id="Experiencia" className="min-h-screen flex flex-col justify-center items-center gap-y-10">
            <div className="text-center space-y-5">
                <p className="text-white text-6xl font-bold">Experiencia <span className="text-green-500">Profesional</span></p>
                <p className="text-white text-2xl">Experiencia consolidada en el desarrollo de soluciones digitales innovadoras.</p>
            </div>
            <div className="bg-[#00120c] min-h-40 max-w-[80%] border-2 border-green-950 rounded-xl px-12 py-8 flex flex-col gap-y-16 hover:border-green-700 transition-colors duration-300">
                <div className="flex justify-between items-center gap-x-40 text-white">
                    <div className="space-y-2">
                        <p className="text-4xl font-bold">Desarrollador Frontend</p>
                        <p className="text-2xl font-bold">Centro de Tecnologías Interactivas Vertex - UCI</p>
                    </div>
                    <p className="border-2 border-green-800 bg-green-950 text-xl text-green-400 px-4 py-2 rounded-full font-semibold">2024 - Presente</p>
                </div>
                <div className="text-white">
                    <p className="text-xl font-bold">
                        Encargado del desarrollo del frontend del Sistema de Vigilancia Tecnológica Vigitech
                        utilizando buenas prácticas de usabilidad en la implementación de GUIs modernas e interactivas
                        con el objetivo de mejorar la experiencia del usuario.
                    </p>
                </div>
                <div className="flex gap-x-5">
                    {techs.map(t =>
                        <p className="border-2 border-green-800 bg-green-950 text-xl text-green-400 px-4 py-2 rounded-full font-semibold">{t}</p>
                    )}
                </div>
            </div>
        </section >
    )
}

export default Experiencia