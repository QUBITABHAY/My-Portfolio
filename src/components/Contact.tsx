export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-28 lg:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Contact
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-white/90">
              Let's work together on something amazing
            </h3>
            <div className="mt-6 space-y-4">
              <div className="contact-item rounded-md border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/[0.08]">
                <h4 className="text-sm font-semibold text-white/70">Email</h4>
                <a
                  className="mt-1 inline-block link-underline text-white/85 hover:text-white transition-colors"
                  href="mailto:abhaypratap.yadav@adypu.edu.in"
                >
                  abhaypratap.yadav@adypu.edu.in
                </a>
              </div>
              <div className="contact-item rounded-md border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/[0.08]">
                <h4 className="text-sm font-semibold text-white/70">GitHub</h4>
                <a
                  className="mt-1 inline-block link-underline text-white/85 hover:text-white transition-colors"
                  href="https://github.com/QUBITABHAY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  QUBITABHAY
                </a>
              </div>
              <div className="contact-item rounded-md border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/[0.08]">
                <h4 className="text-sm font-semibold text-white/70">
                  LinkedIn
                </h4>
                <a
                  className="mt-1 inline-block link-underline text-white/85 hover:text-white transition-colors"
                  href="https://www.linkedin.com/in/abhay-pratap-yadav-52452832b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form rounded-md border border-white/10 bg-white/5 p-5 transition-all">
            <h3 className="text-lg font-medium text-white/90">Send Me a Message</h3>
            <form
              className="mt-6 space-y-4"
              action="https://formsubmit.co/525a5a6a0c3f126fd55be797e7661410"
              method="POST"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-cyan-400/30 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-cyan-400/30 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-cyan-400/30 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Message"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-cyan-400/30 transition-colors resize-none"
                ></textarea>
              </div>
              <input type="hidden" name="_captcha" value="false"/>
              <input type="hidden" name="_next" value="https://www.abdev.co.in/"/>
              <button
                type="submit"
                className="btn-ripple inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-neutral-900 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l14-7-4 14-3-5-7-2z" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
