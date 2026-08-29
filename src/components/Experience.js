import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { experience } from "../data/content";

function Experience() {
  const [active, setActive] = useState(experience.projects[0].id);
  const current = experience.projects.find((p) => p.id === active);

  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="eyebrow">Experience</p>
        <h2 className="section-heading mt-3">Where the work has lived.</h2>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
          <div>
            <p className="font-display text-lg font-semibold text-ink-100">
              {experience.role} · {experience.company}
            </p>
            <p className="text-sm text-ink-400 mt-1">{experience.location}</p>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {experience.period}
          </span>
        </div>

        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-8">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {experience.projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`text-left shrink-0 lg:shrink w-64 lg:w-auto rounded-2xl border px-5 py-4 transition-colors ${
                  active === p.id
                    ? "border-accent/50 bg-accent/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <span className="font-mono text-[11px] text-ink-400">{p.tag}</span>
                <p
                  className={`mt-1 font-display font-semibold ${
                    active === p.id ? "text-accent" : "text-ink-100"
                  }`}
                >
                  {p.name}
                </p>
                <p className="mt-1 text-xs text-ink-400 leading-relaxed">{p.title}</p>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink-100">
              {current.title}
            </h3>
            <p className="mt-3 text-ink-300 leading-relaxed">{current.description}</p>

            <ul className="mt-6 space-y-3">
              {current.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ink-300 leading-relaxed">
                  <FiCheck className="mt-0.5 shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {current.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-ink-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
