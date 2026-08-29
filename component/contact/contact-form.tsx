const fieldClassName =
  "min-h-12 rounded-xl border border-(--ora-border-strong) bg-(--ora-surface-raised) px-4 py-3 text-(--ora-ink) transition-[border-color,box-shadow] duration-180 focus:border-(--ora-burgundy) focus:shadow-[0_0_0_3px_rgba(139,72,91,0.12)]";

export default function ContactForm() {
  return (
    <section className="bg-(--ora-cream) px-6 py-24 text-(--ora-burgundy-dark) md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-375">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              Send a message
            </p>
            <h2 className="font-display mt-5 max-w-md text-5xl font-normal leading-[0.96] tracking-[-0.04em] sm:text-6xl">
              How can ORA help?
            </h2>
          </div>

          <form className="grid gap-7" aria-describedby="contact-production-note">
            <div className="grid gap-7 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="contact-name" className="text-sm font-semibold">
                  Name <span className="font-normal text-(--ora-text-secondary)">(required)</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  className={fieldClassName}
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="contact-phone" className="text-sm font-semibold">
                  Phone <span className="font-normal text-(--ora-text-secondary)">(required)</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  aria-required="true"
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="contact-experience" className="text-sm font-semibold">
                Experience <span className="font-normal text-(--ora-text-secondary)">(required)</span>
              </label>
              <select
                id="contact-experience"
                name="experience"
                required
                aria-required="true"
                defaultValue=""
                className={fieldClassName}
              >
                <option value="" disabled>
                  Choose an experience
                </option>
                <option value="cafe">Café</option>
                <option value="fitness">Fitness</option>
                <option value="padel">Padel</option>
                <option value="pilates">Pilates</option>
                <option value="yoga">Yoga</option>
                <option value="studio">Studio</option>
                <option value="membership">Membership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="contact-message" className="text-sm font-semibold">
                Message <span className="font-normal text-(--ora-text-secondary)">(required)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                minLength={10}
                required
                aria-required="true"
                className={`${fieldClassName} resize-y`}
              />
              <p className="text-xs leading-5 text-(--ora-text-secondary)">
                Include the experience and preferred time you are enquiring about.
              </p>
            </div>

            <div>
              <button
                type="submit"
                disabled
                aria-describedby="contact-production-note"
                className="ora-button cursor-not-allowed bg-(--ora-burgundy-dark) text-(--ora-white)"
              >
                Send enquiry
              </button>
              <p
                id="contact-production-note"
                role="note"
                className="mt-3 max-w-lg text-sm leading-6 text-(--ora-text-secondary)"
              >
                Contact destination still required before production.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
