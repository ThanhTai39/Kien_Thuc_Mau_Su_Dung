import { useState, useEffect } from 'react'
import Particles from '../components/Particles'
import MatrixBackground from '../components/MatrixBackground'
import AuroraBackground from '../components/AuroraBackground'
import StarfieldBackground from '../components/StarfieldBackground'
import FirefliesBackground from '../components/FirefliesBackground'
import WavesBackground from '../components/WavesBackground'
import { ConfettiEffect } from '../components/ConfettiEffect'
import FireworksEffect from '../components/FireworksEffect'
import StarBurstEffect from '../components/StarBurstEffect'

import SnowBurstEffect from '../components/SnowBurstEffect'
import CopyZoomCursor from '../components/CopyZoomCursor'

// Import raw file content for copy functionality
import ParticlesRaw from '../components/Particles.jsx?raw'
import MatrixBgRaw from '../components/MatrixBackground.jsx?raw'
import AuroraRaw from '../components/AuroraBackground.jsx?raw'
import StarfieldRaw from '../components/StarfieldBackground.jsx?raw'
import FirefliesRaw from '../components/FirefliesBackground.jsx?raw'
import WavesRaw from '../components/WavesBackground.jsx?raw'
import ConfettiRaw from '../components/ConfettiEffect.jsx?raw'
import FireworksRaw from '../components/FireworksEffect.jsx?raw'
import StarBurstRaw from '../components/StarBurstEffect.jsx?raw'

import SnowBurstRaw from '../components/SnowBurstEffect.jsx?raw'

const backgrounds = [
  { id: 'particles', label: '✨ Particles', component: Particles, bodyClass: '' },
  { id: 'matrix', label: '💚 Matrix Rain', component: MatrixBackground, bodyClass: 'matrix-bg' },
  { id: 'aurora', label: '🌌 Aurora', component: AuroraBackground, bodyClass: 'dark-bg' },
  { id: 'starfield', label: '🚀 Starfield', component: StarfieldBackground, bodyClass: 'dark-bg' },
  { id: 'fireflies', label: '🔥 Fireflies', component: FirefliesBackground, bodyClass: 'dark-bg' },
  { id: 'waves', label: '🌊 Waves', component: WavesBackground, bodyClass: 'dark-bg' },
]

const effects = [
  { id: 'confetti', label: '🎆 Confetti', component: ConfettiEffect, raw: ConfettiRaw },
  { id: 'fireworks', label: '🎇 Fireworks', component: FireworksEffect, raw: FireworksRaw },
  { id: 'starburst', label: '⭐ Star Burst', component: StarBurstEffect, raw: StarBurstRaw },

  { id: 'snow', label: '❄️ Snow Burst', component: SnowBurstEffect, raw: SnowBurstRaw },
]

const bgRawFiles = {
  particles: ParticlesRaw,
  matrix: MatrixBgRaw,
  aurora: AuroraRaw,
  starfield: StarfieldRaw,
  fireflies: FirefliesRaw,
  waves: WavesRaw,
}

function App() {
  const [bgIndex, setBgIndex] = useState(0)
  const [fxIndex, setFxIndex] = useState(0)
  const [fxTrigger, setFxTrigger] = useState(false)
  const [copiedId, setCopiedId] = useState(null)

  const currentBg = backgrounds[bgIndex]
  const currentFx = effects[fxIndex]
  const ActiveBackground = currentBg.component
  const ActiveEffect = currentFx.component

  useEffect(() => {
    document.body.classList.remove('matrix-bg', 'dark-bg')
    if (currentBg.bodyClass) {
      document.body.classList.add(currentBg.bodyClass)
    }
  }, [bgIndex])

  const nextBg = () => setBgIndex((i) => (i + 1) % backgrounds.length)

  const triggerEffect = () => {
    setFxTrigger(false)
    setTimeout(() => setFxTrigger(true), 50)
  }

  const nextEffect = () => {
    setFxIndex((i) => (i + 1) % effects.length)
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
        /* Dark backgrounds */
        body.matrix-bg {
          background: linear-gradient(135deg, #0a0a0a 0%, #0d1117 50%, #010409 100%);
          transition: background 0.5s ease;
        }
        body.dark-bg {
          background: #000;
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

        /* Dark mode button styles */
        body.matrix-bg .toggle-bg-btn,
        body.dark-bg .toggle-bg-btn {
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(0, 0, 0, 0.4);
          color: rgba(255, 255, 255, 0.85);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.08);
        }
        body.matrix-bg .toggle-bg-btn:hover,
        body.dark-bg .toggle-bg-btn:hover {
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 6px 25px rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        /* Effect button group */
        .fx-group {
          position: fixed;
          right: 1.2rem;
          top: 4.2rem;
          z-index: 100;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          gap: 0.5rem;
        }
        .fx-trigger-btn {
          border-color: rgba(245, 158, 11, 0.5) !important;
          color: #b45309 !important;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.15) !important;
        }
        .fx-trigger-btn:hover {
          border-color: #f59e0b !important;
          color: #d97706 !important;
          box-shadow: 0 6px 25px rgba(245, 158, 11, 0.3) !important;
        }
        body.matrix-bg .fx-trigger-btn,
        body.dark-bg .fx-trigger-btn {
          border-color: rgba(255, 215, 0, 0.5) !important;
          color: #ffd700 !important;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.15) !important;
        }
        body.matrix-bg .fx-trigger-btn:hover,
        body.dark-bg .fx-trigger-btn:hover {
          border-color: #ffd700 !important;
          box-shadow: 0 6px 25px rgba(255, 215, 0, 0.3) !important;
        }

        /* Switch effect small button */
        .fx-switch-btn {
          padding: 0.4rem 0.8rem !important;
          font-size: 0.7rem !important;
          border-color: rgba(168, 85, 247, 0.5) !important;
          color: #7c3aed !important;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.15) !important;
        }
        .fx-switch-btn:hover {
          border-color: #a855f7 !important;
          color: #6d28d9 !important;
          box-shadow: 0 6px 25px rgba(168, 85, 247, 0.3) !important;
        }
        body.matrix-bg .fx-switch-btn,
        body.dark-bg .fx-switch-btn {
          border-color: rgba(192, 132, 252, 0.5) !important;
          color: #c084fc !important;
          box-shadow: 0 4px 15px rgba(192, 132, 252, 0.15) !important;
        }
        body.matrix-bg .fx-switch-btn:hover,
        body.dark-bg .fx-switch-btn:hover {
          border-color: #c084fc !important;
          box-shadow: 0 6px 25px rgba(192, 132, 252, 0.3) !important;
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
        .btn-wrapper:hover .copy-tooltip,
        .fx-group:hover .copy-tooltip {
          display: block;
        }
        body.matrix-bg .copy-tooltip,
        body.dark-bg .copy-tooltip {
          background: rgba(0, 0, 0, 0.7);
          border-color: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.85);
        }
        body.matrix-bg .copy-tooltip:hover,
        body.dark-bg .copy-tooltip:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* Info labels */
        .info-label {
          position: fixed;
          bottom: 1.2rem;
          z-index: 100;
          padding: 0.4rem 1rem;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(100, 100, 100, 0.7);
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        body.matrix-bg .info-label,
        body.dark-bg .info-label {
          color: rgba(255, 255, 255, 0.4);
        }
      `}</style>

      <ActiveBackground />
      <ActiveEffect
        trigger={fxTrigger}
        onComplete={() => setFxTrigger(false)}
      />

      {/* Nút Thay đổi nền */}
      <div className="btn-wrapper" style={{ top: '1.2rem' }}>
        <button className="toggle-bg-btn" onClick={nextBg}>
          {copiedId === 'bg' ? '✅ Đã copy!' : '🎨 Thay đổi nền'}
        </button>
        <button
          className="copy-tooltip"
          onClick={() => handleCopyFile('bg', bgRawFiles[currentBg.id])}
        >
          📋 Copy file này
        </button>
      </div>

      {/* Nút Hiệu ứng */}
      <div className="fx-group">
        <button className="toggle-bg-btn fx-trigger-btn" onClick={triggerEffect}>
          {copiedId === 'fx' ? '✅ Đã copy!' : currentFx.label}
        </button>
        <button className="toggle-bg-btn fx-switch-btn" onClick={nextEffect}>
          🔄 Đổi
        </button>
        <button
          className="copy-tooltip"
          onClick={() => handleCopyFile('fx', currentFx.raw)}
        >
          📋 Copy file này
        </button>
      </div>

      <CopyZoomCursor />

      {/* Labels */}
      <div className="info-label" style={{ right: '1.2rem' }}>
        {currentBg.label}
      </div>
      <div className="info-label" style={{ right: '1.2rem', bottom: '3rem' }}>
        {currentFx.label}
      </div>
    </>
  )
}

export default App
