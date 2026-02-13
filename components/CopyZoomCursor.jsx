import { useState } from 'react'

export default function CopyZoomCursor() {
    const [copied, setCopied] = useState(false)
    const textToCopy = 'hover:scale-105 duration-300 cursor-pointer'

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <>
            <style>{`
        .copy-zoom-btn {
          border-color: rgba(34, 197, 94, 0.5) !important;
          color: #166534 !important;
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.15) !important;
        }
        .copy-zoom-btn:hover {
          border-color: #22c55e !important;
          color: #15803d !important;
          box-shadow: 0 6px 25px rgba(34, 197, 94, 0.3) !important;
        }
        body.matrix-bg .copy-zoom-btn,
        body.dark-bg .copy-zoom-btn {
          border-color: rgba(0, 255, 170, 0.5) !important;
          color: #00ffaa !important;
          box-shadow: 0 4px 15px rgba(0, 255, 170, 0.15) !important;
        }
        body.matrix-bg .copy-zoom-btn:hover,
        body.dark-bg .copy-zoom-btn:hover {
          border-color: #00ffaa !important;
          box-shadow: 0 6px 25px rgba(0, 255, 170, 0.3) !important;
        }
      `}</style>
            <button
                className="toggle-bg-btn copy-zoom-btn fixed right-[1.2rem] top-[7.2rem] z-100"
                onClick={handleCopy}
            >
                {copied ? '✅ Đã copy!' : '🔍 Zoom + Cursor'}
            </button>
        </>
    )
}
