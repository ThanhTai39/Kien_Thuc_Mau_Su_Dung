'use client'

import { useEffect } from 'react'

export default function StarBurstEffect({ trigger, onComplete }) {
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

        // Bắn sao vàng rực rỡ từ trung tâm
        const defaults = {
            spread: 360,
            ticks: 200,
            gravity: 0.5,
            decay: 0.94,
            startVelocity: 25,
            shapes: ['star'],
            colors: ['#FFD700', '#FFA500', '#FF6347', '#FFE4B5', '#FFFACD'],
        }

        // 3 đợt bắn liên tiếp
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                window.confetti({
                    ...defaults,
                    particleCount: 60,
                    scalar: 1.2,
                    origin: { x: 0.3 + Math.random() * 0.4, y: 0.4 + Math.random() * 0.2 },
                })
                window.confetti({
                    ...defaults,
                    particleCount: 30,
                    scalar: 0.7,
                    origin: { x: 0.3 + Math.random() * 0.4, y: 0.4 + Math.random() * 0.2 },
                })
            }, i * 500)
        }

        if (onComplete) setTimeout(onComplete, 3500)
    }

    useEffect(() => {
        if (trigger) {
            const timer = setTimeout(fire, 500)
            return () => clearTimeout(timer)
        }
    }, [trigger])

    return null
}
