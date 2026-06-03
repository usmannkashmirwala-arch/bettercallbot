const pillars = [
  {
    id: '01',
    icon: 'ri-timer-flash-line',
    name: '< 7 SECOND\nRESPONSE TIME',
    badge: 'ALWAYS ON',
    desc: 'Your customers get an answer in under 7 seconds, at 2am on a Sunday or during a Black Friday rush. No hold music. No ticket queues. No "we\'ll get back to you." Just instant, accurate replies — 24 hours a day, 365 days a year.',
    bullets: [
      'Responds in under 7 seconds, every time',
      'Zero downtime — no sick days, no holidays',
      'Handles 80%+ of queries without human input',
      'Trained on your products, policies, and tone of voice',
    ],
    stat: '<7s',
    statLabel: 'AVERAGE RESPONSE TIME, 24/7',
  },
  {
    id: '02',
    icon: 'ri-layout-grid-line',
    name: 'OMNI-CHANNEL\nDASHBOARD',
    badge: 'ONE INBOX',
    desc: 'One agent. Every platform. A single dashboard that pulls in every customer support conversation — WhatsApp, Instagram DMs, email, live chat, and your website. No more switching tabs, losing context, or missing messages buried in a channel nobody checked.',
    bullets: [
      'WhatsApp, Instagram, email & web — all in one place',
      'Single dashboard for your entire support team',
      'Full conversation history, never lose context',
      'Real-time ticket status across every channel',
    ],
    stat: '1',
    statLabel: 'DASHBOARD FOR ALL YOUR SUPPORT CHANNELS',
  },
  {
    id: '03',
    icon: 'ri-brain-line',
    name: 'KNOWS WHEN TO\nCALL A HUMAN',
    badge: 'SMART ESCALATION',
    desc: 'Not every conversation should stay with a bot. Our agent reads tone, frustration, and intent in real time. When a customer is upset, confused, or needs a judgment call, it hands off to a human instantly — with full context, so they don\'t have to repeat themselves.',
    bullets: [
      'Sentiment analysis on every message',
      'Detects frustration, urgency, and edge cases',
      'Seamless handoff with full conversation context',
      'Human takes over exactly when it matters most',
    ],
    stat: '0',
    statLabel: 'FRUSTRATED CUSTOMERS LEFT WITHOUT A HUMAN',
  },
];

export default function AIProducts() {
  return (
    <section id="services" className="bg-[#F5F4F0] px-6 md:px-12 py-20">
      {/* Section label */}
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        OUR CUSTOMER SUPPORT AI SYSTEM
      </p>
      <h2 className="font-['Anton'] text-[clamp(36px,6vw,80px)] leading-[0.92] text-[#111111] uppercase mb-4">
        One Agent.<br /><span className="text-[#E63329]">Every Channel. Zero Excuses.</span>
      </h2>
      <p className="font-['DM_Sans'] text-[20px] text-[#555555] max-w-xl mb-14 leading-relaxed">
        Built around three things every customer support system has to get right — speed, coverage, and knowing when a human needs to step in.
      </p>

      {/* 3-card grid */}
      <div className="border border-[#CCCCCC] grid grid-cols-1 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.id}
            className={`p-8 md:p-10 bg-[#F5F4F0] relative flex flex-col ${
              i < pillars.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#CCCCCC]' : ''
            }`}
          >
            {/* Icon + badge row */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-[#E63329]/30 text-[#E63329]">
                <i className={`${pillar.icon} text-[20px]`} />
              </div>
              <span className="font-['DM_Sans'] text-[8px] tracking-[0.25em] uppercase text-[#E63329] border border-[#E63329] px-2 py-1">
                {pillar.badge}
              </span>
            </div>

            {/* Ghost number */}
            <span className="font-['Anton'] text-[72px] leading-none text-[#E8E6E2] select-none absolute top-4 right-6">
              {pillar.id}
            </span>

            {/* Headline */}
            <h3 className="font-['Anton'] text-[clamp(22px,2.5vw,32px)] text-[#111111] uppercase leading-tight mb-4 whitespace-pre-line">
              {pillar.name}
            </h3>

            {/* Description */}
            <p className="font-['DM_Sans'] text-[16px] text-[#555555] leading-relaxed mb-6">
              {pillar.desc}
            </p>

            {/* Bullets */}
            <ul className="space-y-2 mb-10">
              {pillar.bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="text-[#E63329] mt-0.5 text-sm">→</span>
                  <p className="font-['DM_Sans'] text-[15px] text-[#666666]">{b}</p>
                </li>
              ))}
            </ul>

            {/* Stat */}
            <div className="mt-auto pt-6 border-t border-[#CCCCCC] flex items-end justify-between">
              <div />
              <div className="text-right">
                <p className="font-['Anton'] text-[clamp(32px,3vw,48px)] text-[#111111] leading-none">{pillar.stat}</p>
                <p className="font-['DM_Sans'] text-[9px] tracking-[0.15em] uppercase text-[#888888] mt-1 max-w-[140px] text-right">{pillar.statLabel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}
