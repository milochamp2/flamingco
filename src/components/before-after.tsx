import { X, Check, ArrowRight } from "lucide-react";

const beforeItems = [
  {
    title: "Missed calls = lost jobs",
    desc: "$500-$2,000 walking away every time your phone goes to voicemail",
  },
  {
    title: "Quotes that disappear",
    desc: "No follow-up means warm leads go cold while you\u2019re on the tools",
  },
  {
    title: "Great work, no reviews",
    desc: "Your competitor has 200+ reviews because he has a system",
  },
  {
    title: "Feast or famine",
    desc: "Some weeks the phone won\u2019t stop. Other weeks, crickets.",
  },
];

const afterItems = [
  {
    title: "Every call captured",
    desc: "Missed calls get an instant text back \u2014 leads never slip away",
  },
  {
    title: "Automatic follow-ups",
    desc: "SMS sequences chase quotes so nothing falls through the cracks",
  },
  {
    title: "5-star reviews on autopilot",
    desc: "Every finished job triggers a review request automatically",
  },
  {
    title: "Consistent lead flow",
    desc: "A pipeline that works 24/7, even while you sleep",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-[70px] bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">
            The Problem &rarr; The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            What changes when you install a growth system
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto">
            Most plumbers don&apos;t have a lead problem. They have a systems
            problem.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Before card */}
          <div className="animate-on-scroll bg-white border border-border-light rounded-xl p-6">
            <span className="inline-block text-xs font-semibold text-red bg-red-soft px-3 py-1 rounded-full mb-5">
              Without a system
            </span>
            <div className="space-y-5">
              {beforeItems.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-red-soft flex items-center justify-center">
                    <X className="h-3.5 w-3.5 text-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">
                      {item.title}
                    </p>
                    <p className="text-text-mid text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-magenta flex items-center justify-center shadow-md">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="flex md:hidden items-center justify-center py-2">
            <div className="h-12 w-12 rounded-full bg-magenta flex items-center justify-center shadow-md rotate-90">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* After card */}
          <div className="animate-on-scroll bg-navy rounded-xl p-6 text-white">
            <span className="inline-block text-xs font-semibold text-magenta bg-magenta-soft px-3 py-1 rounded-full mb-5">
              With your growth system
            </span>
            <div className="space-y-5">
              {afterItems.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-green-soft flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
