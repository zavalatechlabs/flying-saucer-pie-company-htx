import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg overflow-hidden relative">
      {/* Atmospheric atomic-pattern texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] text-accent"
        style={{
          backgroundImage: `url('/brand/atomic-pattern.svg')`,
          backgroundSize: '140px 140px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative text-center">
        {/* Saucer with float + glow */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Soft glow underneath */}
          <div
            aria-hidden="true"
            className="absolute inset-x-2 bottom-0 h-3 rounded-full bg-accent/40 blur-md animate-pulse"
          />
          {/* The actual brand saucer, floating */}
          <div className="relative animate-float">
            <Image
              src="/brand/saucer.svg"
              alt=""
              width={96}
              height={96}
              priority
              className="w-24 h-24"
            />
          </div>
        </div>

        <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.32em] text-ink-muted">
          Mixing the dough
          <span className="ml-1 inline-block animate-pulse">…</span>
        </p>
      </div>
    </div>
  )
}
