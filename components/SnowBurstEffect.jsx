'use client'

import { useEffect } from 'react'

export default function SnowBurstEffect({ trigger, onComplete }) {
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

        const duration = 3000
        const end = Date.now() + duration

        const frame = () => {
            // Góc dưới trái bắn lên
            window.confetti({
                particleCount: 8,
                angle: 70,
                spread: 120,
                origin: { x: 0, y: 1 },
                colors: ['#ffffff', '#e0f7fa', '#b2ebf2', '#80deea'],
                shapes: ['circle'],
                scalar: 1.4,
                gravity: 0.8,
                ticks: 350,
                startVelocity: 40,
                drift: 0.5,
            })
            // Góc dưới phải bắn lên
            window.confetti({
                particleCount: 8,
                angle: 110,
                spread: 120,
                origin: { x: 1, y: 1 },
                colors: ['#ffffff', '#e0f7fa', '#b2ebf2', '#80deea'],
                shapes: ['circle'],
                scalar: 1.4,
                gravity: 0.8,
                ticks: 350,
                startVelocity: 40,
                drift: -0.5,
            })

            if (Date.now() < end) requestAnimationFrame(frame)
        }

        frame()
        if (onComplete) setTimeout(onComplete, duration + 1000)
    }

    useEffect(() => {
        if (trigger) {
            const timer = setTimeout(fire, 500)
            return () => clearTimeout(timer)
        }
    }, [trigger])

    return null
}
