import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Strategy Call",
    desc: "We learn your business, service areas, and where you\u2019re losing leads. 30 minutes, no sales pressure.",
  },
  {
    num: "2",
    title: "We Build It",
    desc: "Website, automations, dashboard \u2014 everything built, tested, and ready for you.",
  },
  {
    num: "3",
    title: "Go Live & Grow",
    desc: "System goes live. Leads flow, follow-ups run, reviews roll in. You just answer the phone.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-[70px] bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            Live in 14 days. Not 14 weeks.
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto">
            We handle everything. You just show up to one call, then sit back
            while we build your system.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="animate-on-scroll relative">
              <div className="bg-white border border-border-light rounded-xl p-6 text-center h-full">
                <div className="h-12 w-12 rounded-full bg-magenta-soft text-magenta font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-mid">{step.desc}</p>
              </div>

              {/* Arrow between cards on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-magenta" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
