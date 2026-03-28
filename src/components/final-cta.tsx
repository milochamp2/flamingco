import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-[70px] bg-navy relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(194,24,91,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-on-scroll">
          Let&apos;s find out where you&apos;re losing leads —{" "}
          <em className="text-magenta">and fix it.</em>
        </h2>
        <p className="text-white/60 mb-8 animate-on-scroll max-w-xl mx-auto">
          Book a free 30-minute call. We&apos;ll walk through your current setup,
          identify the gaps, and show you exactly what a FlamingCo system would
          look like for your business. No obligation.
        </p>
        <div className="animate-on-scroll">
          <Button asChild size="lg">
            <a href="#pricing">Book a Free Strategy Call &rarr;</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
