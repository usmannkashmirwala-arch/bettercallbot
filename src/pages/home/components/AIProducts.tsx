const signatureAgents = [
  {
    id: '01',
    name: 'CUSTOMER SUPPORT\nAGENT',
    badge: 'PROVEN SOLUTION',
    icon: 'ri-customer-service-2-line',
    desc: 'A 24/7 intelligent agent that handles every customer inquiry, resolves issues instantly, and escalates only when human judgment is genuinely needed. Trained on your exact product docs, brand voice, and workflows — not generic scripts.',
    bullets: [
      '24/7 availability, zero downtime',
      'Handles 80%+ of tickets without human input',
      'Multi-channel: web, WhatsApp, email',
      'Seamless handoff to human agents when needed',
    ],
    stat: '80%',
    statLabel: 'OF ALL QUERIES HANDLED AUTOMATICALLY',
  },
  {
    id: '02',
    name: 'CONTENT WRITING\nAGENT',
    badge: 'PROVEN SOLUTION',
    icon: 'ri-quill-pen-line',
    desc: 'An AI writing engine trained on your brand voice that produces on-brand content at scale — product descriptions, blog posts, email sequences, social media copy, and ad creative. Consistent tone, zero briefing time, instant output.',
    bullets: [
      'Trained on your brand voice & tone',
      'Blogs, emails, social & ad copy',
      'SEO-optimised, publication-ready outputs',
      'Scales to any content volume',
    ],
    stat: '10x',
    statLabel: 'CONTENT OUTPUT AT A FRACTION OF THE COST',
  },
  {
    id: '03',
    name: 'FINANCIAL OPS\nAGENT',
    badge: 'PROVEN SOLUTION',
    icon: 'ri-line-chart-line',
    desc: 'Automates your financial back-office — client onboarding, document collection, invoice queries, payment follow-ups, and compliance-safe response handling. Your finance team focuses on decisions, not admin tasks that eat their day.',
    bullets: [
      'Client onboarding & document collection',
      'Invoice & payment query handling',
      'Compliance-safe automated responses',
      'Integrates with your existing finance tools',
    ],
    stat: '70%',
    statLabel: 'OF FINANCE ADMIN TIME RECOVERED',
  },
];

export default function AIProducts() {
  return (
    <section id="services" className="bg-[#F5F4F0] px-6 md:px-12 py-20">
      {/* Section label */}
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        OUR SIGNATURE AGENTS
      </p>
      <h2 className="font-['Anton'] text-[clamp(36px,6vw,80px)] leading-[0.92] text-[#111111] uppercase mb-4">
        Three Agents.<br /><span className="text-[#E63329]">Proven Across Industries.</span>
      </h2>
      <p className="font-['DM_Sans'] text-[20px] text-[#555555] max-w-xl mb-14 leading-relaxed">
        We prescribe the right agent after auditing your business — not before. These are our three most deployed solutions, each built from a real operational problem.
      </p>

      {/* 3-card grid */}
      <div className="border border-[#CCCCCC] grid grid-cols-1 md:grid-cols-3">
        {signatureAgents.map((agent, i) => (
          <div
            key={agent.id}
            className={`p-8 md:p-10 bg-[#F5F4F0] relative flex flex-col ${
              i < signatureAgents.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#CCCCCC]' : ''
            }`}
          >
            {/* Icon + badge row */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-[#E63329]/30 text-[#E63329]">
                <i className={`${agent.icon} text-[20px]`} />
              </div>
              <span className="font-['DM_Sans'] text-[8px] tracking-[0.25em] uppercase text-[#E63329] border border-[#E63329] px-2 py-1">
                {agent.badge}
              </span>
            </div>

            {/* Ghost number */}
            <span className="font-['Anton'] text-[72px] leading-none text-[#E8E6E2] select-none absolute top-4 right-6">
              {agent.id}
            </span>

            {/* Headline */}
            <h3 className="font-['Anton'] text-[clamp(22px,2.5vw,32px)] text-[#111111] uppercase leading-tight mb-4 whitespace-pre-line">
              {agent.name}
            </h3>

            {/* Description */}
            <p className="font-['DM_Sans'] text-[16px] text-[#555555] leading-relaxed mb-6">
              {agent.desc}
            </p>

            {/* Bullets */}
            <ul className="space-y-2 mb-10">
              {agent.bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="text-[#E63329] mt-0.5 text-sm">→</span>
                  <p className="font-['DM_Sans'] text-[15px] text-[#666666]">{b}</p>
                </li>
              ))}
            </ul>

            {/* Stat overlay */}
            <div className="mt-auto pt-6 border-t border-[#CCCCCC] flex items-end justify-between">
              <div />
              <div className="text-right">
                <p className="font-['Anton'] text-[clamp(32px,3vw,48px)] text-[#111111] leading-none">{agent.stat}</p>
                <p className="font-['DM_Sans'] text-[9px] tracking-[0.15em] uppercase text-[#888888] mt-1 max-w-[140px] text-right">{agent.statLabel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}
