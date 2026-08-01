import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Financial & Tax Consultancy',
  'Corporate & Business Registration',
  'SRB & Regulatory Services',
  'Membership & Professional Registrations',
  'Educational Consultancy',
  'Travel Consultancy',
  'Business & Management Consultancy',
  'Other',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  const field =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-400 transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10';

  const contactInfo = [
    { icon: MapPin, label: 'Registered Office', value: 'Al-Ahmed Centre, Office No. 6, Magazine Lane, Saddar, Karachi 74400, Pakistan' },
    { icon: Phone, label: 'Phone', value: '+92 321 387 5658' },
    { icon: Mail, label: 'Email', value: 'soofidesaicompanies@gmail.com' },
    { icon: Globe, label: 'Website', value: 'www.soofidesaicompanies.com' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
              Contact us
            </p>
            <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
              Let's Start a Conversation
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-lg text-ink-500 text-balance">
              Whether you require professional consultancy, assistance with
              business registration, tax-related guidance, educational
              consultancy, travel consultancy, or business advisory support, our
              team is available to discuss your requirements.
            </p>

            <div className="reveal reveal-delay-3 mt-10 space-y-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-ink-400">{c.label}</p>
                    <p className="font-600 text-ink-800">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ink-200/80 bg-white p-7 card-shadow-lg sm:p-9"
            >
              <div className="grid gap-5">
                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-600 text-ink-700">Email Address</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={field}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-600 text-ink-700">Phone Number</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={field}
                      placeholder="+92 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700">Service Required</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={field}
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${field} resize-none`}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sent}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand-600 px-6 py-3.5 text-base font-600 text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:bg-brand-700 disabled:opacity-90"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Inquiry submitted — we'll be in touch
                    </>
                  ) : (
                    <>
                      Submit Your Inquiry
                      <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
                <p className="text-center text-xs text-ink-400">
                  We reply within two business days. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
