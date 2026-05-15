import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import h1 from "@/assets/hero1.jpg";
import h2 from "@/assets/hero2.jpg";
import h3 from "@/assets/hero3.jpg";

const slides = [
  {
    img: h1,
    title: "ফুর্তির পাঠশালায় স্বাগতম",
    sub: "শিশুদের মানসিক বিকাশের জন্য সেরা প্রি-স্কুল",
    accent: "from-brand-teal/85 to-brand-purple/80",
  },
  {
    img: h2,
    title: "খেলার ছলে শেখা",
    sub: "আঁকা, গান, গল্প আর হাসিতে ভরা প্রতিটি ক্লাস",
    accent: "from-brand-orange/85 to-brand-red/80",
  },
  {
    img: h3,
    title: "ভালোবাসায় বেড়ে ওঠা",
    sub: "যত্ন, আদর আর নিরাপদ পরিবেশে শিশুর প্রথম পাঠশালা",
    accent: "from-brand-green/85 to-brand-teal/80",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.accent}`} />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-sm font-semibold">
                  <Sparkles className="h-4 w-4" /> প্রি-স্কুল ও কিন্ডারগার্টেন
                </span>
                <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
                  {s.title}
                </h1>
                <p className="mt-4 text-lg md:text-2xl opacity-95 drop-shadow">{s.sub}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="rounded-full bg-brand-yellow px-7 py-3 font-bold text-foreground shadow-lg hover:scale-105 transition">
                    ভর্তি শুরু করুন
                  </Link>
                  <Link to="/about" className="rounded-full bg-white/20 backdrop-blur border-2 border-white px-7 py-3 font-bold hover:bg-white hover:text-foreground transition">
                    আরও জানুন
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={() => go(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-white/30 backdrop-blur text-white hover:bg-white hover:text-foreground transition">
        <ChevronLeft />
      </button>
      <button onClick={() => go(1)} className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-white/30 backdrop-blur text-white hover:bg-white hover:text-foreground transition">
        <ChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-10 bg-white" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
