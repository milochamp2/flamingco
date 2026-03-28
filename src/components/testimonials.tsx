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

function LaurelWreath() {
  return (
    <svg
      width="140"
      height="52"
      viewBox="0 0 140 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-1"
      aria-hidden="true"
    >
      {/* Left branch stem */}
      <path
        d="M8 46 C16 30 28 18 46 10"
        stroke="#C2185B"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Left leaves */}
      <ellipse cx="11" cy="42" rx="7" ry="3.5" transform="rotate(-40 11 42)" fill="#C2185B" opacity="0.55" />
      <ellipse cx="18" cy="33" rx="7" ry="3.5" transform="rotate(-55 18 33)" fill="#C2185B" opacity="0.6" />
      <ellipse cx="27" cy="24" rx="7" ry="3.5" transform="rotate(-65 27 24)" fill="#C2185B" opacity="0.65" />
      <ellipse cx="37" cy="16" rx="7" ry="3.5" transform="rotate(-75 37 16)" fill="#C2185B" opacity="0.7" />
      <ellipse cx="48" cy="10" rx="7" ry="3.5" transform="rotate(-82 48 10)" fill="#C2185B" opacity="0.75" />

      {/* Right branch stem */}
      <path
        d="M132 46 C124 30 112 18 94 10"
        stroke="#C2185B"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Right leaves */}
      <ellipse cx="129" cy="42" rx="7" ry="3.5" transform="rotate(40 129 42)" fill="#C2185B" opacity="0.55" />
      <ellipse cx="122" cy="33" rx="7" ry="3.5" transform="rotate(55 122 33)" fill="#C2185B" opacity="0.6" />
      <ellipse cx="113" cy="24" rx="7" ry="3.5" transform="rotate(65 113 24)" fill="#C2185B" opacity="0.65" />
      <ellipse cx="103" cy="16" rx="7" ry="3.5" transform="rotate(75 103 16)" fill="#C2185B" opacity="0.7" />
      <ellipse cx="92" cy="10" rx="7" ry="3.5" transform="rotate(82 92 10)" fill="#C2185B" opacity="0.75" />

      {/* Bottom ribbon knot */}
      <path
        d="M62 50 C65 46 70 44 75 44 C80 44 85 46 78 50 C75 48 70 47 65 48 Z"
        fill="#C2185B"
        opacity="0.5"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
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
          <LaurelWreath />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-1">
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
