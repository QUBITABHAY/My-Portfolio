import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="text-base font-medium tracking-tight" onClick={close}>
            <span className="text-white/90">APY</span>
          </a>
          {/* Desktop nav */}
          <div className="hidden gap-6 md:flex">
            <a
              href="#about"
              className="hover:text-white text-white/60 transition-colors link-underline"
              onClick={close}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-white text-white/60 transition-colors link-underline"
              onClick={close}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white text-white/60 transition-colors link-underline"
              onClick={close}
            >
              Contact
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggle}
          >
            {/* Icon: hamburger / close */}
            <svg
              className={`h-5 w-5 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-5 w-5 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Mobile dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="pb-4 pt-2 space-y-1">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-white/85 hover:bg-white/10"
              onClick={close}
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-white/85 hover:bg-white/10"
              onClick={close}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-white/85 hover:bg-white/10"
              onClick={close}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
