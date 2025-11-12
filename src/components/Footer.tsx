import { useLanguageStore } from "@/store/languageStore"
import { Copyright } from "lucide-react"

function Footer() {

    const { t } = useLanguageStore();

    return (
        <footer className="flex flex-col items-center gap-y-3 py-8 min-h-20 bg-[#00120c] border-t-3  border-green-950 mt-70">
            <p className="text-stone-300 lg:text-lg text-lg flex items-center gap-x-2">
                <Copyright size={18} /> 2025 - {t("hecho_con_amor")}
                <span className="text-green-500 font-semibold">Abel Robaina</span></p>
            <p className="text-md text-stone-300 text-center px-2">{t("construido_con")}
                <span className="text-green-500"> React </span>
                -
                <span className="text-green-500"> Vite </span>
                -
                <span className="text-green-500"> TypeScript </span>
                -
                <span className="text-green-500"> TailwindCSS </span>
                • {t("desplegado_en")}
                <span className="text-green-500"> Vercel </span>
            </p>
        </footer>
    )
}

export default Footer