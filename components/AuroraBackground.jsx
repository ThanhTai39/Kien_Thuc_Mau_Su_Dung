export default function AuroraBackground() {
    return (
        <>
            <style>{`
        .aurora-blob {
          mix-blend-mode: screen;
          animation: auroraMove 8s ease-in-out infinite alternate;
        }
        @keyframes auroraMove {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -20px) scale(1.1) rotate(2deg); }
          66% { transform: translate(-20px, 15px) scale(0.95) rotate(-1deg); }
          100% { transform: translate(10px, -30px) scale(1.05) rotate(3deg); }
        }
        .aurora-star {
          animation: auroraTwinkle 3s ease-in-out infinite;
        }
        @keyframes auroraTwinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, #0a0a2e 0%, #1a1a3e 100%)' }}>
                <div className="absolute inset-0">
                    {Array.from({ length: 80 }, (_, i) => (
                        <div
                            key={i}
                            className="aurora-star absolute w-0.5 h-0.5 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `-${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 3}s`,
                            }}
                        />
                    ))}
                </div>
                <div className="aurora-blob absolute rounded-full blur-[80px] opacity-60 top-[10%] left-[10%] w-[600px] h-[300px]" style={{ background: 'linear-gradient(135deg, #00ff87, #60efff)', animationDuration: '7s' }} />
                <div className="aurora-blob absolute rounded-full blur-[80px] opacity-60 top-[20%] right-[10%] w-[500px] h-[350px]" style={{ background: 'linear-gradient(135deg, #ff00e5, #7b2ff7)', animationDuration: '9s', animationDelay: '-3s' }} />
                <div className="aurora-blob absolute rounded-full blur-[80px] opacity-60 top-[5%] left-[30%] w-[700px] h-[250px]" style={{ background: 'linear-gradient(135deg, #00d2ff, #3a7bd5)', animationDuration: '11s', animationDelay: '-5s' }} />
                <div className="aurora-blob absolute rounded-full blur-[80px] opacity-30 top-[30%] left-[50%] w-[400px] h-[400px]" style={{ background: 'linear-gradient(135deg, #f7971e, #ffd200)', animationDuration: '8s', animationDelay: '-2s' }} />
            </div>
        </>
    );
}
