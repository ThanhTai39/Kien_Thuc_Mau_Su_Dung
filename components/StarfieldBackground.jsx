export default function StarfieldBackground() {
    const layers = [
        { count: 80, size: 1, duration: 20, opacity: 0.4 },
        { count: 50, size: 2, duration: 15, opacity: 0.6 },
        { count: 25, size: 3, duration: 10, opacity: 0.9 },
    ];

    return (
        <>
            <style>{`
        .star {
          animation: starZoom linear infinite;
        }
        .star::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          background: inherit;
          filter: blur(1px);
        }
        @keyframes starZoom {
          0% { transform: translateZ(-200px) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateZ(600px) scale(3); opacity: 0; }
        }
        .shooting-star {
          animation: shoot 6s ease-in infinite;
        }
        @keyframes shoot {
          0% { transform: translateX(0) translateY(0) rotate(-35deg); opacity: 0; }
          2% { opacity: 1; }
          5% { transform: translateX(300px) translateY(200px) rotate(-35deg); opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at center, #0d1b2a 0%, #010104 100%)', perspective: '600px' }}>
                {layers.map((layer, li) =>
                    Array.from({ length: layer.count }, (_, i) => (
                        <div
                            key={`${li}-${i}`}
                            className="star absolute rounded-full bg-white"
                            style={{
                                width: `${layer.size}px`,
                                height: `${layer.size}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: layer.opacity,
                                animationDuration: `${layer.duration + Math.random() * 5}s`,
                                animationDelay: `-${Math.random() * layer.duration}s`,
                            }}
                        />
                    ))
                )}
                {Array.from({ length: 3 }, (_, i) => (
                    <div
                        key={`shoot-${i}`}
                        className="shooting-star absolute w-[100px] h-px opacity-0"
                        style={{
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.8), transparent)',
                            left: `${10 + Math.random() * 60}%`,
                            top: `${5 + Math.random() * 40}%`,
                            animationDelay: `${i * 4 + Math.random() * 2}s`,
                            animationDuration: `${5 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}
