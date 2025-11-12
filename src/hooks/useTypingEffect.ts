import { useEffect, useState, useRef } from 'react'

export function useTypingEffect(text: string, options?: {
    typingSpeed?: number
    deletingSpeed?: number
    pauseTime?: number
}) {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const animationRef = useRef({
        typingSpeed: options?.typingSpeed ?? 100,
        deletingSpeed: options?.deletingSpeed ?? 50,
        pauseTime: options?.pauseTime ?? 2000
    })

    // Actualizar las opciones cuando cambian
    useEffect(() => {
        animationRef.current = {
            typingSpeed: options?.typingSpeed ?? 100,
            deletingSpeed: options?.deletingSpeed ?? 50,
            pauseTime: options?.pauseTime ?? 2000
        }
    }, [options?.typingSpeed, options?.deletingSpeed, options?.pauseTime])

    useEffect(() => {
        let timeoutId: any;

        const animate = () => {
            const { typingSpeed, deletingSpeed, pauseTime } = animationRef.current

            if (!isDeleting) {
                // Modo escritura
                if (currentIndex <= text.length) {
                    setDisplayText(text.substring(0, currentIndex))
                    setCurrentIndex(prev => prev + 1)
                    timeoutId = setTimeout(animate, typingSpeed)
                } else {
                    // Terminó de escribir, iniciar borrado después de pausa
                    timeoutId = setTimeout(() => {
                        setIsDeleting(true)
                    }, pauseTime)
                }
            } else {
                // Modo borrado
                if (currentIndex > 0) {
                    setDisplayText(text.substring(0, currentIndex - 1))
                    setCurrentIndex(prev => prev - 1)
                    timeoutId = setTimeout(animate, deletingSpeed)
                } else {
                    // Terminó de borrar, reiniciar ciclo
                    setIsDeleting(false)
                    timeoutId = setTimeout(() => {
                        setCurrentIndex(0)
                    }, 500)
                }
            }
        }

        timeoutId = setTimeout(animate, isDeleting ? animationRef.current.deletingSpeed : animationRef.current.typingSpeed)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text, currentIndex, isDeleting])

    return displayText
}