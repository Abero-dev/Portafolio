export function useScrollToSection() {
    return (id: string) => {
        const section = document.getElementById(id)
        if (!section) return

        const top = section.getBoundingClientRect().top + window.scrollY

        window.scrollTo({ top, behavior: 'smooth' })
    }
}
