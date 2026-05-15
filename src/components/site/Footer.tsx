import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-20 bg-foreground text-background">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="bg-white inline-block rounded-xl p-2">
            <img src={logo} alt="ফুর্তির পাঠশালা" className="h-16 w-auto" />
          </div>
          <p className="mt-4 text-sm opacity-80 max-w-md">
            ফুর্তির পাঠশালা — যেখানে শিশুরা খেলার ছলে শেখে, ভালোবাসায় বেড়ে ওঠে এবং আনন্দে মানসিক বিকাশ ঘটে।
          </p>
          <div className="flex gap-3 mt-5">
            <a className="h-10 w-10 grid place-items-center rounded-full bg-brand-teal hover:scale-110 transition" href="#"><Facebook className="h-5 w-5" /></a>
            <a className="h-10 w-10 grid place-items-center rounded-full bg-brand-orange hover:scale-110 transition" href="#"><Instagram className="h-5 w-5" /></a>
            <a className="h-10 w-10 grid place-items-center rounded-full bg-brand-red hover:scale-110 transition" href="#"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">দ্রুত লিংক</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:text-brand-yellow">আমাদের সম্পর্কে</Link></li>
            <li><Link to="/parent" className="hover:text-brand-yellow">অভিভাবক</Link></li>
            <li><Link to="/child" className="hover:text-brand-yellow">শিশু কর্নার</Link></li>
            <li><Link to="/events" className="hover:text-brand-yellow">ইভেন্ট</Link></li>
            <li><Link to="/results" className="hover:text-brand-yellow">ফলাফল</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">যোগাযোগ</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-green" /> চারলি আক্তার, প্রতিষ্ঠাতা</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-green" /> 01744-696943</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-green" /> charlyakhter@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 text-xs opacity-70 text-center">
          © {new Date().getFullYear()} ফুর্তির পাঠশালা। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
}
