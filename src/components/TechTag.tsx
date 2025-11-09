interface TechTagProp {
    tech: string
}

function TechTag({ tech }: TechTagProp) {
    return (
        <p className="border-2 border-green-800 bg-green-950 text-xl text-green-400 px-4 py-2 rounded-full font-semibold">{tech}</p>
    )
}

export default TechTag