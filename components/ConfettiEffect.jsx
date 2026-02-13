'use client'

import { useEffect } from 'react'

export function ConfettiEffect({ trigger, onComplete }) {
    // Tải thư viện pháo hoa từ CDN
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    // Hiệu ứng "Water Burst" - 1 lần duy nhất, cực dày
    const triggerWaterBurst = () => {
        if (!window.confetti) return

        // Burst trung tâm mô phỏng luồng nước bùng nổ
        window.confetti({
            particleCount: 500,
            spread: 120,
            origin: { y: 0.6 },
            colors: ['#22c55e', '#16a34a', '#15803d', '#86efac', '#dcfce7'],
            shapes: ['circle'],
            scalar: 1.4,
            gravity: 0.8,
            ticks: 300,
            startVelocity: 40,
        })

        // Gọi callback khi hoàn thành (nếu có)
        if (onComplete) {
            setTimeout(onComplete, 3000)
        }
    }

    useEffect(() => {
        if (trigger) {
            // Đợi script load xong rồi bắn confetti
            const timer = setTimeout(() => {
                triggerWaterBurst()
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [trigger])

    // Component này không render gì cả, chỉ xử lý side effects
    return null
}
