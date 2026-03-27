import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I used to miss 5-6 calls a day on jobs. Now every one gets a text back instantly, and most book in. Like having a receptionist that never takes a day off.",
    name: "MP",
    role: "Residential Plumbing, Sydney",
  },
  {
    quote:
      "Went from 12 Google reviews to 67 in three months without asking a single customer myself. The system handles it. Phone rings way more now.",
    name: "DK",
    role: "Emergency Plumbing, Melbourne",
  },
  {
    quote:
      "The website paid for itself in the first week \u2014 three new customers found us on Google. The automations are icing on top. Best investment for my business.",
    name: "RJ",
    role: "Residential & Commercial, Brisbane",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="results" className="py-[70px] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Results that speak for themselves
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="animate-on-scroll bg-white border border-border-light rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-w-sm mx-auto md:max-w-none"
            >
              <Stars />
              <p className="text-sm text-text-mid mb-5 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-navy text-sm">{t.name}</p>
                <p className="text-xs text-text-light">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
