import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { BookOpen, Heart, Palette, Music, Trophy, Users, Star, Quote, Calendar, ArrowRight } from "lucide-react";
import event1 from "@/assets/event1.jpg";
import child1 from "@/assets/child1.jpg";
import p1 from "@/assets/parent1.jpg";
import p2 from "@/assets/parent2.jpg";
import p3 from "@/assets/parent3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ফুর্তির পাঠশালা — শিশুদের মানসিক বিকাশ ঘটাই" },
      { name: "description", content: "ফুর্তির পাঠশালা একটি আনন্দময় প্রি-স্কুল যেখানে শিশুরা খেলার ছলে শেখে এবং মানসিক বিকাশ ঘটায়।" },
    ],
  }),
  component: Home,
});

const features = [
  { icon: BookOpen, color: "brand-teal", title: "মজার পাঠ", desc: "গল্প, ছড়া আর ছবিতে শেখা প্রতিদিন।" },
  { icon: Palette, color: "brand-orange", title: "সৃজনশীলতা", desc: "আঁকাআঁকি, কারুকাজ ও রঙের জগৎ।" },
  { icon: Music, color: "brand-green", title: "গান ও নাচ", desc: "সংগীত আর ছন্দে আত্মপ্রকাশ।" },
  { icon: Heart, color: "brand-red", title: "ভালোবাসা", desc: "প্রতিটি শিশু আমাদের পরিবার।" },
];

function Home() {
  return (
    <Layout>
      <HeroSlider />

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">কেন ফুর্তির পাঠশালা?</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold"><span className="text-brand-gradient">আনন্দে শেখা</span>, ভালোবাসায় বেড়ে ওঠা</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-3xl bg-card border-2 border-transparent hover:border-[var(--color-brand-teal)] p-6 shadow-sm hover:shadow-xl transition">
              <div className={`h-14 w-14 rounded-2xl grid place-items-center text-white shadow-lg group-hover:rotate-6 transition`} style={{ backgroundColor: `var(--color-${f.color})` }}>
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parent + Child split */}
      <section className="container mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-teal to-brand-purple text-white p-8 md:p-12 relative">
          <div className="blob bg-white/20 h-60 w-60 -bottom-10 -right-10" />
          <Users className="h-12 w-12 mb-4" />
          <h3 className="text-3xl font-extrabold">অভিভাবক সেকশন</h3>
          <p className="mt-3 opacity-95">শিশুর অগ্রগতি, নিয়মিত আপডেট, পরামর্শ ও মিটিং সবই হাতের মুঠোয়।</p>
          <Link to="/parent" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-2.5 font-bold hover:scale-105 transition">
            অভিভাবক পেজ <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange to-brand-yellow text-white p-8 md:p-12 relative">
          <div className="blob bg-white/20 h-60 w-60 -top-10 -left-10" />
          <img src={child1} alt="" className="absolute right-0 bottom-0 h-56 w-56 object-cover rounded-tl-[3rem] hidden md:block" loading="lazy" />
          <Heart className="h-12 w-12 mb-4" />
          <h3 className="text-3xl font-extrabold">শিশু কর্নার</h3>
          <p className="mt-3 opacity-95 max-w-xs">গল্প, ছড়া, রঙিন কাজ — শিশুদের জন্য মজার দুনিয়া।</p>
          <Link to="/child" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-2.5 font-bold hover:scale-105 transition">
            শিশু পেজ <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Events */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-green">আগামী আয়োজন</p>
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">আমাদের <span className="text-brand-gradient">ইভেন্টস</span></h2>
            </div>
            <Link to="/events" className="text-sm font-bold text-brand-teal hover:underline">সব দেখুন →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { d: "১৫", m: "জুন", t: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান", c: "brand-red" },
              { d: "২২", m: "জুলাই", t: "চিত্রাঙ্কন প্রতিযোগিতা", c: "brand-teal" },
              { d: "১০", m: "আগস্ট", t: "অভিভাবক সমাবেশ", c: "brand-orange" },
            ].map((e, i) => (
              <div key={i} className="rounded-3xl bg-card overflow-hidden shadow hover:shadow-2xl transition group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={event1} alt={e.t} className="h-full w-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
                </div>
                <div className="p-6 flex gap-4">
                  <div className="text-white rounded-2xl w-16 h-16 grid place-items-center font-extrabold leading-tight" style={{ backgroundColor: `var(--color-${e.c})` }}>
                    <div className="text-center">
                      <div className="text-xl">{e.d}</div>
                      <div className="text-[10px] opacity-90">{e.m}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{e.t}</h3>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Calendar className="h-3 w-3" /> সকাল ১০টা — ফুর্তির পাঠশালা প্রাঙ্গণ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-purple">আমাদের গর্ব</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">দারুণ <span className="text-brand-gradient">ফলাফল</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: "৫০০+", l: "খুদে শিক্ষার্থী", c: "brand-teal" },
            { n: "৯৮%", l: "অভিভাবক সন্তুষ্টি", c: "brand-orange" },
            { n: "১৫+", l: "অভিজ্ঞ শিক্ষক", c: "brand-green" },
            { n: "১০+", l: "বছরের যাত্রা", c: "brand-red" },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl p-8 text-white text-center shadow-xl" style={{ backgroundColor: `var(--color-${s.c})` }}>
              <Trophy className="h-8 w-8 mx-auto opacity-80" />
              <div className="mt-3 text-5xl font-extrabold">{s.n}</div>
              <div className="mt-1 font-medium opacity-95">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-brand-teal/10 via-brand-yellow/10 to-brand-orange/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">অভিভাবকদের মতামত</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">তাঁরা কী <span className="text-brand-gradient">বলছেন</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "নাসরিন আক্তার", r: "অভিভাবক", t: "আমার মেয়ে স্কুলে যেতে এত ভালোবাসে! শিক্ষকেরা অসাধারণ।", img: p1 },
              { n: "আবুল হাসান", r: "অভিভাবক", t: "ফুর্তির পাঠশালা সত্যিই শিশুদের মানসিক বিকাশে অনন্য।", img: p2 },
              { n: "সাবিনা ইয়াসমিন", r: "অভিভাবক", t: "এত যত্ন আর ভালোবাসা পেয়ে আমার ছেলে দারুণ আত্মবিশ্বাসী।", img: p3 },
            ].map((t) => (
              <div key={t.n} className="rounded-3xl bg-card p-7 shadow hover:shadow-2xl transition relative">
                <Quote className="absolute top-5 right-5 h-10 w-10 text-brand-yellow/60" />
                <div className="flex gap-1 text-brand-orange">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.t}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.img} alt={t.n} className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-teal" loading="lazy" />
                  <div>
                    <div className="font-bold">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-[2.5rem] bg-brand-gradient text-white p-10 md:p-16 text-center relative overflow-hidden">
          <div className="blob bg-white/30 h-72 w-72 -top-20 -left-20" />
          <div className="blob bg-white/20 h-72 w-72 -bottom-20 -right-20" />
          <h2 className="relative text-3xl md:text-5xl font-extrabold drop-shadow">আপনার শিশুর জন্য সেরা শুরু</h2>
          <p className="relative mt-3 text-lg opacity-95 max-w-2xl mx-auto">আজই যোগাযোগ করুন এবং ফুর্তির পাঠশালার অংশ হয়ে উঠুন।</p>
          <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-8 py-3.5 font-extrabold hover:scale-105 transition shadow-2xl">
            যোগাযোগ করুন <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
