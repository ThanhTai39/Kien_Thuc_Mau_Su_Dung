import { useState, useEffect } from 'react'
import Particles from '../components/Particles'
import MatrixBackground from '../components/MatrixBackground'
import { ConfettiEffect } from '../components/ConfettiEffect'
import CopyZoomCursor from '../components/CopyZoomCursor'

function App() {
  const [isMatrix, setIsMatrix] = useState(false)
  const [confettiTrigger, setConfettiTrigger] = useState(false)

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

  return (
    <>
      <style>{`
        /* Matrix dark background */
        body.matrix-bg {
          background: linear-gradient(135deg, #0a0a0a 0%, #0d1117 50%, #010409 100%);
          transition: background 0.5s ease;
        }

        /* Toggle buttons */
        .toggle-bg-btn {
          position: fixed;
          top: 1.2rem;
          right: 1.2rem;
          z-index: 100;
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

        /* Confetti button */
        .confetti-btn {
          top: 4.2rem !important;
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
      `}</style>

      {isMatrix ? <MatrixBackground /> : <Particles />}
      <ConfettiEffect
        trigger={confettiTrigger}
        onComplete={() => setConfettiTrigger(false)}
      />

      <button
        className="toggle-bg-btn"
        onClick={() => setIsMatrix(!isMatrix)}
      >
        🎨 Thay đổi nền
      </button>

      <button
        className="toggle-bg-btn confetti-btn"
        onClick={handleConfetti}
      >
        🎆 Hiệu ứng pháo hoa
      </button>

      <CopyZoomCursor />
    </>
  )
}

export default App
