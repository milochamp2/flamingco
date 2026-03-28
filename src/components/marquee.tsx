const items = [
  "Residential Plumbing",
  "Emergency Call-Outs",
  "Hot Water Systems",
  "Gas Fitting",
  "Blocked Drains",
  "Commercial Plumbing",
  "Leak Detection",
  "Pipe Relining",
  "Bathroom Renovations",
  "Roof Plumbing",
  "Solar Hot Water",
  "Water Filter Systems",
  "Stormwater Drainage",
  "Backflow Prevention",
  "New Home Plumbing",
];

function MarqueeDot() {
  return (
    <span className="mx-5 text-magenta opacity-40 font-bold select-none">
      ✦
    </span>
  );
}

export function Marquee() {
  // Duplicate items for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <section className="py-5 bg-navy border-y border-white/5 overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-sm font-medium text-white/50 whitespace-nowrap"
            >
              {item}
              <MarqueeDot />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
