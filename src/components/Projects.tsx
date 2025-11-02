import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Screentime Recorder",
    description:
      "A comprehensive screen-time tracking app built with the MERN stack featuring real-time tab tracking, Google OAuth authentication, and JWT security. Led a team to develop this project with interactive data visualizations using D3.js for detailed productivity insights. Includes a Chrome extension for automatic tab tracking and secure user management.",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "D3.js",
      "Chrome Extension",
      "Google OAuth",
      "Google Gemini",
    ],
    shadow: "hover:shadow-sky-500/10",
    codeUrl: "https://github.com/nst-sdc/Screentime-recoder",
    liveUrl: "https://screentime-recoder.vercel.app/",
  },
  {
    id: 2,
    title: "TextTones",
    description:
      "TextTones is a modern text-to-speech web app I built using React, AWS Polly, and Firebase. It features over 40 high-quality voices across 20+ languages, powered by neural TTS technology for natural-sounding speech. Users can preview audio in real time, download MP3 files, and track their usage history. With a responsive, cross-browser interface styled with Tailwind CSS and optimized using Vite, TextTones delivers a fast, user-friendly experience across devices.",
    tags: ["React", "AWS Polly", "Firebase", "Google OAuth", "Tailwind CSS"],
    shadow: "hover:shadow-fuchsia-500/10",
    codeUrl: "https://github.com/QUBITABHAY/TextTones",
    liveUrl: "https://text-tones.vercel.app/",
  },
  {
    id: 3,
    title: "Type Master",
    description:
      "Type Master is an interactive typing practice app built with React and Vite. It offers a clean, modern UI with dark/light mode toggle and two practice modes: Single Word Challenge and Quote Challenge. Track your progress with real-time stats like WPM, accuracy, and mistakes. Designed for speed and responsiveness with Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind CSS"],
    shadow: "hover:shadow-sky-500/10",
    codeUrl: "https://github.com/QUBITABHAY/react-game",
    liveUrl: "https://rush-typing.vercel.app/",
  },
  {
    id: 4,
    title: "Blog Website - Flask Blog Application",
    description:
      "A full-featured blog platform built with Python Flask, MongoDB, and Tailwind CSS. Features user authentication with secure login, post creation/editing/deletion, profile picture uploads, and a responsive design. Ideal for developers to share their technical insights with a clean, modern interface.",
    tags: ["Python", "Flask", "MongoDB", "Tailwind CSS"],
    shadow: "hover:shadow-fuchsia-500/10",
    codeUrl: "https://github.com/QUBITABHAY/Blog-Website",
    liveUrl: "https://blogdev.up.railway.app/",
  },
  {
    id: 5,
    title: "Local Sports Club",
    description:
      "A website for a local sports club where users can register for the club and can also view the events and news of the club. This project is made by three members: me and my two friends.",
    tags: ["HTML", "CSS", "JavaScript"],
    shadow: "hover:shadow-sky-500/10",
    codeUrl: "https://github.com/QUBITABHAY/Local_Sports_Club",
    liveUrl: "https://local-sports-club.vercel.app/",
  },
];

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const maxIndex = projects.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    touchCurrentX.current = null;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchCurrentX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchCurrentX.current == null) {
      touchStartX.current = null;
      touchCurrentX.current = null;
      return;
    }
    const dx = touchCurrentX.current - touchStartX.current;
    const threshold = 50;
    if (Math.abs(dx) > threshold) {
      if (dx < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-28 lg:py-32 bg-neutral-950"
    >
      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Projects
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-1 sm:left-4 top-1/2 z-50 -translate-y-1/2 group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md transition-all hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg pointer-events-auto"
            aria-label="Previous project"
          >
            <svg
              className="h-5 w-5 text-white/80 group-hover:text-white pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-1 sm:right-4 top-1/2 z-50 -translate-y-1/2 group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md transition-all hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg pointer-events-auto"
            aria-label="Next project"
          >
            <svg
              className="h-5 w-5 text-white/80 group-hover:text-white pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-out snap-x snap-mandatory"
            style={{
              width: "100%",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, idx) => (
              <article
                key={project.id}
                className="project-card group relative flex-shrink-0 snap-center"
                style={{
                  width: "100%",
                  minWidth: "100%",
                  maxWidth: "100%",
                }}
              >
                <div className="px-1 sm:px-2 h-full">
                  <div
                    className={`relative mx-auto w-full sm:max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-10 transition-all hover:border-white/20 hover:shadow-lg ${project.shadow} overflow-hidden h-full min-h-[22rem] sm:min-h-[26rem] md:min-h-[28rem]`}
                  >
                    <div
                      className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(217,70,239,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(217,70,239,0.03) 1px, transparent 1px)",
                        backgroundSize: "16px 16px,16px 16px",
                      }}
                    />
                    <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                      <div className="flex-1">
                        <h3 className="mt-3 sm:mt-4 text-xl sm:text-3xl font-bold tracking-tight text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/70">
                          {project.description}
                        </p>
                        {project.tags?.length ? (
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <li
                                key={tag}
                                className="text-[11px] sm:text-xs leading-tight rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80 hover:bg-white/10 transition-colors"
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {/* Action Buttons */}
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
                          <a
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-neutral-950 transition-all hover:bg-white/90 hover:scale-[1.02]"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Details
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                          <a
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white/90 transition-all hover:bg-white/10"
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.54 1.06 1.54 1.06.89 1.57 2.33 1.12 2.9.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.78 1.05A9.26 9.26 0 0 1 12 7.27c.86 0 1.73.12 2.54.35 1.93-1.33 2.78-1.05 2.78-1.05.55 1.42.2 2.47.1 2.73.64.71 1.02 1.62 1.02 2.74 0 3.93-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                            </svg>
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 sm:h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-sky-400"
                  : "w-3 sm:w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}