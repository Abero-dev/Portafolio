import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface TechCardProps {
    title: string,
    icons: string[],
}

function TechCard({ title, icons }: TechCardProps) {
    return (
        <div key={title} className="flex flex-col gap-5.5 bg-[#001a13] px-8 py-3 border-2 border-green-800 rounded-xl hover:border-green-400 hover:bg-[#002a1a] hover:shadow-green-500/20 hover:shadow-lg transition-all duration-300">
            <p className="text-lg text-green-400 text-center font-bold">{title}</p>
            <hr className="border-2 border-green-600" />
            <div className="grid grid-cols-3 gap-8">

                {icons.map(i =>
                    <Tooltip key={i}>
                        <TooltipTrigger asChild>
                            <img
                                src={`icons/${i}.svg`}
                                alt={i}
                                className="w-12 h-12 hover:scale-110 transition-transform duration-200"
                            />
                        </TooltipTrigger>
                        <TooltipContent className="text-md font-semibold bg-gray-800 text-green-300 border border-green-600">
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