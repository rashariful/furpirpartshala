import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Palette, Music, BookOpen, Gamepad2, Sparkles, Smile } from "lucide-react";

export const Route = createFileRoute("/child")({
  head: () => ({
    meta: [
      { title: "শিশু কর্নার — ফুর্তির পাঠশালা" },
      { name: "description", content: "শিশুদের জন্য মজার কার্যক্রম, গল্প, ছড়া ও সৃজনশীল কাজ।" },
    ],
  }),
  component: Child,
});

function Child() {
  const cards = [
    { i: Palette, t: "আঁকাআঁকি", d: "রঙিন কল্পনার জগৎ", c: "brand-orange" },
    { i: Music, t: "গান ও ছড়া", d: "সুরে সুরে শেখা", c: "brand-green" },
    { i: BookOpen, t: "গল্পের সময়", d: "মজার মজার গল্প", c: "brand-teal" },
    { i: Gamepad2, t: "শিক্ষামূলক খেলা", d: "খেলে খেলে শিখি", c: "brand-red" },
    { i: Sparkles, t: "কারুকাজ", d: "হাতের কাজে দক্ষতা", c: "brand-purple" },
    { i: Smile, t: "নাচ ও অভিনয়", d: "আত্মপ্রকাশের আনন্দ", c: "brand-yellow" },
  ];
  return (
    <Layout>
      <PageHero title="শিশু কর্নার 🎨" subtitle="আঁকা, গান, গল্প আর খেলার রঙিন দুনিয়া!" accent="orange" />
      <section className="container mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.t} className="group rounded-[2rem] p-8 text-white shadow-lg hover:shadow-2xl transition hover:-translate-y-1" style={{ backgroundColor: `var(--color-${c.c})` }}>
            <div className="h-16 w-16 rounded-2xl bg-white/25 grid place-items-center group-hover:rotate-12 transition">
              <c.i className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold">{c.t}</h3>
            <p className="mt-1 opacity-95">{c.d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
