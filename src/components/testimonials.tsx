import Image from "next/image";
import { ArrowRight } from "lucide-react";

const workflows = [
  {
    label: "Workflow Demo",
    title: "Missed Call Text-Back",
    problem:
      "Every unanswered call while you're on-site is a potential job walking straight to the next plumber on Google.",
    solution:
      "The system detects a missed call and sends an automatic SMS within seconds — with a booking link and your business details.",
    outcome:
      "Enquiries stay warm. Leads don't disappear. You respond without lifting a finger.",
    icon: "📞",
  },
  {
    label: "Workflow Demo",
    title: "Automated Quote Follow-Up",
    problem:
      "Leads who request a quote go cold fast when there's no follow-up. Chasing manually takes time most plumbers don't have.",
    solution:
      "After a quote is sent, the system follows up automatically via SMS over the next few days — keeping the conversation open without any manual effort.",
    outcome:
      "Fewer quotes that disappear. Better conversion without the admin overhead.",
    icon: "💬",
  },
  {
    label: "Workflow Demo",
    title: "Post-Job Review Requests",
    problem:
      "Most satisfied customers don't leave reviews unless they're asked. Asking manually after every job is easy to forget and easy to skip.",
    solution:
      "After a job is marked complete, the system sends a follow-up message directing the customer to leave a Google review — automatically.",
    outcome:
      "A consistent flow of reviews built into your process, not bolted on as an afterthought.",
    icon: "⭐",
  },
];

export function Testimonials() {
  return (
    <section id="results" className="py-[70px] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-3">
            System in Action
          </p>
          <Image
            src="/logo/laurel leaf crown.png"
            alt="Laurel wreath"
            width={100}
            height={100}
            className="mx-auto mb-3 drop-shadow-sm"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            Real workflows. Built for plumbing businesses.
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto">
            These are examples of the automations we build into every system —
            designed around the specific ways plumbing businesses lose leads.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {workflows.map((w) => (
            <div
              key={w.title}
              className="animate-on-scroll bg-white border border-border-light rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Label */}
              <span className="inline-block text-xs font-semibold text-magenta bg-magenta-soft px-3 py-1 rounded-full mb-4 w-fit">
                {w.label}
              </span>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{w.icon}</span>
                <h3 className="font-bold text-navy text-base">{w.title}</h3>
              </div>

              {/* Problem → Solution → Outcome */}
              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-light mb-1">
                    The Problem
                  </p>
                  <p className="text-sm text-text-mid leading-relaxed">
                    {w.problem}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-3.5 w-3.5 text-magenta flex-shrink-0" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-light mb-1">
                    How It&apos;s Solved
                  </p>
                  <p className="text-sm text-text-mid leading-relaxed">
                    {w.solution}
                  </p>
                </div>
              </div>

              {/* Outcome pill */}
              <div className="mt-5 pt-4 border-t border-border-light">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-light mb-1.5">
                  Outcome
                </p>
                <p className="text-sm font-medium text-navy">{w.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
