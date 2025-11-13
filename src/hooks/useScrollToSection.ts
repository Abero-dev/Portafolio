export function useScrollToSection() {
    return (id: string) => {
        const section = document.getElementById(id)
        if (!section) return

        const isMobile = window.innerWidth <= 768

        const offset = isMobile ? 350 : 0
        const top = section.getBoundingClientRect().top + window.scrollY

        window.scrollTo({ top, behavior: 'smooth' })
    }
}
