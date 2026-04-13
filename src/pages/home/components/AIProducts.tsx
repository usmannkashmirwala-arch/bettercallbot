const subWorkflows = [
  {
    id: '01',
    name: 'LEAD QUALIFICATION',
    desc: 'Automatically qualifies inbound leads in real time — scoring intent, filtering tire-kickers, and routing hot prospects directly to your sales pipeline. Your team only speaks to people ready to buy.',
    tag: 'SUB-WORKFLOW',
    icon: 'ri-user-search-line',
  },
  {
    id: '02',
    name: 'SHOPIFY INTEGRATION',
    desc: 'Connects directly to your Shopify store to provide customers with live order status, shipping updates, and product info — all without a human in the loop.',
    tag: 'SUB-WORKFLOW',
    icon: 'ri-shopping-bag-3-line',
  },
  {
    id: '03',
    name: 'CRM SETUP & LEAD FORMATTING',
    desc: 'Every conversation is structured, tagged, and pushed into your CRM automatically. Clean data, zero manual entry, and a full picture of every lead from first touch.',
    tag: 'SUB-WORKFLOW',
    icon: 'ri-database-2-line',
  },
];

export default function AIProducts() {
  return (
    <section id="services" className="bg-[#F5F4F0] px-6 md:px-12 py-20">
      {/* Section label */}
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        OUR PRODUCTS
      </p>
      <h2 className="font-['Anton'] text-[clamp(36px,6vw,80px)] leading-[0.92] text-[#111111] uppercase mb-4">
        Agent Trained on<br />Your <span className="text-[#E63329]">BUSINESS</span>
      </h2>
      <p className="font-['DM_Sans'] text-[20px] text-[#555555] max-w-xl mb-14 leading-relaxed">
        Not templates. Not off the shelf tools. Every system we build is designed around your exact workflow, your customers, and your revenue model.
      </p>

      {/* MAIN SERVICE CARD */}
      <div className="border border-[#CCCCCC] bg-[#F5F4F0]">
        <div className="relative p-8 md:p-14 border-b border-[#CCCCCC]">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="font-['DM_Sans'] text-[9px] tracking-[0.3em] uppercase text-[#E63329] border border-[#E63329] px-2 py-1">
              CORE SERVICE
            </span>

          </div>

          {/* Title */}
          <h3 className="font-['Anton'] text-[clamp(32px,5vw,64px)] text-[#111111] uppercase leading-tight mb-6">
            CUSTOMER Support<br />
            <span className="text-[#E63329]">AGENT</span>
          </h3>

          {/* Description */}
          <p className="font-['DM_Sans'] text-[19px] text-[#555555] leading-relaxed max-w-2xl mb-8">
            A 24/7 intelligent agent that handles every customer inquiry, resolves issues instantly,&nbsp; and improves with every interaction. It lived where your team already works. Uses sentimental analysis to judge the mood of the customer to reply to it accordingly just like a human.&nbsp;
          </p>

          {/* Bullet highlights */}
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {['24/7 availability, zero downtime', 'Learns your brand voice & tone', 'Escalation logic built-in', 'Multi-channel: web, WhatsApp, email'].map((b) => (
              <li key={b} className="flex items-center gap-3 font-['DM_Sans'] text-[17px] text-[#666666]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63329] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* SUB-WORKFLOWS */}
        <div className="px-8 md:px-14 py-6 bg-[#111111]/[0.02]">
          <p className="font-['DM_Sans'] text-[9px] tracking-[0.3em] uppercase text-[#AAAAAA] mb-6">
            POWERED BY 3 SUB-WORKFLOWS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#CCCCCC]">
            {subWorkflows.map((wf, i) => (
              <div
                key={wf.id}
                className={`p-6 md:p-8 bg-[#F5F4F0] relative ${
                  i < subWorkflows.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#CCCCCC]' : ''
                }`}
              >
                {/* Icon + tag row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 flex items-center justify-center border border-[#E63329]/30 text-[#E63329]">
                    <i className={`${wf.icon} text-[18px]`} />
                  </div>
                  <span className="font-['DM_Sans'] text-[8px] tracking-[0.25em] uppercase text-[#AAAAAA] border border-[#DDDDDD] px-2 py-1">
                    {wf.tag}
                  </span>
                </div>

                {/* Sub-workflow number */}
                <span className="font-['Anton'] text-[42px] leading-none text-[#E8E6E2] select-none absolute bottom-4 right-6">
                  {wf.id}
                </span>

                {/* Name */}
                <h4 className="font-['Anton'] text-[clamp(16px,1.8vw,22px)] text-[#111111] uppercase leading-tight mb-3">
                  {wf.name}
                </h4>

                {/* Desc */}
                <p className="font-['DM_Sans'] text-[16px] text-[#777777] leading-relaxed pr-4">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}
