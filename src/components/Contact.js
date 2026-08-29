import React from "react";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { profile } from "../data/content";

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2 className="section-heading mt-3 max-w-xl">
              Let&apos;s talk about your backend.
            </h2>
            <p className="mt-4 max-w-xl text-ink-300 leading-relaxed">
              Open to Team Lead and Full-Stack Engineering roles spanning backend and mobile.
              If you're building something that needs to handle real scale and real stakes,
              I'd like to hear about it.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-accent-soft transition-colors"
              >
                <FiMail /> {profile.email}
              </a>
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-ink-100 hover:border-accent hover:text-accent transition-colors"
              >
                <FiDownload /> Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-300">
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <FiPhone className="text-accent" /> {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiLinkedin className="text-accent" /> LinkedIn <FiArrowUpRight className="text-xs" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiGithub className="text-accent" /> GitHub <FiArrowUpRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
