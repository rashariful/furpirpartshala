import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Target, Eye, Heart, Award } from "lucide-react";
import hero from "@/assets/hero3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "আমাদের সম্পর্কে — ফুর্তির পাঠশালা" },
      { name: "description", content: "ফুর্তির পাঠশালা — শিশুদের মানসিক বিকাশের জন্য নিবেদিত একটি আনন্দময় প্রি-স্কুল।" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero title="আমাদের সম্পর্কে" subtitle="ফুর্তির পাঠশালা — শিশুদের মানসিক বিকাশের জন্য একটি ভালোবাসাময় ঠিকানা।" accent="teal" />
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <img src={hero} alt="ক্লাসরুম" className="rounded-3xl shadow-xl" loading="lazy" />
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">আমাদের <span className="text-brand-gradient">গল্প</span></h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ফুর্তির পাঠশালা প্রতিষ্ঠা করেছেন <strong>চারলি আক্তার</strong>। শিশুদের সঠিক মানসিক বিকাশ, সৃজনশীলতা ও আত্মবিশ্বাস গড়ে তোলাই আমাদের মূল লক্ষ্য। আমরা বিশ্বাস করি — শিশুরা যখন আনন্দে শেখে, তখন তারা সবচেয়ে ভালো শেখে।
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            আমাদের অভিজ্ঞ শিক্ষকেরা প্রতিটি শিশুর প্রতি আলাদা মনোযোগ দেন এবং তাদের সম্ভাবনাকে বিকশিত হতে সাহায্য করেন।
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { i: Target, t: "মিশন", d: "শিশুদের আনন্দময় ও সৃজনশীল শিক্ষা প্রদান।", c: "brand-teal" },
          { i: Eye, t: "ভিশন", d: "প্রতিটি শিশুকে আত্মবিশ্বাসী মানুষ হিসেবে গড়ে তোলা।", c: "brand-orange" },
          { i: Heart, t: "মূল্যবোধ", d: "ভালোবাসা, যত্ন, সততা ও সম্মান।", c: "brand-red" },
          { i: Award, t: "অর্জন", d: "৫০০+ পরিবারের আস্থা অর্জন।", c: "brand-green" },
        ].map((b) => (
          <div key={b.t} className="rounded-3xl p-7 text-white shadow-lg" style={{ backgroundColor: `var(--color-${b.c})` }}>
            <b.i className="h-10 w-10" />
            <h3 className="mt-4 text-xl font-bold">{b.t}</h3>
            <p className="mt-1 text-sm opacity-95">{b.d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
