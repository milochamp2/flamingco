import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Custom-built plumbing website",
  "Front-end + back-end website system",
  "Missed-call text-back system",
  "Automated SMS + email follow-ups",
  "Chatbot + enquiry automation",
  "Lead capture system",
  "Lead tracking dashboard",
  "Calendar booking integration",
  "API integrations",
  "Google review request automation",
  "Mobile-optimised design",
  "Monthly performance insights",
  "Ongoing system optimisation",
  "Priority support",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-[70px] bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            Built for your business. Priced on your call.
          </h2>
          <p className="text-text-mid max-w-xl mx-auto">
            Every system is custom-scoped. No fixed packages, no generic
            bundles — just a system built around how your business actually works.
          </p>
        </div>

        {/* Card */}
        <div className="animate-on-scroll max-w-2xl mx-auto bg-white border border-border-light rounded-2xl overflow-hidden">

          {/* Card header band */}
          <div className="bg-navy px-8 py-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-magenta mb-1">
              The FlamingCo System
            </p>
            <h3 className="text-xl font-bold text-white mb-2">
              A custom-built website and automation system designed around your
              plumbing business — your goals, your workflow, your growth.
            </h3>
          </div>

          <div className="px-8 py-7">
            {/* Tailored setup notice */}
            <div className="flex items-start gap-3 bg-magenta-soft border border-magenta/10 rounded-xl px-4 py-4 mb-7">
              <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-magenta flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">
                  Tailored Setup
                </p>
                <p className="text-sm text-text-mid mt-0.5">
                  Every system is built based on your business, lead flow, and
                  goals. Pricing is discussed during your free strategy call.
                </p>
              </div>
            </div>

            {/* Divider with label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-border-light" />
              <p className="text-[11px] font-semibold uppercase tracking-widest text-text-light">
                What&apos;s Included
              </p>
              <div className="flex-1 h-px bg-border-light" />
            </div>

            {/* Mini value line */}
            <p className="text-sm text-text-mid text-center mb-5">
              Capture every lead. Respond faster. Follow up automatically.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-green-soft flex items-center justify-center">
                    <Check className="h-3 w-3 text-green" />
                  </div>
                  <span className="text-sm text-text-body leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {/* No generic packages line */}
            <p className="text-xs text-center text-text-light mb-6">
              No generic packages. No one-size-fits-all systems.
            </p>

            {/* CTA */}
            <Button asChild size="lg" className="w-full text-base">
              <a href="https://calendly.com/alananoaj/mvp-call" target="_blank" rel="noopener noreferrer">Book Your Free Strategy Call &rarr;</a>
            </Button>

            <p className="text-xs text-text-light text-center mt-4 leading-relaxed">
              We&apos;ll map out your system, show you exactly how it works, and
              give you a clear plan — no pressure.
            </p>

            {/* Trust footer */}
            <div className="mt-6 pt-5 border-t border-border-light text-center">
              <p className="text-xs text-text-light">
                No lock-in contracts. Cancel monthly, anytime. Your website
                stays yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
