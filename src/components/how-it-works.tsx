const steps = [
  {
    num: "01",
    label: "Missed Call or Enquiry",
    title: "Lead Comes In",
    desc: "A potential customer calls or submits an enquiry — even while you're mid-job, on the tools, or unavailable.",
  },
  {
    num: "02",
    label: "Automated SMS",
    title: "Instant Response",
    desc: "The system responds within seconds with a personalised message and booking link. No delays. No lost leads.",
  },
  {
    num: "03",
    label: "Automated Follow-Up",
    title: "Lead is Nurtured",
    desc: "If they don't book straight away, the system follows up automatically over the next few days — so nothing falls through the cracks.",
  },
  {
    num: "04",
    label: "Confirmed Booking",
    title: "Job is Booked",
    desc: "The lead converts, the job lands in your calendar, and you didn't have to chase once. The system handled it.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-[70px] bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">Lead Flow</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            From missed call to booked job — automatically.
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto">
            Every lead that contacts your business goes through a structured
            response and follow-up process — without you doing a thing.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border-light z-0" />

          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="animate-on-scroll flex flex-col items-center md:items-start text-center md:text-left">
                {/* Number bubble */}
                <div className="h-16 w-16 rounded-full bg-white border-2 border-magenta flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="text-magenta font-extrabold text-sm">
                    {step.num}
                  </span>
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-widest text-magenta mb-2">
                  {step.label}
                </span>
                <h3 className="text-base font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-mid leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
