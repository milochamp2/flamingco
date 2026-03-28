import { Check } from "lucide-react";

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
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            Your growth system, built and running in 14 days
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto">
            Everything you need to capture, convert, and keep more plumbing
            customers — built, tested, and managed for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {solutions.map((item, i) => (
            <div
              key={item.title}
              className="animate-on-scroll flex gap-3 bg-bg-alt border border-border-light rounded-xl p-5"
            >
              <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-green-soft flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-green" />
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">{item.title}</p>
                <p className="text-text-mid text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
