"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full top-6 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between gap-8 shadow-2xl pointer-events-auto min-w-[300px]">
          <Link href="#home" className="text-xl font-bold tracking-tighter text-white hover:text-brand-red transition-colors">
            EL<span className="text-brand-red">.</span>
          </Link>
          
          <ul className="hidden md:flex space-x-6 text-xs font-mono text-gray-400 font-medium">
            <li><Link href="#home" className="hover:text-white transition-colors">/home</Link></li>
            <li><Link href="#experience" className="hover:text-white transition-colors">/experiência</Link></li>
            <li><Link href="#projects" className="hover:text-white transition-colors">/projetos</Link></li>
          </ul>

          <Link href="#contact" className="hidden md:block bg-white/10 hover:bg-brand-red text-white text-xs font-bold px-4 py-2 rounded-full transition-all">
            Contato
          </Link>

          <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-[60] flex flex-col justify-center items-center gap-8 md:hidden transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {["home", "experience", "projects", "contact"].map((item) => (
          <Link key={item} href={`#${item}`} onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-brand-red capitalize">
            {item}
          </Link>
        ))}
      </div>
    </>
  );
}