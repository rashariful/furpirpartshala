import { Link } from "@tanstack/react-router";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "হোম" },
  { to: "/about", label: "আমাদের সম্পর্কে" },
  { to: "/parent", label: "অভিভাবক" },
  { to: "/child", label: "শিশু কর্নার" },
  { to: "/events", label: "ইভেন্ট" },
  { to: "/results", label: "ফলাফল" },
  { to: "/contact", label: "যোগাযোগ" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-brand-gradient text-white text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2">
          <div className="flex items-center gap-4">
            <a href="tel:01744696943" className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" /> 01744-696943
            </a>
            <a href="mailto:charlyakhter@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:underline">
              <Mail className="h-3.5 w-3.5" /> charlyakhter@gmail.com
            </a>
          </div>
          <div className="hidden md:block font-medium">শিশুদের মানসিক বিকাশ ঘটাই</div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-card/95 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ফুর্তির পাঠশালা" className="h-14 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 rounded-full text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 transition"
                activeProps={{ className: "px-3 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground hover:opacity-90"
            >
              ভর্তি হোন
            </Link>
          </nav>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t bg-card">
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary/10"
                  activeProps={{ className: "px-3 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
