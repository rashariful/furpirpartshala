import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Calendar, MapPin } from "lucide-react";
import event1 from "@/assets/event1.jpg";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "ইভেন্টস — ফুর্তির পাঠশালা" },
      { name: "description", content: "ফুর্তির পাঠশালার সকল ইভেন্ট ও আয়োজন।" },
    ],
  }),
  component: Events,
});

const items = [
  { img: event1, d: "১৫", m: "জুন", t: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান", desc: "শিশুদের নাচ, গান ও অভিনয়ের মনোমুগ্ধকর পরিবেশনা।", c: "brand-red" },
  { img: hero2, d: "২২", m: "জুলাই", t: "চিত্রাঙ্কন প্রতিযোগিতা", desc: "রঙিন কল্পনায় ক্যানভাস ভরিয়ে তোলার দিন।", c: "brand-teal" },
  { img: hero1, d: "১০", m: "আগস্ট", t: "অভিভাবক সমাবেশ", desc: "শিশুর অগ্রগতি নিয়ে খোলামেলা আলোচনা।", c: "brand-orange" },
  { img: event1, d: "০৫", m: "সেপ্টেম্বর", t: "বিজ্ঞান মেলা", desc: "ছোট্ট বিজ্ঞানীদের অসাধারণ আবিষ্কার।", c: "brand-green" },
];

function Events() {
  return (
    <Layout>
      <PageHero title="ইভেন্টস ও আয়োজন" subtitle="প্রতিটি অনুষ্ঠান এক একটি স্মৃতি — শিশুদের জন্য, পরিবারের জন্য।" accent="red" />
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        {items.map((e, i) => (
          <article key={i} className="rounded-3xl bg-card overflow-hidden shadow hover:shadow-2xl transition group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img src={e.img} alt={e.t} className="h-full w-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
              <div className="absolute top-4 left-4 text-white rounded-2xl px-4 py-2 font-extrabold shadow-lg" style={{ backgroundColor: `var(--color-${e.c})` }}>
                {e.d} {e.m}
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-bold">{e.t}</h3>
              <p className="mt-2 text-muted-foreground">{e.desc}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-brand-teal" /> সকাল ১০:০০</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand-orange" /> পাঠশালা প্রাঙ্গণ</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
