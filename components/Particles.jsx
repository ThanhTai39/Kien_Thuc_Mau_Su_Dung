
export default function Particles() {
  const particles = Array.from({ length: 50 }, (_, i) => {
    const duration = 10 + Math.random() * 10;
    return {
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `-${Math.random() * duration}s`,
      animationDuration: `${duration}s`,
    };
  });

  return (
    <>
      <style>{`
        .particle {
          animation: particleFloat 15s infinite;
          background: rgba(120, 100, 220, 0.35);
          box-shadow: 0 0 6px rgba(120, 100, 220, 0.2);
        }
        .particle:nth-child(3n) {
          background: rgba(240, 147, 251, 0.3);
          box-shadow: 0 0 6px rgba(240, 147, 251, 0.2);
        }
        .particle:nth-child(5n) {
          background: rgba(102, 126, 234, 0.3);
          box-shadow: 0 0 6px rgba(102, 126, 234, 0.2);
        }
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: p.left,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>
    </>
  );
}
