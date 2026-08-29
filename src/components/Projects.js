import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/content";

function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="eyebrow">Side Projects</p>
        <h2 className="section-heading mt-3">Built outside of work.</h2>
        <p className="mt-4 max-w-xl text-ink-300 leading-relaxed">
          A few independent builds across mobile and web, mostly explorations in Flutter and
          front-end fundamentals.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-accent/40 hover:bg-white/[0.04] transition-colors"
            >
              <h3 className="font-display text-lg font-semibold text-ink-100">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-300 leading-relaxed">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-ink-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 pt-4 border-t border-white/5">
                <a
                  href={p.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-300 hover:text-accent transition-colors"
                >
                  <FiGithub /> Code
                </a>
                {p.demoLink && p.demoLink !== "#" && (
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-300 hover:text-accent transition-colors"
                  >
                    <FiArrowUpRight /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
