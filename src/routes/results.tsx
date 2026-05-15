import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Trophy, Medal, Star } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "ফলাফল — ফুর্তির পাঠশালা" },
      { name: "description", content: "শিক্ষার্থীদের ফলাফল ও অর্জন।" },
    ],
  }),
  component: Results,
});

const top = [
  { n: "তাহিয়া রহমান", cls: "Play Group", g: "A+", c: "brand-orange" },
  { n: "আরহান চৌধুরী", cls: "Nursery", g: "A+", c: "brand-teal" },
  { n: "মাইশা ইসলাম", cls: "KG-1", g: "A+", c: "brand-green" },
  { n: "রাইয়ান হাসান", cls: "KG-2", g: "A+", c: "brand-red" },
  { n: "নুসরাত জাহান", cls: "Nursery", g: "A", c: "brand-purple" },
  { n: "আদিব আহমেদ", cls: "KG-1", g: "A", c: "brand-yellow" },
];

function Results() {
  return (
    <Layout>
      <PageHero title="ফলাফল ও অর্জন" subtitle="আমাদের খুদে শিক্ষার্থীদের গর্বের ফলাফল।" accent="green" />

      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { i: Trophy, n: "৯৮%", l: "পাশের হার", c: "brand-orange" },
            { i: Medal, n: "৪৫+", l: "পুরস্কার বিজয়ী", c: "brand-teal" },
            { i: Star, n: "৫০০+", l: "সফল শিক্ষার্থী", c: "brand-green" },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl p-8 text-white text-center shadow-xl" style={{ backgroundColor: `var(--color-${s.c})` }}>
              <s.i className="h-10 w-10 mx-auto" />
              <div className="mt-3 text-4xl font-extrabold">{s.n}</div>
              <div className="opacity-95">{s.l}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-extrabold mb-6">সেরা শিক্ষার্থী — সাম্প্রতিক ফলাফল</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {top.map((s, i) => (
            <div key={i} className="rounded-2xl bg-card p-6 shadow hover:shadow-xl transition border-t-4" style={{ borderColor: `var(--color-${s.c})` }}>
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl grid place-items-center text-white font-extrabold" style={{ backgroundColor: `var(--color-${s.c})` }}>
                  {s.g}
                </div>
                <Trophy className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.n}</h3>
              <p className="text-sm text-muted-foreground">{s.cls}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
