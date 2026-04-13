export default function Founder() {
  return (
    <section id="founder" className="bg-[#F5F4F0] px-6 md:px-12 py-20">
      {/* Section label */}
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        FOUNDER / WHO WE ARE
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left: image */}
        <div className="relative order-2 md:order-1">
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img
              src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/5df5a428b7af601b91d4577e01c79bd5.jpeg"
              alt="Usman Kashmirwala — Founder, Better Call Bot"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#111111] px-6 py-5">
            <p className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1">FOUNDER &amp; DIRECTOR</p>
            <p className="font-['Anton'] text-xl text-[#F5F4F0]">USMAN KASHMIRWALA</p>
          </div>
        </div>

        {/* Right: copy */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <h2 className="font-['Anton'] text-[clamp(40px,5vw,72px)] leading-[0.92] text-[#111111] uppercase mb-2">
            USMAN<br /><span className="text-[#E63329]">KashmirWALA</span>
          </h2>
          <p className="font-['DM_Sans'] text-[13px] italic text-[#888888] mb-8 tracking-wide">
            BSc Economics | LUMS &apos;25
          </p>

          <div className="space-y-5 mb-10">
            <p className="font-['DM_Sans'] text-[18px] text-[#333333] leading-relaxed">
              I find where your time and money is leaking, repetitive tasks, slow responses, manual processes,&nbsp; and replace them with systems that run on their own.
            </p>
            <p className="font-['DM_Sans'] text-[18px] text-[#555555] leading-relaxed">
              Built BCB after watching founders burn hours on work that should never touch a human. There&apos;s a smarter way to run a business. I&apos;ll show you exactly where to start.
            </p>
            <p className="font-['DM_Sans'] text-[18px] text-[#555555] leading-relaxed">
              Economics background means I think in systems, incentives, and returns. Not just tech for tech&apos;s sake, automation that pays.
            </p>
          </div>

          {/* Credentials */}
          <div className="border-t border-[#CCCCCC] pt-8 grid grid-cols-2 gap-6">
            {[
              { label: 'EDUCATION', value: 'LUMS — BSc Economics, Class of \'25' },
              { label: 'BUILT', value: 'AI systems across 8 industries' },
              { label: 'PHILOSOPHY', value: 'Automation that pays, not tools that impress' },
              { label: 'BASED IN', value: 'Pakistan — serving clients globally' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-[#E63329] mb-1">{item.label}</p>
                <p className="font-['DM_Sans'] text-[17px] text-[#333333] leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}