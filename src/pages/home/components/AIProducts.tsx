interface AIProductsProps {
  onBookAudit: () => void;
}

const products = [
  {
    id: '01',
    icon: 'ri-customer-service-2-line',
    name: 'OMNI-CHANNEL\nAI SUPPORT',
    badge: 'FROM $100/MO',
    hook: 'Answers in under 4 seconds. Every hour of every day.',
    tags: ['<4s response', '24/7 · 365', 'Every channel, one inbox'],
    stat: '<4s',
    statLabel: 'RESPONSE TIME, DAY OR NIGHT',
    accent: 'red' as const,
  },
  {
    id: '02',
    icon: 'ri-shopping-bag-3-line',
    name: 'AI SHOPPING\nASSISTANT',
    badge: 'ASSISTED SHOPPING',
    hook: "Doesn't just answer. It sells.",
    tags: ['Personal picks', 'Nudges to buy', 'Guides the unsure'],
    stat: 'SELLS',
    statLabel: 'WHILE YOU SLEEP',
    accent: 'lime' as const,
  },
];

export default function AIProducts({ onBookAudit }: AIProductsProps) {
  return (
    <section id="services" className="px-6 md:px-12 py-20">
      {/* Section label */}
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        OUR PRODUCTS
      </p>
      <h2 className="font-['Anton'] text-[clamp(36px,6vw,80px)] leading-[0.92] text-[#111111] uppercase mb-14">
        Spend Less.<br /><span className="text-[#E63329]">Sell More.</span>
      </h2>

      {/* 2-card grid */}
      <div className="border border-[#CCCCCC] grid grid-cols-1 md:grid-cols-2">
        {products.map((product, i) => (
          <div
            key={product.id}
            className={`p-8 md:p-12 bg-[#F5F4F0] relative flex flex-col ${
              i < products.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#CCCCCC]' : ''
            }`}
          >
            {/* Icon + badge row */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 flex items-center justify-center border border-[#E63329]/30 text-[#E63329]">
                <i className={`${product.icon} text-[24px]`} />
              </div>
              <span className="font-['DM_Sans'] text-[8px] tracking-[0.25em] uppercase text-[#E63329] bg-[#F5F4F0] border border-[#E63329] px-2 py-1 relative z-10">
                {product.badge}
              </span>
            </div>

            {/* Ghost number */}
            <span className="font-['Anton'] text-[72px] leading-none text-[#E8E6E2] select-none absolute top-6 right-8 z-0">
              {product.id}
            </span>

            {/* Headline */}
            <h3 className="font-['Anton'] text-[clamp(26px,3vw,40px)] text-[#111111] uppercase leading-tight mb-4 whitespace-pre-line">
              {product.name}
            </h3>

            {/* One-line hook — no explanation, just curiosity */}
            <p className="font-['DM_Sans'] text-[18px] text-[#333333] leading-snug mb-8">
              {product.hook}
            </p>

            {/* Tag pills, not sentences */}
            <div className="flex flex-wrap gap-2 mb-10">
              {product.tags.map((t) => (
                <span
                  key={t}
                  className="font-['DM_Sans'] text-[10px] tracking-[0.1em] uppercase text-[#555555] border border-[#CCCCCC] px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Stat + CTA */}
            <div className="mt-auto pt-6 border-t border-[#CCCCCC] flex items-end justify-between gap-4">
              <button
                onClick={onBookAudit}
                className="font-['DM_Sans'] text-[11px] tracking-[0.12em] uppercase font-semibold border border-[#111111] px-4 py-2.5 cursor-pointer whitespace-nowrap hover:bg-[#111111] hover:text-[#F5F4F0] transition-colors"
              >
                SEE IT WORK →
              </button>
              <div className="text-right">
                <p className="font-['Anton'] text-[clamp(28px,3vw,44px)] text-[#111111] leading-none">{product.stat}</p>
                <p className="font-['DM_Sans'] text-[9px] tracking-[0.15em] uppercase text-[#888888] mt-1 max-w-[140px] text-right">{product.statLabel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}
