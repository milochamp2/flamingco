import { X, Check, ArrowRight } from "lucide-react";

const beforeItems = [
  {
    title: "Missed calls become lost jobs",
    desc: "Every unanswered call while you're on-site is a potential customer calling the next plumber on Google.",
  },
  {
    title: "Quotes go cold with no follow-up",
    desc: "Without a system, warm leads go quiet while you're on the tools — and you're the one who loses the job.",
  },
  {
    title: "Good work, almost no reviews",
    desc: "Reviews don't come in automatically. If you're not asking consistently, they don't accumulate.",
  },
  {
    title: "Inconsistent lead flow",
    desc: "No pipeline means unpredictable revenue. Busy one week, quiet the next — with no visibility of what's coming.",
  },
];

const afterItems = [
  {
    title: "Every missed call gets a response",
    desc: "An instant text-back is sent automatically — keeping the lead warm before they call someone else.",
  },
  {
    title: "Follow-ups run without you",
    desc: "Quote sent and no reply? The system follows up for you over the next few days, automatically.",
  },
  {
    title: "Reviews come in after every job",
    desc: "Each completed job triggers a review request — building your Google presence without extra admin.",
  },
  {
    title: "A lead pipeline that runs 24/7",
    desc: "Every enquiry is tracked, responded to, and followed up — whether you're on-site or off the clock.",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-[70px] bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">
            The Gap Most Plumbers Don&apos;t See
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            It&apos;s not a lead problem. It&apos;s a systems problem.
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto">
            Most plumbing businesses have enough enquiries to grow — they&apos;re
            just losing them to slow response times, no follow-up, and no process.
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
              With a FlamingCo system
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
