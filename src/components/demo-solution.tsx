import { Check, Play } from "lucide-react";

const solutions = [
  {
    title: "Professional Website",
    desc: "Fast, mobile-first, converts visitors into booked jobs.",
  },
  {
    title: "Missed-Call Text-Back",
    desc: "Every missed call gets an instant text with a booking link.",
  },
  {
    title: "Automated Follow-Ups",
    desc: "SMS sequences that chase up quotes and keep leads warm.",
  },
  {
    title: "Review Automation",
    desc: "After every job, customers get a review request automatically.",
  },
  {
    title: "Lead Dashboard",
    desc: "Every lead, booking, and follow-up in one place.",
  },
];

export function DemoSolution() {
  return (
    <section id="solution" className="py-[70px] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video placeholder */}
          <div className="animate-on-scroll relative aspect-video bg-bg-alt rounded-xl border border-border-light flex items-center justify-center overflow-hidden">
            <div className="h-16 w-16 rounded-full bg-magenta flex items-center justify-center shadow-lg cursor-pointer hover:bg-magenta-hover transition-colors">
              <Play className="h-6 w-6 text-white ml-1" fill="white" />
            </div>
            <span className="absolute bottom-4 left-4 text-xs font-medium text-text-mid bg-white/80 backdrop-blur px-3 py-1 rounded-full">
              &#9654; Watch 2-min demo
            </span>
          </div>

          {/* Content */}
          <div className="animate-on-scroll">
            <p className="text-sm font-semibold text-magenta mb-2">
              What You Get
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Your growth system, built and running in 14 days
            </h2>
            <p className="text-text-mid mb-6">
              Everything you need to capture, convert, and keep more plumbing
              customers — built, tested, and managed for you.
            </p>

            <div className="space-y-4">
              {solutions.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-green-soft flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-green" />
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
        </div>
      </div>
    </section>
  );
}
