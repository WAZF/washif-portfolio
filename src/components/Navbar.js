import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile } from "../data/content";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav("home")}
          className="font-display text-sm font-semibold tracking-wide text-ink-100"
        >
          MW<span className="text-accent">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="font-mono text-xs uppercase tracking-widest text-ink-300 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={profile.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-ink-100 hover:border-accent hover:text-accent transition-colors"
        >
          <FiDownload className="text-sm" /> Resume
        </a>

        <button
          className="md:hidden text-ink-100 text-xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-left font-mono text-xs uppercase tracking-widest text-ink-300 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.resumeFile}
            download
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-ink-100"
          >
            <FiDownload className="text-sm" /> Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
