export default function FirefliesBackground() {
  const fireflies = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 3 + Math.random() * 5,
    driftX: -30 + Math.random() * 60,
    driftY: -30 + Math.random() * 60,
    duration: 4 + Math.random() * 6,
    delay: -Math.random() * 8,
    glowColor: ['#ffd700', '#ffeb3b', '#fff176', '#ffe082', '#a8ff78'][Math.floor(Math.random() * 5)],
  }));

  return (
    <>
      <style>{`
        .firefly {
          animation: fireflyGlow var(--ff-duration) ease-in-out infinite,
                     fireflyDrift var(--ff-duration) ease-in-out infinite;
        }
        @keyframes fireflyGlow {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          20% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
          80% { opacity: 1; transform: scale(1); }
        }
        @keyframes fireflyDrift {
          0% { translate: 0 0; }
          25% { translate: var(--ff-dx) calc(var(--ff-dy) * -1); }
          50% { translate: calc(var(--ff-dx) * -0.5) var(--ff-dy); }
          75% { translate: calc(var(--ff-dx) * 0.7) calc(var(--ff-dy) * -0.5); }
          100% { translate: 0 0; }
        }
      `}</style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, #0a1628 0%, #1a2a1a 40%, #0d1f0d 100%)' }}>
        {fireflies.map((f) => (
          <div
            key={f.id}
            className="firefly absolute rounded-full"
            style={{
              left: f.left,
              top: f.top,
              width: `${f.size}px`,
              height: `${f.size}px`,
              background: `radial-gradient(circle, ${f.glowColor} 0%, transparent 70%)`,
              boxShadow: `0 0 ${f.size * 3}px ${f.glowColor}, 0 0 ${f.size * 6}px ${f.glowColor}40`,
              '--ff-duration': `${f.duration}s`,
              '--ff-dx': `${f.driftX}px`,
              '--ff-dy': `${f.driftY}px`,
              animationDelay: `${f.delay}s`,
            }}
          />
        ))}
        <div className="absolute bottom-0 w-full h-1/4" style={{ background: 'linear-gradient(to top, #0a150a 0%, transparent 100%)' }} />
      </div>
    </>
  );
}
