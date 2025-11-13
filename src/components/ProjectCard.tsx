import { Github } from "lucide-react"
import TechTag from "./TechTag"
import { useLanguageStore } from "@/store/languageStore"

interface ProjectCardProps {
    img: string,
    title: string,
    desc: string,
    techs: string[],
    codeLink: string,
    flip_to: string,
    delay: string
}

function ProjectCard({ img, title, desc, techs, codeLink, flip_to, delay }: ProjectCardProps) {

    const { t } = useLanguageStore();

    return (
        <div
            className="flex flex-col border-2 border-green-800 rounded-t-xl md:min-w-100 rounded-b-xl bg-[#001a13] group hover:border-green-400 hover:bg-[#002a1a] hover:shadow-green-500/10 hover:shadow-xl transition-all duration-300"
            data-aos={`flip-${flip_to}`}
            data-aos-duration="1000"
            data-aos-delay={title === "Librería virtual QBabel" ? "100" : delay}
            data-aos-once="true"
        >
            <div className="w-full lg:h-70 h-70 bg-blue-500 overflow-hidden rounded-t-xl">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-400"
                />
            </div>

            <div className="flex flex-col justify-between grow p-10 gap-y-10">
                <div className="space-y-5 flex flex-col">
                    <p className="text-gray-100 text-2xl font-bold">{title}</p>
                    <p className="text-gray-200 text-xl">{desc}</p>
                </div>
                <div className="flex flex-wrap gap-5">
                    {techs.map(t =>
                        <TechTag key={t} tech={t} />
                    )}
                </div>
                <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-md font-bold flex items-center gap-x-5 px-4 py-2 bg-gray-800 w-fit rounded-xl border-2 border-green-700 hover:bg-green-600 hover:border-green-400 hover:scale-105 transition-all duration-300"
                >
                    <Github size={20} />
                    <p>{t("codigo")}</p>
                </a>
            </div>
        </div >
    )
}

export default ProjectCard