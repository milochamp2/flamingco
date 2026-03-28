import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/phone-mockup";

const capabilities = [
  "Missed-call text-back",
  "Automated follow-ups",
  "Review requests",
];

export function Hero() {
  return (
    <section className="py-[70px] bg-premium-hero relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #C2185B 0%, transparent 70%)" }} />
      <div className="absolute -bottom-20 -left-20 h-[350px] w-[350px] rounded-full opacity-[0.05] blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #1A1A2E 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-magenta-soft text-magenta text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="h-2 w-2 rounded-full bg-magenta animate-pulse-dot" />
              Built for Australian Plumbers
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight mb-5">
              Stop losing leads while you&apos;re{" "}
              <br className="hidden sm:block" />
              <em className="text-magenta">under the house</em>
            </h1>

            <p className="text-base text-text-mid mb-8 max-w-lg">
              FlamingCo builds websites and automation systems for Australian
              plumbing businesses — so missed calls get followed up, quotes get
              chased, and reviews come in without you having to ask.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild size="lg">
                <a href="#pricing">See How It Works &rarr;</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#solution">What&apos;s Included</a>
              </Button>
            </div>

            {/* Capability pills — honest, factual */}
            <div className="flex flex-wrap items-center gap-2">
              {capabilities.map((cap, i) => (
                <span
                  key={cap}
                  className="flex items-center gap-2 text-xs font-medium text-text-mid"
                >
                  <span className="bg-bg-alt border border-border-light text-navy px-3 py-1 rounded-full text-xs font-medium">
                    {cap}
                  </span>
                  {i < capabilities.length - 1 && (
                    <span className="text-border-light">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — phone mockup */}
          <div className="hidden lg:block">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
