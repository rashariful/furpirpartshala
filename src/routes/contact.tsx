import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Phone, Mail, MapPin, User, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "যোগাযোগ — ফুর্তির পাঠশালা" },
      { name: "description", content: "ফুর্তির পাঠশালার সঙ্গে যোগাযোগ করুন। চারলি আক্তার — 01744-696943।" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <Toaster />
      <PageHero title="যোগাযোগ করুন" subtitle="যেকোনো জিজ্ঞাসায় আমরা আছি — ফোন, মেইল কিংবা ফর্মে।" accent="teal" />
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {[
            { i: User, t: "প্রতিষ্ঠাতা", v: "চারলি আক্তার", c: "brand-purple" },
            { i: Phone, t: "ফোন", v: "01744-696943", href: "tel:01744696943", c: "brand-green" },
            { i: Mail, t: "ইমেইল", v: "charlyakhter@gmail.com", href: "mailto:charlyakhter@gmail.com", c: "brand-orange" },
            { i: MapPin, t: "ঠিকানা", v: "ফুর্তির পাঠশালা, বাংলাদেশ", c: "brand-red" },
          ].map((c) => (
            <a key={c.t} href={c.href || "#"} className="flex gap-4 rounded-2xl bg-card p-5 shadow hover:shadow-xl transition border-l-4" style={{ borderColor: `var(--color-${c.c})` }}>
              <div className="h-14 w-14 rounded-2xl grid place-items-center text-white shrink-0" style={{ backgroundColor: `var(--color-${c.c})` }}>
                <c.i className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{c.t}</div>
                <div className="text-lg font-bold">{c.v}</div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("ধন্যবাদ! আমরা শীঘ্রই যোগাযোগ করব।");
            (e.target as HTMLFormElement).reset();
          }}
          className="rounded-3xl bg-card p-8 shadow-xl border"
        >
          <h2 className="text-2xl font-extrabold">বার্তা পাঠান</h2>
          <p className="text-sm text-muted-foreground mt-1">আপনার তথ্য দিন, আমরা যোগাযোগ করব।</p>
          <div className="mt-6 grid gap-4">
            <input required placeholder="আপনার নাম" className="h-12 rounded-xl border bg-background px-4 outline-none focus:ring-2 focus:ring-brand-teal" />
            <input required type="tel" placeholder="মোবাইল নম্বর" className="h-12 rounded-xl border bg-background px-4 outline-none focus:ring-2 focus:ring-brand-teal" />
            <input type="email" placeholder="ইমেইল (ঐচ্ছিক)" className="h-12 rounded-xl border bg-background px-4 outline-none focus:ring-2 focus:ring-brand-teal" />
            <textarea required rows={4} placeholder="আপনার বার্তা" className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-brand-teal" />
            <button className="h-12 rounded-xl bg-brand-gradient text-white font-bold inline-flex items-center justify-center gap-2 hover:opacity-95 shadow-lg">
              {sent ? "পাঠানো হয়েছে ✓" : <>পাঠান <Send className="h-4 w-4" /></>}
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
