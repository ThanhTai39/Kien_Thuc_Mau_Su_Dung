'use client'

import { useEffect } from 'react'

export default function FireworksEffect({ trigger, onComplete }) {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            if (document.body.contains(script)) document.body.removeChild(script)
        }
    }, [])

    const fire = () => {
        if (!window.confetti) return

        // Bắn pháo hoa nhiều đợt từ nhiều vị trí
        const colors = ['#ff0000', '#ffa500', '#ffff00', '#00ff00', '#00bfff', '#ff00ff', '#ff1493']
        const positions = [
            { x: 0.2, y: 0.6 },
            { x: 0.5, y: 0.5 },
            { x: 0.8, y: 0.6 },
            { x: 0.35, y: 0.4 },
            { x: 0.65, y: 0.4 },
        ]

        positions.forEach((pos, i) => {
            setTimeout(() => {
                window.confetti({
                    particleCount: 80,
                    spread: 360,
                    startVelocity: 30 + Math.random() * 15,
                    origin: pos,
                    colors: colors.slice(i % 3, i % 3 + 4),
                    shapes: ['circle', 'square'],
                    scalar: 0.8 + Math.random() * 0.6,
                    gravity: 1,
                    ticks: 250,
                    decay: 0.92,
                })
            }, i * 400)
        })

        if (onComplete) setTimeout(onComplete, 3000)
    }

    useEffect(() => {
        if (trigger) {
            const timer = setTimeout(fire, 500)
            return () => clearTimeout(timer)
        }
    }, [trigger])

    return null
}
