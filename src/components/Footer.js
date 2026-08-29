import React from "react";
import { profile } from "../data/content";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400 font-mono">
        <p>© {year} {profile.name}</p>
        <p>Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
