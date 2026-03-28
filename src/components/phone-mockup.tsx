export function PhoneMockup() {
  return (
    <div className="relative px-6">
      {/* Ambient glow behind phone */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C2185B 0%, transparent 70%)" }}
      />

      {/* Floating badge top-left */}
      <div className="absolute -top-3 -left-2 z-10 animate-float glass-card rounded-2xl px-4 py-2.5">
        <p className="text-sm font-bold text-navy">47 Leads</p>
        <p className="text-xs text-text-light">this month</p>
      </div>

      {/* Floating badge bottom-right */}
      <div className="absolute -bottom-3 -right-2 z-10 animate-float-delayed glass-card rounded-2xl px-4 py-2.5">
        <p className="text-sm font-bold text-navy">4.9&#9733; Google</p>
        <p className="text-xs text-text-light">rating</p>
      </div>

      {/* Phone frame */}
      <div className="glass-card rounded-3xl shadow-2xl p-5 max-w-xs mx-auto relative z-0">
        <div className="space-y-3">
          <div className="notification-1 bg-green-soft/80 rounded-xl p-3 border border-green/20">
            <span className="inline-block text-[10px] font-semibold bg-green text-white px-2 py-0.5 rounded-full mb-1">
              New Lead
            </span>
            <p className="text-xs text-navy font-medium">
              Sarah M. needs a hot water system replaced in Parramatta
            </p>
          </div>

          <div className="notification-2 bg-blue-50/80 rounded-xl p-3 border border-blue-200/60">
            <span className="inline-block text-[10px] font-semibold bg-blue-500 text-white px-2 py-0.5 rounded-full mb-1">
              Auto SMS
            </span>
            <p className="text-xs text-navy font-medium">
              Hi Sarah! Thanks for reaching out. Book your free quote here &rarr;
            </p>
          </div>

          <div className="notification-3 bg-amber-50/80 rounded-xl p-3 border border-amber-200/60">
            <span className="inline-block text-[10px] font-semibold bg-amber-500 text-white px-2 py-0.5 rounded-full mb-1">
              Booking
            </span>
            <p className="text-xs text-navy font-medium">
              Sarah booked for Tuesday 9AM — added to calendar
            </p>
          </div>

          <div className="notification-4 bg-magenta-soft/80 rounded-xl p-3 border border-magenta/20">
            <span className="inline-block text-[10px] font-semibold bg-magenta text-white px-2 py-0.5 rounded-full mb-1">
              Review
            </span>
            <p className="text-xs text-navy font-medium">
              Mark T. left a &#9733;&#9733;&#9733;&#9733;&#9733; review on Google!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
