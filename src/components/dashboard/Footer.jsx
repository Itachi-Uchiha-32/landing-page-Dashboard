"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent py-6 mt-auto border-t border-slate-200/60">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-2">
        {/* Left Side: Copyright */}
        <div className="text-[13px] font-medium text-slate-500">
          {currentYear} © Duralux by 
          <Link 
            href="#" 
            className="ml-1 text-blue-600 hover:text-blue-700 font-bold transition-colors"
          >
            Theme_Express
          </Link>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex items-center gap-6">
          {["About", "Support", "Contact Us"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}