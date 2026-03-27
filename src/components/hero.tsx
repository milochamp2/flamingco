import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/phone-mockup";

export function Hero() {
  return (
    <section className="py-[70px] bg-white">
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
              We build automated growth systems for plumbing businesses — so
              every missed call gets a text back, every lead gets followed up,
              and every happy customer leaves a 5-star review. Automatically.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild size="lg">
                <a href="#pricing">Get Your Growth System &rarr;</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#solution">See How It Works</a>
              </Button>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="font-bold text-navy">93%</span>{" "}
                <span className="text-text-light">Leads Captured</span>
              </div>
              <div className="h-4 w-px bg-border-light" />
              <div>
                <span className="font-bold text-navy">24/7</span>{" "}
                <span className="text-text-light">Auto Follow-up</span>
              </div>
              <div className="h-4 w-px bg-border-light" />
              <div>
                <span className="font-bold text-navy">3x</span>{" "}
                <span className="text-text-light">More Reviews</span>
              </div>
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
