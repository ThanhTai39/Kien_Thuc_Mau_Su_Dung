export default function WavesBackground() {
    const waves = [
        { cls: 'wave-1', bg: 'rgba(0, 180, 216, 0.15)', h: '180px', dur: '7s', delay: '0s', bottom: '0' },
        { cls: 'wave-2', bg: 'rgba(0, 150, 199, 0.12)', h: '200px', dur: '9s', delay: '-2s', bottom: '20px' },
        { cls: 'wave-3', bg: 'rgba(72, 202, 228, 0.1)', h: '160px', dur: '11s', delay: '-4s', bottom: '40px' },
        { cls: 'wave-4', bg: 'rgba(144, 224, 239, 0.08)', h: '220px', dur: '13s', delay: '-1s', bottom: '-10px' },
    ];

    return (
        <>
            <style>{`
        .wave {
          animation: waveRise linear infinite;
          border-radius: 50% 50% 0 0;
        }
        @keyframes waveRise {
          0% { transform: translateX(0) scaleY(1); border-radius: 50% 50% 0 0; }
          25% { transform: translateX(-2%) scaleY(1.1); border-radius: 48% 52% 0 0; }
          50% { transform: translateX(1%) scaleY(0.9); border-radius: 52% 48% 0 0; }
          75% { transform: translateX(-1%) scaleY(1.05); border-radius: 46% 54% 0 0; }
          100% { transform: translateX(0) scaleY(1); border-radius: 50% 50% 0 0; }
        }
        .wave-bubble {
          animation: waveBubbleRise linear infinite;
        }
        @keyframes waveBubbleRise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
        }
        .wave-light {
          animation: waveLightPulse 5s ease-in-out infinite;
        }
        @keyframes waveLightPulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.8; transform: translateX(-50%) scale(1.3); }
        }
      `}</style>
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ background: 'linear-gradient(180deg, #0077b6 0%, #023e8a 30%, #03045e 70%, #010124 100%)' }}>
                <div className="wave-light absolute top-[15%] left-1/2 w-[300px] h-[300px] -translate-x-1/2" style={{ background: 'radial-gradient(circle, rgba(144, 224, 239, 0.15) 0%, transparent 70%)' }} />
                {Array.from({ length: 15 }, (_, i) => (
                    <div
                        key={`bubble-${i}`}
                        className="wave-bubble absolute rounded-full border border-white/20 bg-white/5"
                        style={{
                            width: `${4 + Math.random() * 12}px`,
                            height: `${4 + Math.random() * 12}px`,
                            left: `${Math.random() * 100}%`,
                            bottom: `${Math.random() * 30}%`,
                            animationDuration: `${6 + Math.random() * 8}s`,
                            animationDelay: `-${Math.random() * 10}s`,
                        }}
                    />
                ))}
                {[...waves].reverse().map((w) => (
                    <div
                        key={w.cls}
                        className="wave absolute -left-[5%] w-[110%]"
                        style={{
                            background: w.bg,
                            height: w.h,
                            bottom: w.bottom,
                            animationDuration: w.dur,
                            animationDelay: w.delay,
                        }}
                    />
                ))}
            </div>
        </>
    );
}
