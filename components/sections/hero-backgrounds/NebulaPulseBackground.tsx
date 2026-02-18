'use client'

/**
 * NEW 5: Nebula Pulse - Dramatic breathing glows with visible color shifts
 */
export function NebulaPulseBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Slightly tinted base — gives glows something to contrast against */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #EEEEF8 0%, #E8E8F2 40%, #E2E2EE 100%)',
        }}
      />

      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      <div className="nebula nebula-4" />
      <div className="nebula-overlay" />

      <div className="star-accent star-lg" style={{ top: '12%', left: '22%' }} />
      <div
        className="star-accent star-lg"
        style={{ top: '8%', right: '28%', animationDelay: '0.7s' }}
      />
      <div
        className="star-accent star-md"
        style={{ top: '28%', right: '15%', animationDelay: '1.3s' }}
      />
      <div
        className="star-accent star-md"
        style={{ top: '42%', left: '55%', animationDelay: '2s' }}
      />
      <div
        className="star-accent star-sm"
        style={{ top: '18%', left: '45%', animationDelay: '0.3s' }}
      />
      <div
        className="star-accent star-sm"
        style={{ top: '35%', left: '10%', animationDelay: '1.8s' }}
      />
      <div
        className="star-accent star-sm"
        style={{ bottom: '30%', right: '40%', animationDelay: '1s' }}
      />

      <style jsx>{`
        .nebula {
          position: absolute;
          border-radius: 50%;
          animation: nebula-breathe ease-in-out infinite;
        }
        .nebula-1 {
          width: 520px;
          height: 420px;
          top: -5%;
          right: -5%;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.35) 0%,
            rgba(99, 102, 241, 0.12) 40%,
            transparent 70%
          );
          filter: blur(50px);
          animation-duration: 6s;
        }
        .nebula-2 {
          width: 420px;
          height: 380px;
          top: 15%;
          left: -8%;
          background: radial-gradient(
            circle,
            rgba(2, 1, 105, 0.28) 0%,
            rgba(2, 1, 105, 0.1) 45%,
            transparent 70%
          );
          filter: blur(55px);
          animation-duration: 8s;
          animation-delay: -2s;
        }
        .nebula-3 {
          width: 380px;
          height: 300px;
          bottom: 5%;
          right: 10%;
          background: radial-gradient(
            circle,
            rgba(212, 133, 106, 0.3) 0%,
            rgba(212, 133, 106, 0.1) 45%,
            transparent 70%
          );
          filter: blur(45px);
          animation-duration: 7s;
          animation-delay: -4s;
        }
        .nebula-4 {
          width: 280px;
          height: 260px;
          top: 5%;
          left: 20%;
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.2) 0%,
            rgba(139, 92, 246, 0.07) 50%,
            transparent 70%
          );
          filter: blur(40px);
          animation-duration: 9s;
          animation-delay: -3s;
        }
        .nebula-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 90% 60% at 55% 35%,
            rgba(99, 102, 241, 0.06) 0%,
            transparent 60%
          );
          animation: overlay-pulse 10s ease-in-out infinite;
        }
        @keyframes nebula-breathe {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2) translate(8px, -8px);
            opacity: 1;
          }
        }
        @keyframes overlay-pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .star-accent {
          position: absolute;
          border-radius: 50%;
          animation: star-pulse ease-in-out infinite;
        }
        .star-lg {
          width: 5px;
          height: 5px;
          background: rgba(99, 102, 241, 0.7);
          box-shadow: 0 0 6px 2px rgba(99, 102, 241, 0.4);
          animation-duration: 2.5s;
        }
        .star-md {
          width: 3px;
          height: 3px;
          background: rgba(139, 92, 246, 0.6);
          box-shadow: 0 0 4px 1px rgba(139, 92, 246, 0.35);
          animation-duration: 3.2s;
        }
        .star-sm {
          width: 2px;
          height: 2px;
          background: rgba(2, 1, 105, 0.5);
          box-shadow: 0 0 3px 1px rgba(2, 1, 105, 0.25);
          animation-duration: 4s;
        }
        @keyframes star-pulse {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }
      `}</style>
    </div>
  )
}
