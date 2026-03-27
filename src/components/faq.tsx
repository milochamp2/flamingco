"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "I\u2019ve been burned by marketing agencies before. How is this different?",
    a: "We\u2019re not a marketing agency. We don\u2019t run ads, write blogs, or do SEO. We build systems \u2014 a website that converts, automations that follow up, and tools that get you reviews. Everything is built specifically for plumbing businesses, not recycled from a template. And there\u2019s no lock-in contract \u2014 if it\u2019s not working, you can cancel anytime.",
  },
  {
    q: "How long until I see results?",
    a: "Your system goes live within 14 days of our strategy call. Most clients see their first leads and reviews within the first week of going live. The missed-call text-back works from day one \u2014 every missed call gets an instant response.",
  },
  {
    q: "I\u2019m not tech-savvy at all. Will I be able to use this?",
    a: "Absolutely. The whole point is that the system runs automatically. You don\u2019t need to log into anything, update anything, or learn any software. You just answer your phone and do your job \u2014 the system handles the rest. And if you ever need help, we\u2019re one message away.",
  },
  {
    q: "What if I already have a website?",
    a: "That\u2019s fine! We\u2019ll build you a new one that\u2019s designed to convert visitors into booked jobs. Your old site can stay live while we build, and we\u2019ll handle the switchover when you\u2019re ready. If you prefer, we can also integrate our automation system with your existing site.",
  },
  {
    q: "What\u2019s included in the monthly fee?",
    a: "The $397/month covers hosting, SMS costs, automation platform access, review management, your lead dashboard, ongoing system optimisation, and priority support. Think of it as your digital receptionist, follow-up system, and review manager \u2014 all in one. Most plumbers spend more than that on a single missed job.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-[70px] bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <p className="text-sm font-semibold text-magenta mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Frequently asked questions
          </h2>
        </div>

        <div className="animate-on-scroll">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
