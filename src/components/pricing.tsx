import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Custom-designed plumbing website",
  "Missed-call text-back system",
  "Automated SMS follow-up sequences",
  "Google review automation",
  "Lead tracking dashboard",
  "Mobile-optimised design",
  "Calendar booking integration",
  "Monthly performance reports",
  "Ongoing system optimisation",
  "Priority support",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-[70px] bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            One system. Everything included.
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto">
            No confusing tiers. No add-on fees. One complete system built for
            plumbing businesses — website, automations, and ongoing support.
          </p>
        </div>

        {/* Pricing card */}
        <div className="animate-on-scroll max-w-xl mx-auto bg-white border border-border-light rounded-2xl p-8">
          <h3 className="text-xl font-bold text-navy mb-1">
            The FlamingCo Plumber System
          </h3>
          <p className="text-sm text-text-mid mb-6">
            A done-for-you website and automation system built around your
            plumbing business — not a generic template.
          </p>

          {/* Price row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 mb-8">
            <div>
              <span className="text-3xl font-extrabold text-navy">
                AUD $397
              </span>
              <span className="text-sm text-text-light ml-1">/month</span>
            </div>
            <div className="hidden sm:block h-8 w-px bg-border-light" />
            <p className="text-sm text-text-mid">
              Setup fee discussed on your free strategy call
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2">
                <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-green-soft flex items-center justify-center">
                  <Check className="h-3 w-3 text-green" />
                </div>
                <span className="text-sm text-text-body">{f}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button asChild size="lg" className="w-full">
            <a href="#pricing">Book a Free Strategy Call &rarr;</a>
          </Button>

          <p className="text-xs text-text-light text-center mt-4">
            No lock-in contracts. Cancel monthly, anytime. Your website stays
            yours.
          </p>
        </div>
      </div>
    </section>
  );
}
