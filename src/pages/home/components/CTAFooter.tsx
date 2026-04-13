interface CTAFooterProps {
  onBookAudit: () => void;
}

export default function CTAFooter({ onBookAudit }: CTAFooterProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* CTA Section */}
      <section id="cta" className="bg-[#111111] px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
        {/* Background decorative text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-['Anton'] text-[20vw] text-[#1A1A1A] leading-none select-none whitespace-nowrap">
            BCB
          </span>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-6">
            THE FUTURE OF CUSTOMER EXPERIENCE STARTS HERE
          </p>
          <h2 className="font-['Anton'] text-[clamp(48px,8vw,110px)] leading-[0.88] text-[#F5F4F0] uppercase mb-6">
            STOP DOING IT<br />THE <span className="text-[#D4FF00]">HARD WAY.</span>
          </h2>
          <p className="font-['DM_Sans'] text-[19px] text-[#888888] max-w-xl mx-auto mb-12 leading-relaxed">
            Every day you run a manual process is a day you&apos;re paying for something AI can do for a fraction of the cost. Book a free audit. Let&apos;s find your leaks — together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAudit}
              className="font-['DM_Sans'] text-sm tracking-[0.12em] uppercase font-semibold bg-[#D4FF00] text-[#111111] px-10 py-5 cursor-pointer whitespace-nowrap hover:bg-[#c5f000] transition-colors"
            >
              BOOK A FREE AUDIT →
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="font-['DM_Sans'] text-sm tracking-[0.12em] uppercase font-semibold border border-[#3A3A3A] bg-transparent text-[#888888] px-10 py-5 cursor-pointer whitespace-nowrap hover:border-[#F5F4F0] hover:text-[#F5F4F0] transition-colors"
            >
              demo agent coming soon →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F4F0] border-t border-[#CCCCCC] px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/3502b63edbc5dd9f99fc7baeb70e12e7.jpeg"
                alt="BCB Logo"
                className="w-8 h-8 object-cover"
              />
              <span className="font-['Anton'] text-lg tracking-wider text-[#111111]">
                BETTER CALL <span className="text-[#E63329]">BOT</span>
              </span>
            </div>
            <p className="font-['DM_Sans'] text-[16px] text-[#888888] leading-relaxed">
              AI automation for businesses that are serious about scaling. Systems that run — so you don&apos;t have to.
            </p>
          </div>

          {/* Center: nav */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <div>
              <p className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-[#E63329] mb-4">SERVICES</p>
              <div className="space-y-2">
                {['Customer Support Agent', 'Lead Qualification Workflow', 'Live Shopify Tracking Workflow', 'Lead Formatting and CRM Workflow'].map((s) => (
                  <p key={s} className="font-['DM_Sans'] text-[17px] text-[#555555] cursor-pointer hover:text-[#111111]">{s}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-[#E63329] mb-4">COMPANY</p>
              <div className="space-y-2">
                {[
                  { label: 'About', id: 'founder' },
                  { label: 'Our Work', id: 'work' },
                  { label: 'Pricing', id: 'pricing' },
                  { label: 'Contact', id: 'cta' },
                ].map((item) => (
                  <p
                    key={item.label}
                    onClick={() => scrollTo(item.id)}
                    className="font-['DM_Sans'] text-[17px] text-[#555555] cursor-pointer hover:text-[#111111]"
                  >
                    {item.label}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact */}
          <div>
            <p className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-[#E63329] mb-4">GET IN TOUCH</p>
            <p className="font-['DM_Sans'] text-[17px] text-[#555555] mb-2">hello@bettercallbot.com</p>
            <p className="font-['DM_Sans'] text-[17px] text-[#555555] mb-6">Pakistan — Serving Clients Globally</p>
            <button
              onClick={onBookAudit}
              className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase font-semibold bg-[#111111] text-[#F5F4F0] px-5 py-3 cursor-pointer whitespace-nowrap hover:bg-[#E63329] transition-colors"
            >
              BOOK A FREE AUDIT →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#CCCCCC] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['DM_Sans'] text-[15px] text-[#AAAAAA]">
            © 2025 Better Call Bot. All rights reserved.
          </p>
          <p className="font-['DM_Sans'] text-[15px] text-[#AAAAAA] tracking-[0.1em] uppercase">
            INNOVATE | AUTOMATE
          </p>
        </div>
      </footer>
    </>
  );
}