import Image from "next/image";
import { ExternalLink } from "lucide-react";

const cases = [
  {
    name: "BudgetFlow",
    category: "Web App",
    desc: "Smart personal finance and budget planning app. Private, fast, and built with Next.js — all data stored locally on device.",
    url: "https://financial-budget-planning.vercel.app/",
    logo: "/logo/budgetflow logo/budgetflow.png",
    logoBg: "#1a1033",
    tag: "Personal Project",
    objectFit: "cover" as const,
  },
  {
    name: "Bayliss Building Group",
    category: "Corporate Website",
    desc: "Commercial construction & carpentry company in Victoria with 15+ years and 200+ projects. Built for credibility and lead generation.",
    url: "https://bayliss-building-group.vercel.app/",
    logo: "/logo/bayliss bldg group logo/bayliss logo.png",
    logoBg: "#1a1a1a",
    tag: "Client",
    objectFit: "contain" as const,
  },
  {
    name: "HyperFit",
    category: "Gym & Fitness",
    desc: "Mitcham's premier functional training hub. Full-service gym website with classes, memberships, and recovery services.",
    url: "https://hyperfit.com.au/",
    logo: "/logo/hyperfit logo/hyperfit.png",
    logoBg: "#0a0a0a",
    tag: "Client — Live",
    objectFit: "contain" as const,
  },
  {
    name: "Epic Party Hire",
    category: "Event Hire",
    desc: "Party equipment hire across Melbourne — slushie machines, photo booths, giant letters, and outdoor cinemas. Built to convert.",
    url: "https://www.epicpartyhire.com.au/",
    logo: "/logo/epic party hire logo/eph logo.png",
    logoBg: "#111111",
    tag: "Client — Live",
    objectFit: "cover" as const,
  },
  {
    name: "Mitcham Recovery Hub",
    category: "Health & Wellness",
    desc: "Recovery and wellness centre in Mitcham. Clean, conversion-focused website built to drive bookings.",
    url: "https://themitchamrecoveryhub.com.au/",
    logo: "/logo/mitcham recovery hub logo/recovery hub logo.png",
    logoBg: "#0d1a2e",
    tag: "Client — Live",
    objectFit: "contain" as const,
  },
];

export function CaseStudies() {
  return (
    <section className="py-[70px] bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">Our Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            Real websites. Real results.
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto">
            Every site we build is fast, mobile-first, and designed to convert
            visitors into paying customers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll group bg-white border border-border-light rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Logo thumbnail */}
              <div
                className="relative h-44 w-full overflow-hidden"
                style={{ backgroundColor: c.logoBg }}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    c.objectFit === "cover"
                      ? "object-cover"
                      : "object-contain p-6"
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Tag overlay */}
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <p className="font-bold text-navy">{c.name}</p>
                    <p className="text-xs text-magenta font-medium">
                      {c.category}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-text-light flex-shrink-0 mt-0.5 group-hover:text-magenta transition-colors" />
                </div>
                <p className="text-sm text-text-mid leading-relaxed">{c.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
