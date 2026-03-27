export function About() {
  return (
    <section className="py-[70px]" style={{ background: "rgba(194,24,91,0.03)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="animate-on-scroll">
            <div className="rounded-2xl bg-gradient-to-br from-magenta-soft to-purple-100 p-12 flex flex-col items-center justify-center aspect-square max-w-sm mx-auto lg:mx-0">
              <div className="h-24 w-24 rounded-full bg-magenta flex items-center justify-center text-white text-3xl font-bold mb-4">
                AJ
              </div>
              <p className="text-sm text-text-mid">Your photo here</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll">
            <p className="text-sm font-semibold text-magenta mb-2">
              Meet the founder
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
              I build systems so plumbers can focus on plumbing
            </h2>

            <blockquote className="border-l-4 border-magenta pl-4 mb-6 text-text-mid italic">
              &ldquo;I noticed the best plumbers were losing jobs to competitors
              with worse skills but better systems. That didn&apos;t sit right
              with me &mdash; so I built something to fix it.&rdquo;
            </blockquote>

            <p className="text-text-mid mb-4">
              I&apos;m a systems developer specialising in automation for trade
              businesses. I&apos;ve spent years building the kind of digital
              infrastructure that big companies take for granted &mdash; and
              packaging it up so local plumbing businesses can use it too.
            </p>
            <p className="text-text-mid mb-6">
              Every system I build is designed to do one thing: make sure no lead
              ever slips through the cracks again. If your phone rings and you
              can&apos;t answer it, my system handles it. If a customer is happy
              but forgets to leave a review, my system nudges them. It all runs
              in the background while you focus on the work you&apos;re best at.
            </p>

            <p>
              <span className="font-bold text-navy">AJ</span>{" "}
              <span className="text-magenta font-medium">
                Founder, Flamingo Digital
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
