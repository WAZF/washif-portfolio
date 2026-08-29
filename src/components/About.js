import React from "react";
import { FiCpu, FiSmartphone, FiUsers } from "react-icons/fi";
import { education } from "../data/content";

const PILLARS = [
  {
    icon: FiCpu,
    title: "Backend & distributed systems",
    text: "Services in Go and Java built for correctness and scale — from token lifecycles on a national digital-currency platform to event-driven pipelines handling peak transaction load.",
  },
  {
    icon: FiSmartphone,
    title: "Full-stack mobile ownership",
    text: "End-to-end delivery across native iOS (Swift), Android (Kotlin/Java), and Flutter — integrating encrypted transaction flows directly with backend services I own.",
  },
  {
    icon: FiUsers,
    title: "Technical leadership",
    text: "Leading CBDC engineering at Digiledge — driving architecture decisions, running design and code reviews, and guiding the team through production issues.",
  },
];

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="eyebrow">About</p>
        <h2 className="section-heading mt-3 max-w-2xl">
          Full-stack engineering and leadership, built for systems that can&apos;t afford to
          be wrong.
        </h2>
        <p className="mt-5 max-w-2xl text-ink-300 leading-relaxed">
          I work at the intersection of FinTech and infrastructure — designing services that
          move real money and real regulatory weight, and leading the team that ships them.
          Most of my time is split between backend architecture in Go and Java and the native
          iOS and Android layers that depend on it, reasoning about throughput, consistency,
          and failure modes end to end.
        </p>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-accent/40 hover:bg-white/[0.04] transition-colors"
            >
              <Icon className="text-2xl text-accent" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-100">
                {title}
              </h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Education
          </span>
          <div className="flex-1">
            <p className="text-ink-100 font-medium">{education.degree}</p>
            <p className="text-sm text-ink-400">{education.school}</p>
          </div>
          <p className="text-sm text-ink-400">
            {education.period} · {education.location}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
