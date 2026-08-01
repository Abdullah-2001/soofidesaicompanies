import { useState, type FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle2,
  Loader2,
  Clock,
} from 'lucide-react';
import { COMPANY, SERVICES } from '@/data/content';
import { PatternDecoration } from '@/components/Pattern';

const FORM_FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+92 3XX XXXXXXX', required: false },
] as const;

type Status = 'idle' | 'submitting' | 'success';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1100);
  };

  return (
    <section
      id="contact"
      className="h-section relative overflow-hidden bg-brand-960 text-white"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern-dark opacity-50" />
      <div className="pointer-events-none absolute inset-0 mesh-dark" />
      <PatternDecoration
        variant="rings"
        className="absolute left-10 top-16 text-accent-400/25 animate-spin-slow"
      />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="reveal eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Contact Us
          </span>
          <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest sm:text-4xl lg:text-5xl text-balance">
            Let&rsquo;s Start a Conversation
          </h2>
          <p className="reveal delay-200 mt-5 text-base leading-relaxed text-white/70 sm:text-lg text-pretty">
            Whether you require professional consultancy, assistance with
            business registration, tax-related guidance, educational
            consultancy, travel consultancy, or business advisory support, our
            team is available to discuss your requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <div className="reveal-left space-y-4">
              <InfoCard
                icon={MapPin}
                title="Registered Office"
                lines={[COMPANY.legalName, ...COMPANY.address]}
              />
              <InfoCard
                icon={Phone}
                title="Phone"
                lines={[COMPANY.phone]}
                href={COMPANY.phoneHref}
              />
              <InfoCard
                icon={Mail}
                title="Email"
                lines={[COMPANY.email]}
                href={COMPANY.emailHref}
              />
              <InfoCard
                icon={Globe}
                title="Website"
                lines={[COMPANY.website]}
                href={COMPANY.websiteHref}
              />
            </div>

            <div className="reveal-left delay-300 mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <Clock className="h-5 w-5 shrink-0 text-accent-300" />
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">Office hours:</span>{' '}
                Monday to Friday, 9:00 AM &ndash; 6:00 PM (PKT)
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="reveal-right card overflow-hidden p-7 sm:p-9">
              {status === 'success' ? (
                <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                    Inquiry received
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-slatey">
                    Thank you for reaching out. A member of our team will get
                    back to you shortly. For urgent matters, please call us
                    directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-ghost mt-6"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {FORM_FIELDS.map((f) => (
                      <Field
                        key={f.name}
                        label={f.label}
                        name={f.name}
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                      />
                    ))}
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-ink">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Other / General inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Your Inquiry
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slatey">
                    We respond to inquiries within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
}) {
  const Body = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-400 hover:border-white/20 hover:bg-white/[0.07] hover:-translate-y-0.5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-300">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">
          {title}
        </p>
        <div className="mt-1 space-y-0.5">
          {lines.map((l) => (
            <p key={l} className="text-sm font-medium text-white/90">
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {Body}
    </a>
  ) : (
    Body
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  );
}
