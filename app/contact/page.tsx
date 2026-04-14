export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="bg-green-deep text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Whether you have a question about
            our produce, want to plan a visit, or are curious about our farming
            practices, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column: Contact Form */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-green-deep mb-2">
              Send Us a Message
            </h2>
            <p className="text-text-muted mb-8 leading-relaxed">
              Fill out the form below and we will get back to you as soon as
              we can.
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full border border-green-light/30 rounded-xl p-4 bg-white text-foreground placeholder:text-text-muted/50 focus:outline-green-mid focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full border border-green-light/30 rounded-xl p-4 bg-white text-foreground placeholder:text-text-muted/50 focus:outline-green-mid focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full border border-green-light/30 rounded-xl p-4 bg-white text-foreground placeholder:text-text-muted/50 focus:outline-green-mid focus:ring-0 transition-colors resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="bg-green-deep text-white font-medium px-8 py-3.5 rounded-full hover:bg-green-mid transition-colors text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="space-y-10">
            {/* Location */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-green-deep mb-3">
                Location
              </h3>
              <p className="text-text-muted mb-4">123 Valley Road, Greenfield</p>
              <div className="bg-cream rounded-xl h-[250px] flex items-center justify-center">
                <span className="text-text-muted text-lg font-medium">Map</span>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-green-deep mb-3">
                Hours
              </h3>
              <ul className="space-y-2 text-text-muted">
                <li className="flex justify-between">
                  <span>Tuesday to Sunday</span>
                  <span>8:00 AM to 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Monday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-green-deep mb-3">
                Email
              </h3>
              <a
                href="mailto:hello@solsticefarm.com"
                className="text-green-mid hover:text-green-deep transition-colors"
              >
                hello@solsticefarm.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-green-deep mb-3">
                Phone
              </h3>
              <a
                href="tel:+15552345678"
                className="text-green-mid hover:text-green-deep transition-colors"
              >
                (555) 234-5678
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-4">
            Stay Connected
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Sign up for our newsletter to receive seasonal updates, harvest
            highlights, and announcements about upcoming farm events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              name="newsletter-email"
              placeholder="Your email address"
              className="flex-1 border border-green-light/30 rounded-xl p-4 bg-white text-foreground placeholder:text-text-muted/50 focus:outline-green-mid focus:ring-0 transition-colors"
            />
            <button
              type="submit"
              className="bg-green-deep text-white font-medium px-8 py-4 rounded-full hover:bg-green-mid transition-colors text-base whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
