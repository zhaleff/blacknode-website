import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
];

const phrases = ["BlackNode", "Simple", "Minimal", "No noise", "Raw", "Linux"];

const VISIBLE = 3;
const INTERVAL = 3200;
const slides = [...images, ...images.slice(0, VISIBLE)];

export default function Hero() {
  const [pos, setPos] = useState(0);
  const [tick, setTick] = useState(0);
  const [snap, setSnap] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setPos((p) => p + 1);
      setTick((t) => t + 1);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const handleEnd = () => {
    if (pos === images.length) {
      setSnap(true);
      setPos(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setSnap(false)));
    }
  };

  const current = tick % images.length;

  return (
    <main className="h-dvh bg-surface text-on-surface flex flex-col gap-2 p-2 overflow-hidden">
      <section className="relative flex-1 min-h-0 border-2 border-outline overflow-hidden">
        <div
          onTransitionEnd={handleEnd}
          className={`flex h-full ${
            snap ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          }`}
          style={{
            width: `${(slides.length / VISIBLE) * 100}%`,
            transform: `translateX(-${(pos * 100) / slides.length}%)`,
          }}
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className="relative h-full flex-none border-r-2 border-outline last:border-r-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover "
              />
              <span className="absolute top-0 left-0 bg-primary text-on-primary font-code text-xs px-2 py-1">
                {String((i % images.length) + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-surface-container-high">
          <div
            key={tick}
            className="h-full origin-left bg-primary animate-fill"
          />
        </div>
      </section>

      <div className="overflow-hidden">
        <h1
          key={tick}
          className="font-headings font-bold text-primary uppercase tracking-tighter text-center leading-[0.8] text-[17vw] lg:text-10xl whitespace-nowrap animate-rise"
        >
          {phrases[current]}
        </h1>
      </div>
    </main>
  );
}