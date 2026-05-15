import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { CalendarCheck, MessageCircle, BookOpen, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/parent")({
  head: () => ({
    meta: [
      { title: "অভিভাবক সেকশন — ফুর্তির পাঠশালা" },
      { name: "description", content: "অভিভাবকদের জন্য তথ্য, পরামর্শ ও আপডেট।" },
    ],
  }),
  component: Parent,
});

function Parent() {
  return (
    <Layout>
      <PageHero title="অভিভাবক সেকশন" subtitle="শিশুর শিক্ষা যাত্রায় আপনিই প্রথম সঙ্গী। আমরা একসাথে এগিয়ে চলি।" accent="purple" />
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-6">
        {[
          { i: CalendarCheck, t: "নিয়মিত মিটিং", d: "প্রতি মাসে অভিভাবক-শিক্ষক মিটিং।", c: "brand-teal" },
          { i: MessageCircle, t: "তাৎক্ষণিক যোগাযোগ", d: "যে কোনো প্রশ্নে সরাসরি কথা বলুন।", c: "brand-orange" },
          { i: BookOpen, t: "অগ্রগতির রিপোর্ট", d: "প্রতি সপ্তাহে শিশুর অগ্রগতি জানুন।", c: "brand-green" },
          { i: ShieldCheck, t: "নিরাপদ পরিবেশ", d: "সিসিটিভি ও প্রশিক্ষিত স্টাফ।", c: "brand-red" },
        ].map((b) => (
          <div key={b.t} className="rounded-3xl bg-card p-7 shadow hover:shadow-xl transition flex gap-5 border-l-4" style={{ borderColor: `var(--color-${b.c})` }}>
            <div className="h-14 w-14 rounded-2xl grid place-items-center text-white shrink-0" style={{ backgroundColor: `var(--color-${b.c})` }}>
              <b.i className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{b.t}</h3>
              <p className="mt-1 text-muted-foreground">{b.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl bg-brand-gradient text-white p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">অভিভাবকদের জন্য পরামর্শ</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-3 text-white/95">
            {[
              "প্রতিদিন সন্তানের সঙ্গে অন্তত ৩০ মিনিট গল্প করুন।",
              "পড়াশোনার পাশাপাশি খেলাধুলায় উৎসাহ দিন।",
              "শিশুর কথা মন দিয়ে শুনুন, প্রশংসা করুন।",
              "ঘুম, খাদ্য ও স্ক্রিন টাইমে নিয়ম মানুন।",
            ].map((t) => (
              <li key={t} className="rounded-2xl bg-white/15 backdrop-blur px-5 py-3">• {t}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
