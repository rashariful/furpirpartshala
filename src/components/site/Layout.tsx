import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ title, subtitle, accent = "teal" }: { title: string; subtitle?: string; accent?: "teal" | "orange" | "green" | "red" | "purple" | "yellow" }) {
  const map = {
    teal: "from-brand-teal to-brand-green",
    orange: "from-brand-orange to-brand-red",
    green: "from-brand-green to-brand-teal",
    red: "from-brand-red to-brand-orange",
    purple: "from-brand-purple to-brand-teal",
    yellow: "from-brand-yellow to-brand-orange",
  } as const;
  return (
    <section className={`bg-gradient-to-br ${map[accent]} text-white relative overflow-hidden`}>
      <div className="blob bg-white/30 h-72 w-72 -top-10 -right-10" />
      <div className="blob bg-white/20 h-72 w-72 -bottom-20 -left-10" />
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl max-w-2xl opacity-95">{subtitle}</p>}
      </div>
    </section>
  );
}
