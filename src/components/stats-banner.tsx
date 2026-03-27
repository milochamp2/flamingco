const stats = [
  { value: "93", accent: "%", label: "Leads Captured" },
  { value: "<5", accent: "s", label: "Response Time" },
  { value: "3", accent: "x", label: "More Reviews" },
  { value: "14", accent: "d", label: "Setup Time" },
];

export function StatsBanner() {
  return (
    <section className="py-[70px] bg-navy">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="animate-on-scroll">
              <p className="text-4xl sm:text-5xl font-extrabold text-white">
                {stat.value}
                <span className="text-magenta">{stat.accent}</span>
              </p>
              <p className="text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
