export default function Hero() {
  return (
    <section
      className="relative h-screen overflow-hidden bg-ink text-paper px-6 md:px-12"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 60% 45%, #2A2A2E 0%, #1A1A1C 40%, #0A0A0A 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.4) 100%)",
        }}
        aria-hidden="true"
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.20] mix-blend-screen pointer-events-none"
        aria-hidden="true"
      >
        <filter id="hero-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      <div className="relative max-w-[1200px] mx-auto h-full flex flex-col justify-center pt-[10vh]">
        <h1 className="text-display tracking-display leading-tight font-semibold text-paper">
          <span className="block">Designer que resolve.</span>
          <span className="block">Resultados que confirmam.</span>
        </h1>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-none">
        <svg
          viewBox="0 0 24 36"
          className="w-6 h-9 text-paper opacity-60"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="34"
            rx="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="11"
            r="2.5"
            fill="currentColor"
            className="animate-scroll-hint"
          />
        </svg>
      </div>
    </section>
  );
}
