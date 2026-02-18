'use client'

/**
 * NEW 4: Aurora Waves - Slow moving gradient bands
 */
export function AuroraWavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />
      <div className="aurora-wave aurora-1" />
      <div className="aurora-wave aurora-2" />
      <div className="aurora-wave aurora-3" />
      <style jsx>{`
        .aurora-wave {
          position: absolute;
          width: 200%;
          height: 40%;
          opacity: 0.06;
          animation: aurora-drift 15s ease-in-out infinite;
        }
        .aurora-1 {
          top: 5%;
          left: -50%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(99, 102, 241, 0.5) 25%,
            rgba(139, 92, 246, 0.5) 50%,
            rgba(99, 102, 241, 0.5) 75%,
            transparent 100%
          );
          animation-delay: 0s;
        }
        .aurora-2 {
          top: 20%;
          left: -30%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(6, 182, 212, 0.4) 30%,
            rgba(99, 102, 241, 0.4) 60%,
            transparent 100%
          );
          animation-delay: -5s;
          animation-duration: 18s;
        }
        .aurora-3 {
          top: 35%;
          left: -70%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(212, 133, 106, 0.3) 40%,
            rgba(139, 92, 246, 0.3) 70%,
            transparent 100%
          );
          animation-delay: -10s;
          animation-duration: 20s;
        }
        @keyframes aurora-drift {
          0%,
          100% {
            transform: translateX(0) skewX(-5deg);
          }
          50% {
            transform: translateX(25%) skewX(5deg);
          }
        }
      `}</style>
    </div>
  )
}
