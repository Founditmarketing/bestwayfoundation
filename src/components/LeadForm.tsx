import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from '../config/site';
import { services } from '../data/services';

/**
 * The inspection request form. Every form on the site renders through here.
 *
 * It replaces four hand-duplicated forms, three of which discarded every lead:
 *
 *  1. Only the city-page form gave its fields a `name` attribute. The Found It
 *     lead-capture embed serialises submissions with `new FormData(form)`,
 *     which includes named controls only, so the homepage, contact and
 *     floating-widget forms handed it `{}` and it bailed without sending.
 *  2. The homepage, contact and city forms had no submit handler, so the
 *     browser ran a native GET submit and reloaded the page. The form appeared
 *     to clear and the visitor assumed it had gone through.
 *  3. The floating widget did preventDefault, then popped
 *     `alert('Message sent successfully!')` — telling people their message had
 *     been sent when nothing had been transmitted at all.
 *
 * The embed listens for `submit` on `document` in the capture phase, so it
 * serialises the fields before the handler here runs.
 *
 * NOTE: delivery depends entirely on that third-party embed, which POSTs
 * fire-and-forget and swallows its own errors. Nothing here can confirm a lead
 * actually arrived, which is why the confirmation surfaces the phone number
 * and an email address rather than asserting success and leaving it there.
 */

export interface LeadFormProps {
  heading?: string;
  idPrefix?: string;
  className?: string;
  /** Compact placeholder-driven layout for the floating widget. */
  compact?: boolean;
  /** Extra context posted with the lead, e.g. the city a page targets. */
  hiddenFields?: Record<string, string>;
  addressPlaceholder?: string;
  /** Called after a successful submit — used to close the floating widget. */
  onSent?: () => void;
}

export default function LeadForm({
  heading = 'Request an Estimate',
  idPrefix = 'lead',
  className = 'bg-white rounded-lg shadow-xl border border-gray-200 p-8 md:p-10 space-y-4',
  compact = false,
  hiddenFields,
  addressPlaceholder,
  onSent,
}: LeadFormProps) {
  const { pathname } = useLocation();
  const [sent, setSent] = useState(false);

  const field = compact
    ? 'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green text-sm'
    : 'w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors';
  const label = 'block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // The embed's capture-phase listener has already serialised the fields by
    // the time this runs; preventDefault only stops the page reload.
    e.preventDefault();
    setSent(true);
    onSent?.();
  };

  const hidden = (
    <>
      {/* Tells the agency which page produced the lead. */}
      <input type="hidden" name="lead_source" value={`bestwayfoundation.com${pathname}`} />
      {Object.entries(hiddenFields ?? {}).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
    </>
  );

  const serviceOptions = (
    <>
      <option value="" disabled>
        {compact ? 'Select a Service *' : 'Select a Service...'}
      </option>
      {/* Driven by the service data so this list cannot go stale. */}
      {services.map((s) => (
        <option key={s.slug} value={s.slug}>
          {s.name}
        </option>
      ))}
      <option value="other">Other / Not Sure</option>
    </>
  );

  /* ------------------------------------------------------------ confirmed */

  if (sent && compact) {
    return (
      <div className="text-center py-4" role="status" aria-live="polite">
        <CheckCircle2 className="w-9 h-9 text-jac-lime mx-auto mb-3" />
        <p className="text-sm font-bold text-jac-green mb-1">Request received</p>
        <p className="text-xs text-gray-500 mb-4">
          We will be in touch. Calling is faster if you need us today.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 bg-jac-green text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-jac-charcoal transition-colors"
        >
          <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  if (sent) {
    return (
      <div className={className} role="status" aria-live="polite">
        <div className="text-center py-6">
          <CheckCircle2 className="w-14 h-14 text-jac-lime mx-auto mb-5" />
          <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-3">
            Request Received
          </h2>
          <div className="section-divider mb-6 mx-auto"></div>
          <p className="text-gray-600 leading-relaxed mb-8">
            Thanks — we have your details and will be in touch to arrange your free inspection. If
            you would rather not wait, calling is the fastest way to reach us.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-jac-green text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-jac-lime hover:text-jac-green transition-colors"
          >
            <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
          </a>
          <p className="text-sm text-gray-500 mt-6">
            Prefer email?{' '}
            <a href={`mailto:${EMAIL}`} className="text-jac-green font-semibold underline">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------- compact */

  if (compact) {
    return (
      <form className={className} onSubmit={handleSubmit}>
        {hidden}
        <div>
          <input
            type="text"
            name="name"
            aria-label="Full name"
            autoComplete="name"
            placeholder="Full Name *"
            required
            className={field}
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            aria-label="Phone number"
            autoComplete="tel"
            placeholder="Phone Number *"
            required
            className={field}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            aria-label="Email address"
            autoComplete="email"
            placeholder="Email Address *"
            required
            className={field}
          />
        </div>
        <div>
          <select
            name="service"
            aria-label="Service needed"
            defaultValue=""
            required
            className={`${field} bg-white`}
          >
            {serviceOptions}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-jac-green text-white font-bold py-2.5 rounded flex items-center justify-center gap-2 hover:bg-jac-charcoal transition-colors text-sm mt-2"
        >
          Send Message
          <Send className="w-4 h-4" />
        </button>
      </form>
    );
  }

  /* ----------------------------------------------------------------- full */

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-1">{heading}</h2>
      <div className="section-divider mb-6"></div>
      {hidden}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}-first`} className={label}>
            First Name *
          </label>
          <input
            type="text"
            id={`${idPrefix}-first`}
            name="first_name"
            autoComplete="given-name"
            required
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-last`} className={label}>
            Last Name *
          </label>
          <input
            type="text"
            id={`${idPrefix}-last`}
            name="last_name"
            autoComplete="family-name"
            required
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className={label}>
          Email Address *
        </label>
        <input
          type="email"
          id={`${idPrefix}-email`}
          name="email"
          autoComplete="email"
          required
          className={field}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-phone`} className={label}>
          Phone Number *
        </label>
        <input
          type="tel"
          id={`${idPrefix}-phone`}
          name="phone"
          autoComplete="tel"
          required
          className={field}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-address`} className={label}>
          Property Address
        </label>
        <input
          type="text"
          id={`${idPrefix}-address`}
          name="address"
          autoComplete="street-address"
          placeholder={addressPlaceholder}
          className={field}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-service`} className={label}>
          Service Needed *
        </label>
        <select
          id={`${idPrefix}-service`}
          name="service"
          defaultValue=""
          required
          className={`${field} bg-white`}
        >
          {serviceOptions}
        </select>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className={label}>
          How Can We Help?
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          className={`${field} resize-none`}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-jac-lime text-jac-green py-4 rounded-full font-bold uppercase tracking-wide text-base hover:bg-jac-green hover:text-white transition-colors shadow-md flex items-center justify-center gap-2"
      >
        Submit Request <ArrowRight className="w-5 h-5" />
      </button>

      <p className="text-xs text-gray-500 text-center pt-2">
        Free inspection, no obligation. Or call{' '}
        <a href={PHONE_HREF} className="font-semibold text-jac-green">
          {PHONE_DISPLAY}
        </a>
        .
      </p>
    </form>
  );
}
