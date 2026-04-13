interface PricingProps {
  onBookAudit: () => void;
}

const features = [
  'Unlimited agents & automations',
  'Custom integrations & APIs',
  'Dedicated POC',
  'Unlimited changes to Agents',
  'Weekly monitoring & tuning',
  'Audit for inefficiencies',
  'Quarterly business reviews',
];

export default function Pricing({ onBookAudit }: PricingProps) {
  return (
    <section id="pricing" className="bg-[#F5F4F0] px-6 md:px-12 py-20">
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        TRANSPARENT PRICING PLANS
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#111111] uppercase">
          NO SURPRISES.<br />NO <span className="text-[#E63329]">FLUFF.</span>
        </h2>
        <p className="font-['DM_Sans'] text-[18px] text-[#555555] max-w-xs leading-relaxed">
          You know what you&apos;re getting and what you&apos;re paying. That&apos;s the deal.
        </p>
      </div>

      {/* Single Enterprise Card */}
      <div className="border border-[#CCCCCC]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Plan info */}
          <div className="bg-[#111111] p-10 md:p-14 flex flex-col justify-between">
            <div>
              <span className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase px-2 py-1 bg-[#D4FF00] text-[#111111]">
                for all kind of businesses and teams
              </span>

              <h3 className="font-['Anton'] text-5xl uppercase mt-8 mb-3 text-[#F5F4F0]">
                ENTERPRISE
              </h3>

              <div className="flex items-end gap-1 mb-6">
                <span className="font-['Anton'] text-[clamp(48px,5vw,72px)] leading-none text-[#D4FF00]">
                  CUSTOM
                </span>
              </div>

              <p className="font-['DM_Sans'] text-[18px] leading-relaxed text-[#AAAAAA] max-w-sm">
                Since every business has unique needs and we don't want to overcommit, we only quote a price once we know a little about your work.&nbsp;
              </p>
            </div>

            <button
              onClick={onBookAudit}
              className="font-['DM_Sans'] text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-5 cursor-pointer whitespace-nowrap transition-colors bg-[#D4FF00] text-[#111111] hover:bg-[#c5f000] mt-12 self-start"
            >
              BOOK A CALL →
            </button>
          </div>

          {/* Right: Features */}
          <div className="bg-[#F5F4F0] p-10 md:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#CCCCCC]">
            <p className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-8">
              WHAT&apos;S INCLUDED
            </p>
            <div className="space-y-5">
              {features.map((feat) => (
                <div key={feat} className="flex gap-4 items-start">
                  <span className="mt-0.5 text-sm text-[#E63329]">→</span>
                  <p className="font-['DM_Sans'] text-[18px] text-[#333333]">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="font-['DM_Sans'] text-[16px] text-[#888888] mt-6 text-center">
        All plans include a free audit session. No lock-in contracts. Cancel anytime.
      </p>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}
