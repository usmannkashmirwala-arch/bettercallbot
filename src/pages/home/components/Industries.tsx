const industries = [
  { name: 'E-COMMERCE', desc: 'Order tracking, returns, abandoned cart recovery, product recommendation agents.' },
  { name: 'REAL ESTATE', desc: 'Lead qualification, property inquiry bots, appointment scheduling, follow-up sequences.' },
  { name: 'HEALTHCARE', desc: 'Patient intake, appointment reminders, FAQ resolution, post-care follow-up automation.' },
  { name: 'LEGAL', desc: 'Intake forms, case status updates, document request handling, client communication flows.' },
  { name: 'FINANCE', desc: 'Client onboarding, document collection, query resolution, compliance-safe response handling.' },
  { name: 'EDUCATION', desc: 'Admissions queries, course information, student support, tuition & enrollment assistance.' },
  { name: 'HOSPITALITY', desc: 'Booking management, guest services, check-in automation, post-stay review collection.' },
  { name: 'SaaS', desc: 'Onboarding flows, feature support, churn prevention, upgrade prompts via AI conversations.' },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-[#F5F4F0] px-6 md:px-12 py-20">
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        INDUSTRIES WE SERVE
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#111111] uppercase">
          YOUR INDUSTRY.<br />OUR <span className="text-[#E63329]">SYSTEMS.</span>
        </h2>
        <p className="font-['DM_Sans'] text-[18px] text-[#555555] max-w-xs leading-relaxed">
          We&apos;ve built automation across sectors. The tech looks different, the result is always the same: more output, less manual work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className={`p-6 md:p-8 border-[#CCCCCC] border-b ${
              i % 4 !== 3 ? 'border-r-0 sm:border-r-0 md:border-r' : ''
            } group cursor-pointer hover:bg-[#111111] transition-colors duration-200`}
          >
            <p className="font-['Anton'] text-xl text-[#111111] uppercase mb-3 group-hover:text-[#D4FF00] transition-colors">
              {ind.name}
            </p>
            <p className="font-['DM_Sans'] text-[16px] text-[#777777] leading-relaxed group-hover:text-[#AAAAAA] transition-colors">
              {ind.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}