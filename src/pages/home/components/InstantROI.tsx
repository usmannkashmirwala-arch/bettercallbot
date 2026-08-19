const stats = [
  { value: '4×', label: 'more leads converted', sub: 'With the same amount of Ad budget spent' },
  { value: '$3.70', label: 'in value delivered', sub: 'Per dollar invested' },
  { value: '90%', label: 'queries handled', sub: 'Without human intervention' },
  { value: '71%', label: 'Increase', sub: 'In customer satisfaction' },
];

export default function InstantROI() {
  return (
    <section id="roi" className="px-6 md:px-12 py-20">
      {/* Section label */}
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        THE RESULTS
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#111111] uppercase">
          THE NUMBERS<br />TELL THE <span className="text-[#E63329]">TRUTH</span>
        </h2>
        <p className="font-['DM_Sans'] text-[14px] tracking-[0.1em] uppercase text-[#555555] max-w-sm">
          Real clients. Real numbers.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-[#CCCCCC]">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className={`p-8 md:p-10 ${i < stats.length - 1 ? 'border-b sm:border-b-0 border-r-0 sm:border-r border-[#CCCCCC]' : ''}`}
          >
            <p className="font-['Anton'] text-[clamp(48px,6vw,80px)] text-[#111111] leading-none mb-3">
              {stat.value}
            </p>
            <p className="font-['DM_Sans'] text-[17px] font-semibold text-[#111111] uppercase tracking-wider mb-2">
              {stat.label}
            </p>
            <p className="font-['DM_Sans'] text-[16px] text-[#888888] leading-relaxed">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="mt-20">
        <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-10">HOW IT WORKS</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#CCCCCC]">
          {[
            { step: '01', title: 'AUDIT', desc: 'Map every bottleneck.' },
            { step: '02', title: 'PRESCRIBE', desc: 'Right agent, right ROI.' },
            { step: '03', title: 'BUILD & SCALE', desc: 'Live in days, not months.' },
          ].map((item, i) => (
            <div
              key={item.step}
              className={`pt-8 pb-8 pr-8 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-[#CCCCCC]' : ''} ${i > 0 ? 'md:pl-8' : ''}`}
            >
              <p className="font-['Anton'] text-7xl text-[#E5E3DF] leading-none mb-6">{item.step}</p>
              <h3 className="font-['Anton'] text-2xl text-[#111111] uppercase mb-3">{item.title}</h3>
              <p className="font-['DM_Sans'] text-[15px] tracking-[0.05em] uppercase text-[#888888]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}