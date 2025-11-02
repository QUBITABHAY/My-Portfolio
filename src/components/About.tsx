import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          About
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-3 about-card">
            <h3 className="text-xl font-medium">Abhay Pratap Yadav</h3>
            <p className="mt-4 text-white/70">
              Developer with experience in full-stack web development,
              open-source contributions, and project management. Maintainer of
              the ScreenTime Recorder (NST-Student Developer Club) and
              contributor to multiple community-driven projects.
            </p>
            <p className="mt-3 text-white/60">
              Skilled in React.js, Node.js, Python, MySQL, and modern web
              technologies, with a strong focus on building impactful solutions
              and leading collaborative teams. As a core member of NST-SDC, I've
              led development teams, co-organized major campus hackathons such
              as Nirmaan and a CTF + Treasure Hunt, and actively contributed to
              open-source projects through Hacktoberfest and other initiatives.
            </p>
            <div className="mt-8">
              <h4 className="text-xs font-medium uppercase tracking-wider text-white/50">
                Education
              </h4>
              <div className="mt-3 space-y-3">
                <div className="rounded-md border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/20">
                  <h5 className="font-medium">
                    Bachelor of Technology (AI ML)
                  </h5>
                  <p className="mt-1 text-white/70">
                    Newton School of Technology (ADYPU), Pune
                  </p>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-white/50">2024 - 2028</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/80">
                      CGPA: 8.0/10.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 about-card">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/50">
              Skills
            </h4>
            <div className="mt-4 space-y-6">
              <div>
                <h5 className="font-medium">Frontend</h5>
                <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono text-white/80">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    HTML5 & CSS3
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    JavaScript
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    React.js
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Next.js
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    React Native
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div>
                <h5 className="font-medium">Backend</h5>
                <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono text-white/80">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Node.js
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Express.js
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Python
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Flask
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    MySQL
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    MongoDB
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Prisma ORM
                  </span>
                </div>
              </div>
              <div>
                <h5 className="font-medium">Tools & Other</h5>
                <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono text-white/80">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Git & GitHub
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Figma
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Postman
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    D3.js
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:border-white/20">
                    Pandas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
