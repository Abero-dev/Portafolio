import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface TechCardProps {
    title: string,
    icons: string[],
}

function TechCard({ title, icons }: TechCardProps) {
    return (
        <div className="flex flex-col gap-y-8 bg-[#00120c] px-8 py-4 border-2 border-green-950 rounded-xl hover:border-green-700 transition-colors duration-300">
            <p className="text-2xl text-green-500 text-center font-bold">{title}</p>
            <hr className="border-2 border-green-700" />
            <div className="grid grid-cols-3 gap-8 ">

                {icons.map(i =>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <img
                                key={i}
                                src={`icons/${i}.svg`}
                                alt={i}
                                className="w-20 h-20"
                            />
                        </TooltipTrigger>
                        <TooltipContent className="text-2xl font-semibold backdrop-blur-lg bg-opacity-30">
                            <p>{i}</p>
                        </TooltipContent>
                    </Tooltip>
                )
                }
            </div>
        </div>
    )
}

export default TechCard