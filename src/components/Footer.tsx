import { useLanguageStore } from "@/store/languageStore"
import { Copyright } from "lucide-react"

function Footer() {

    const { t } = useLanguageStore();

    return (
        <footer className="flex flex-col items-center gap-y-3 py-8 min-h-20 bg-[#001a13] border-t-2 border-green-800 lg:mt-0 mt-20">
            <p className="text-gray-200 lg:text-lg text-lg flex items-center gap-x-2">
                <Copyright size={18} className="text-green-400" /> 2025 - {t("hecho_con_amor")}
                <span className="text-green-400 font-semibold">Abel Robaina</span>
            </p>
            <p className="text-md text-gray-300 text-center px-2">
                {t("construido_con")}
                <span className="text-green-400 font-medium"> React </span>
                -
                <span className="text-green-400 font-medium"> Vite </span>
                -
                <span className="text-green-400 font-medium"> TypeScript </span>
                -
                <span className="text-green-400 font-medium"> TailwindCSS </span>
                • {t("desplegado_en")}
                <span className="text-green-400 font-medium"> Vercel </span>
            </p>
        </footer>
    )
}

export default Footer