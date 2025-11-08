import { useEffect, useState, useRef } from 'react'

export function useTypingEffect(text: string, options?: {
    typingSpeed?: number
    deletingSpeed?: number
    pauseTime?: number
}) {
    const [displayText, setDisplayText] = useState('')
    const animationRef = useRef({
        currentIndex: 0,
        isDeleting: false,
        fullText: text,
        typingSpeed: options?.typingSpeed ?? 100,
        deletingSpeed: options?.deletingSpeed ?? 50,
        pauseTime: options?.pauseTime ?? 2000
    })

    useEffect(() => {
        const animate = () => {
            const state = animationRef.current

            if (!state.isDeleting) {
                if (state.currentIndex <= state.fullText.length) {
                    setDisplayText(state.fullText.substring(0, state.currentIndex))
                    state.currentIndex++
                    setTimeout(animate, state.typingSpeed)
                } else {
                    setTimeout(() => {
                        state.isDeleting = true
                        animate()
                    }, state.pauseTime)
                }
            } else {
                if (state.currentIndex > 0) {
                    setDisplayText(state.fullText.substring(0, state.currentIndex - 1))
                    state.currentIndex--
                    setTimeout(animate, state.deletingSpeed)
                } else {
                    state.isDeleting = false
                    setTimeout(() => {
                        state.currentIndex = 0
                        animate()
                    }, 500)
                }
            }
        }

        animate()
        return () => { }
    }, [])

    return displayText
}
