import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          id="hero-group"
          className="grid min-h-[78vh] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-14 md:py-24"
        >
          {/* Left: Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white/85">Hi, I'm</span>
              <br />
              <span className="text-white">Abhay Pratap Yadav</span>
            </h1>
            <p className="mt-3 text-base text-white/70 font-mono">
              Full‑Stack Developer • Open‑Source Maintainer • AI/ML Student
            </p>
            <p className="mt-3 md:max-w-lg text-white/70 md:text-lg">
              I build full‑stack web apps with React and Node.js, and contribute to community projects.
              Maintainer of Screentime Recorder @ NST‑SDC; focused on impactful, polished products.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm md:justify-start">
              <a href="mailto:abhaypratap.yadav@adypu.edu.in" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 hover:bg-white/10">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2 .28V7l8 5 8-5v-.22A.5.5 0 0 0 19.5 6h-15a.5.5 0 0 0-.5.78Z"/></svg>
                abhaypratap.yadav@adypu.edu.in
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href="#projects"
                className="btn-ripple inline-flex items-center rounded-md bg-white px-5 py-2.5 font-medium text-neutral-950 transition-transform hover:scale-[1.01]"
                aria-label="View Work"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download="Abhay_Pratap_Yadav_Resume.pdf"
                className="link-underline inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 font-medium text-white/85 hover:bg-white/10"
                aria-label="Download Resume"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
              <a
                aria-label="GitHub"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
                href="https://github.com/QUBITABHAY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-5 w-5 text-white/80 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.54 1.06 1.54 1.06.89 1.57 2.33 1.12 2.9.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.78 1.05A9.26 9.26 0 0 1 12 7.27c.86 0 1.73.12 2.54.35 1.93-1.33 2.78-1.05 2.78-1.05.55 1.42.2 2.47.1 2.73.64.71 1.02 1.62 1.02 2.74 0 3.93-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
                href="https://www.linkedin.com/in/qubitabhay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-5 w-5 text-white/80 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.94 8.5H3.69v11.8h3.25V8.5Zm.2-3.88a1.89 1.89 0 1 1-3.78 0 1.89 1.89 0 0 1 3.78 0ZM20.31 20.3v-6.38c0-3.42-1.83-5.01-4.28-5.01-1.97 0-2.85 1.08-3.34 1.84v-1.6H9.47c.04 1.05 0 11.8 0 11.8h3.22v-6.59c0-.35.03-.71.13-.97.29-.7.93-1.43 2.01-1.43 1.42 0 1.99 1.08 1.99 2.66v6.33h3.49Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual relative mx-auto w-full max-w-[20rem] sm:max-w-md md:max-w-none md:w-[32rem] mt-6 md:mt-0">
            <div className="absolute -inset-3 sm:-inset-6 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_60%)] blur-xl sm:blur-2xl" />
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_10px_30px_-10px_rgba(0,0,0,0.6)]">
              {/* Faux window header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-3 sm:px-4 py-2">
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-white/50">portfolio.tsx</span>
              </div>
              {/* Code block */}
              <pre className="px-3 sm:px-4 py-2.5 sm:py-3 text-[12px] sm:text-[13px] leading-5 sm:leading-6 text-white/80 overflow-x-auto whitespace-pre">
                {`export const QUBITABHAY = {
  role: "Full-Stack Developer",
  maintainer: "Screentime Recorder @ NST-SDC",
  stack: ["React", "Node.js", "Express", "MongoDB", "MySQL"],
  contact: {
    email: "abhaypratap.yadav@adypu.edu.in"
  }
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
