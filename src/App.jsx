import { useState, useEffect } from 'react'
import Particles from '../components/Particles'
import MatrixBackground from '../components/MatrixBackground'
import { ConfettiEffect } from '../components/ConfettiEffect'
import CopyZoomCursor from '../components/CopyZoomCursor'

// Import raw file content for copy functionality
import ParticlesRaw from '../components/Particles.jsx?raw'
import MatrixBgRaw from '../components/MatrixBackground.jsx?raw'
import ConfettiRaw from '../components/ConfettiEffect.jsx?raw'
import CopyZoomRaw from '../components/CopyZoomCursor.jsx?raw'

function App() {
  const [isMatrix, setIsMatrix] = useState(false)
  const [confettiTrigger, setConfettiTrigger] = useState(false)
  const [copiedId, setCopiedId] = useState(null)

  useEffect(() => {
    if (isMatrix) {
      document.body.classList.add('matrix-bg')
    } else {
      document.body.classList.remove('matrix-bg')
    }
  }, [isMatrix])

  const handleConfetti = () => {
    setConfettiTrigger(false)
    setTimeout(() => setConfettiTrigger(true), 50)
  }

  const handleCopyFile = (id, content) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    })
  }

  return (
    <>
      <style>{`
        /* Matrix dark background */
        body.matrix-bg {
          background: linear-gradient(135deg, #0a0a0a 0%, #0d1117 50%, #010409 100%);
          transition: background 0.5s ease;
        }

        /* Button wrapper */
        .btn-wrapper {
          position: fixed;
          right: 1.2rem;
          z-index: 100;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          gap: 0.5rem;
        }
        .btn-wrapper-bg { top: 1.2rem; }
        .btn-wrapper-confetti { top: 4.2rem; }

        /* Toggle buttons */
        .toggle-bg-btn {
          padding: 0.6rem 1.4rem;
          border: 2px solid rgba(120, 100, 220, 0.5);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          color: #4a3f8a;
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(120, 100, 220, 0.15);
          white-space: nowrap;
        }
        .toggle-bg-btn:hover {
          transform: translateY(-2px);
          border-color: #f093fb;
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 6px 25px rgba(240, 147, 251, 0.25);
          color: #7c3aed;
        }
        body.matrix-bg .toggle-bg-btn {
          border-color: rgba(0, 255, 0, 0.5);
          background: rgba(0, 0, 0, 0.4);
          color: #00ff00;
          box-shadow: 0 4px 15px rgba(0, 255, 0, 0.15);
        }
        body.matrix-bg .toggle-bg-btn:hover {
          border-color: #00ff00;
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 6px 25px rgba(0, 255, 0, 0.3);
        }

        /* Confetti button color */
        .confetti-btn {
          border-color: rgba(245, 158, 11, 0.5) !important;
          color: #b45309 !important;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.15) !important;
        }
        .confetti-btn:hover {
          border-color: #f59e0b !important;
          color: #d97706 !important;
          box-shadow: 0 6px 25px rgba(245, 158, 11, 0.3) !important;
        }
        body.matrix-bg .confetti-btn {
          border-color: rgba(255, 215, 0, 0.5) !important;
          color: #ffd700 !important;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.15) !important;
        }
        body.matrix-bg .confetti-btn:hover {
          border-color: #ffd700 !important;
          box-shadow: 0 6px 25px rgba(255, 215, 0, 0.3) !important;
        }

        /* Copy tooltip - appears to the left */
        .copy-tooltip {
          display: none;
          padding: 0.35rem 1rem;
          border: 1px solid rgba(120, 100, 220, 0.3);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          color: #4a3f8a;
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .copy-tooltip:hover {
          background: rgba(240, 147, 251, 0.2);
          border-color: #f093fb;
          color: #7c3aed;
        }
        .btn-wrapper:hover .copy-tooltip {
          display: block;
        }
        body.matrix-bg .copy-tooltip {
          background: rgba(0, 0, 0, 0.7);
          border-color: rgba(0, 255, 0, 0.3);
          color: #00ff00;
        }
        body.matrix-bg .copy-tooltip:hover {
          background: rgba(0, 255, 0, 0.15);
          border-color: #00ff00;
        }
      `}</style>

      {isMatrix ? <MatrixBackground /> : <Particles />}
      <ConfettiEffect
        trigger={confettiTrigger}
        onComplete={() => setConfettiTrigger(false)}
      />

      {/* Nút Thay đổi nền */}
      <div className="btn-wrapper btn-wrapper-bg">
        <button
          className="toggle-bg-btn"
          onClick={() => setIsMatrix(!isMatrix)}
        >
          {copiedId === 'bg' ? '✅ Đã copy!' : '🎨 Thay đổi nền'}
        </button>
        <button
          className="copy-tooltip"
          onClick={() => handleCopyFile('bg', isMatrix ? MatrixBgRaw : ParticlesRaw)}
        >
          📋 Copy file này
        </button>
      </div>

      {/* Nút Hiệu ứng pháo hoa */}
      <div className="btn-wrapper btn-wrapper-confetti">
        <button
          className="toggle-bg-btn confetti-btn"
          onClick={handleConfetti}
        >
          {copiedId === 'confetti' ? '✅ Đã copy!' : '🎆 Hiệu ứng pháo hoa'}
        </button>
        <button
          className="copy-tooltip"
          onClick={() => handleCopyFile('confetti', ConfettiRaw)}
        >
          📋 Copy file này
        </button>
      </div>

      <CopyZoomCursor />
    </>
  )
}

export default App
