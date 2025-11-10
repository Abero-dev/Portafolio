import { Copyright } from "lucide-react"

function Footer() {
    return (
        <footer className="flex flex-col items-center gap-y-3 py-8 min-h-20 bg-[#00120c] border-t-3 border-green-950 mt-70">
            <p className="text-stone-300 lg:text-2xl text-xl flex items-center gap-x-2">
                <Copyright /> 2025 - Hecho con 💚 por
                <span className="text-green-500 font-semibold">Abel Robaina</span></p>
            <p className="text-xl text-stone-300 text-center">Construido con
                <span className="text-green-500"> React </span>
                -
                <span className="text-green-500"> Vite </span>
                -
                <span className="text-green-500"> TypeScript </span>
                -
                <span className="text-green-500"> TailwindCSS </span>
                • Desplegado en
                <span className="text-green-500"> Vercel </span>
            </p>
        </footer>
    )
}

export default Footer