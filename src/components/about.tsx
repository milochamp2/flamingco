import Image from "next/image";

export function About() {
  return (
    <section className="py-[70px]" style={{ background: "rgba(194,24,91,0.03)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Brand card — intentional, not placeholder */}
          <div className="animate-on-scroll">
            <div className="rounded-2xl bg-navy flex flex-col items-center justify-center py-14 px-10 max-w-sm mx-auto lg:mx-0">
              <Image
                src="/logo/flamingco.png"
                alt="FlamingCo"
                width={80}
                height={80}
                className="mb-5 drop-shadow-md"
              />
              <p className="text-white font-bold text-lg text-center">
                FlamingCo
              </p>
              <p className="text-white/50 text-sm text-center mt-1">
                Websites &amp; Automation for Australian Plumbers
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll">
            <p className="text-sm font-semibold text-magenta mb-2">
              About FlamingCo
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
              Built specifically for plumbing businesses. Not adapted for them.
            </h2>

            <blockquote className="border-l-4 border-magenta pl-4 mb-6 text-text-mid italic">
              &ldquo;The best plumbers I came across were losing work to
              competitors with worse skills and better systems. That gap
              shouldn&apos;t exist &mdash; so I built something to close it.&rdquo;
            </blockquote>

            <p className="text-text-mid mb-4">
              FlamingCo helps plumbing businesses turn missed opportunities into
              booked jobs through better websites, faster lead response, and
              automation systems that run in the background — without extra admin
              or technical overhead.
            </p>
            <p className="text-text-mid mb-6">
              Every system is purpose-built for trade businesses: the workflows,
              the follow-up logic, the review prompts — all designed around how
              plumbing leads actually behave. Not recycled from a generic agency
              template.
            </p>

            <div>
              <p className="font-bold text-navy">AJ</p>
              <p className="text-sm text-magenta font-medium">
                Founder, FlamingCo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
