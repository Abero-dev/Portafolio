import { Github } from "lucide-react"
import TechTag from "./TechTag"

interface ProjectCardProps {
    img: string,
    title: string,
    desc: string,
    techs: string[],
    codeLink: string | undefined
}

function ProjectCard({ img, title, desc, techs, codeLink }: ProjectCardProps) {
    return (
        <div className="flex flex-col border-3 border-green-950 rounded-t-xl rounded-b-xl bg-[#00120c] group hover:border-green-700 transition-all duration-300">
            <div className="w-full lg:h-100 h-70 bg-blue-500 overflow-hidden rounded-t-xl">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-400"
                />
            </div>

            <div className="flex flex-col justify-between grow p-10 gap-y-10">
                <div className="space-y-5 flex flex-col">
                    <p className="text-stone-200 text-3xl font-bold">{title}</p>
                    <p className="text-gray-400 text-2xl">{desc}</p>
                </div>
                <div className="flex flex-wrap gap-5">
                    {techs.map(t =>
                        <TechTag tech={t} />
                    )}
                </div>
                <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl font-bold flex items-center gap-x-5 px-4 py-3 bg-gray-950 w-fit rounded-xl border-2 border-gray-800 hover:bg-green-600 transition-colors"
                >
                    <Github size={25} />
                    <p>Código</p>
                </a>
            </div>
        </div >
    )
}

export default ProjectCard