'use client'

// Fixed star positions for the rotating sky — no JS randomness causing rain effect
const SKY_STARS = [
  { top: '5%', left: '8%', delay: 0, dur: 3.0 },
  { top: '10%', left: '25%', delay: 1.5, dur: 2.5 },
  { top: '2%', left: '45%', delay: 0.8, dur: 3.5 },
  { top: '14%', left: '62%', delay: 2.2, dur: 2.8 },
  { top: '6%', left: '80%', delay: 0.3, dur: 3.2 },
  { top: '20%', left: '12%', delay: 3.0, dur: 2.2 },
  { top: '22%', left: '50%', delay: 1.2, dur: 4.0 },
  { top: '1%', left: '37%', delay: 2.8, dur: 3.0 },
  { top: '17%', left: '88%', delay: 0.6, dur: 2.6 },
  { top: '28%', left: '70%', delay: 1.8, dur: 2.8 },
  { top: '8%', left: '57%', delay: 3.7, dur: 3.3 },
  { top: '30%', left: '33%', delay: 0.9, dur: 3.6 },
]

/**
 * NEW 1: Shooting Stars — codemyui rotating sky approach
 * A slowly rotating container holds stars that shoot horizontally.
 * The sky rotation is what makes them appear diagonal — pure CSS, no JS angle math.
 */
export function ShootingStarsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Light soft-UI base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F2F2F6 0%, #EAEAF0 40%, #E4E4EC 100%)',
        }}
      />

      {/* Faint ambient indigo hint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 65% 10%, rgba(2,1,105,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Rotating sky container — stars inside shoot horizontally,
          the rotation creates the diagonal falling star appearance */}
      <div className="star-sky">
        {SKY_STARS.map((s, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        /* Oversized container so corners don't clip when rotating */
        .star-sky {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          animation: sky-rotate 120s linear infinite;
        }

        /* Each star: a line that grows, shoots, then fades */
        .star {
          position: absolute;
          height: 2px;
          width: 0;
          border-radius: 999px;
          background: linear-gradient(to left, rgba(2, 1, 105, 0.8), transparent);
          animation:
            shooting var(--dur, 3s) ease-in-out infinite,
            shining var(--dur, 3s) ease-in-out infinite;
        }

        /* Bright head dot */
        .star::before {
          content: '';
          position: absolute;
          right: -1px;
          top: -3px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(2, 1, 105, 0.75);
          box-shadow:
            0 0 4px 1px rgba(2, 1, 105, 0.4),
            0 0 8px 2px rgba(99, 102, 241, 0.2);
        }

        @keyframes sky-rotate {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(405deg);
          }
        }

        @keyframes shooting {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(300px);
          }
        }

        @keyframes shining {
          0% {
            width: 0;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          50% {
            width: 30px;
          }
          80% {
            opacity: 1;
          }
          100% {
            width: 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
