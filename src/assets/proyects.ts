type Project = {
    img: string,
    title: string,
    desc: string,
    techs: string[],
    codeLink: string,
    flip_to: string,
    delay: string
}

export const projects: Project[] = [
    {
        img: "img/radar.webp",
        title: "Radar Tecnológico",
        desc: "Radar tecnológico con buscador de tecnologías y visualización de las mismas dentro del radar según su relevancia. Conectado con API de OpenAlex para la recopilación y análisis de las tecnologías para otorgarles cierto grado de relevancia.",
        techs: [
            "HTML5",
            "CSS",
            "JavaScript",
            "Express.js",
            "MongoDB",
        ],
        codeLink: "https://github.com/Abero-dev/radar",
        flip_to: "right",
        delay: "700"
    },
    {
        img: "img/QBabel.webp",
        title: "Librería virtual QBabel",
        desc: "Librería virtual para promover el conocimiento y el entretenimiento de los usuarios a través de la lectura de su diverso contenido literario de manera digital. El sitio incluye además autenticación de usuario, gestión de usuarios, publicación de obras y gestión de comentarios.",
        techs: [
            "HTML5",
            "CSS",
            "TailwindCSS",
            "JavaScript",
            "React",
            "Redux Toolkit",
            "Django Rest Framework"
        ],
        codeLink: "https://github.com/Jose-luis-echemendia/QBabel",
        flip_to: "left",
        delay: "700"
    },
    {
        img: "img/vigitech.webp",
        title: "Plataforma de Vigilancia Tecnológica Vigitech",
        desc: "Plataforma web para la recopilación y análisis de tendencias tecnológicas y visualización de las mismas dentro de un radar tecnológico según su relevancia. Incluye además un sistema de recomendaciones de tendencias, gestión de playlists de tendencias, y reporte de cambios en las tecnologías.",
        techs: [
            "HTML5",
            "CSS",
            "TailwindCSS",
            "TypeScript",
            "React",
            "Tanstack Query"
        ],
        codeLink: "https://github.com/Luke1606/vigitech-official",
        flip_to: "right",
        delay: "100"
    },
]