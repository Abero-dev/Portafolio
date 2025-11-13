interface TechTagProp {
    tech: string
}

function TechTag({ tech }: TechTagProp) {
    return (
        <p className="border-2 border-green-800 bg-gray-800 text-md text-green-400 px-4 py-1 rounded-full font-semibold">{tech}</p>
    )
}

export default TechTag