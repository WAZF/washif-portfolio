import React from "react";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { profile } from "../data/content";

function FocusPanel() {
  const { currentFocus } = profile;
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      <div className="absolute -inset-16 -z-10 bg-accent/10 blur-3xl" />

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          {currentFocus.label}
        </p>
      </div>

      <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold text-ink-100">
        {currentFocus.title}
      </h3>
      <p className="mt-2 text-sm text-ink-300 leading-relaxed">{currentFocus.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {currentFocus.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-accent/25 bg-accent/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
        {currentFocus.initiatives.map((i) => (
          <div key={i.name} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  i.status === "leading" ? "bg-accent" : "bg-ink-500"
                }`}
              />
              <span className="text-sm font-medium text-ink-100">{i.name}</span>
              <span className="text-xs text-ink-400">{i.note}</span>
            </div>
            <span
              className={`font-mono text-[10px] uppercase tracking-widest ${
                i.status === "leading" ? "text-accent" : "text-ink-400"
              }`}
            >
              {i.status === "leading" ? "Leading" : "Shipped"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-300">
              {profile.status}
            </span>
          </div>

          <p className="eyebrow mb-3">Hi, I&apos;m</p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink-100 leading-[1.05] tracking-tight">
            Mohamed Washif
          </h1>
          <p className="mt-4 font-display text-xl sm:text-2xl text-accent">
            {profile.role}
          </p>
          <p className="mt-2 font-mono text-sm text-ink-400">{profile.focus}</p>

          <p className="mt-6 max-w-xl text-ink-300 leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-accent-soft transition-colors"
            >
              View my work <FiArrowRight />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-ink-100 hover:border-accent hover:text-accent transition-colors"
            >
              <FiDownload /> Download resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-ink-300">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <FiMapPin className="text-accent" /> {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-lg" />
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <FocusPanel />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
          {profile.highlights.map((h) => (
            <div key={h.label}>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-ink-100">
                {h.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-ink-400">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
