export default function CustomerSupport() {
  return (
    <section id="customer-support" className="bg-[#111111] px-6 md:px-12 py-20">
      {/* Section label */}
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        CUSTOMER SUPPORT AGENT
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: copy */}
        <div>
          <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#F5F4F0] uppercase mb-6">
            NEVER MISS<br />ANOTHER <span className="text-[#E63329]">MESSAGE</span>
          </h2>
          <p className="font-['DM_Sans'] text-[18px] text-[#AAAAAA] leading-relaxed mb-5">
            Your customers don&apos;t wait. They move on. Every unanswered query at 11pm is a sale that went to your competitor.
          </p>
          <p className="font-['DM_Sans'] text-[18px] text-[#AAAAAA] leading-relaxed mb-8">
            Our AI Customer Support Agent handles unlimited concurrent conversations — resolving tickets, answering product questions, processing returns, and escalating only when human judgment is genuinely needed.
          </p>

          {/* Feature list */}
          <div className="space-y-4 border-t border-[#2A2A2A] pt-8">
            {[
              '24/7 availability — no shift changes, no sick days',
              'Trained on your exact product docs & FAQs',
              'Handles 80%+ of tickets without human input',
              'Seamless handoff to human agents when needed',
              'Integrates with all your tools and apps so you dont have to change a thing',
            ].map((feat) => (
              <div key={feat} className="flex gap-3 items-start">
                <span className="text-[#D4FF00] mt-0.5 text-sm">→</span>
                <p
                  className="font-['DM_Sans'] text-[17px] text-[#CCCCCC]"
                  dangerouslySetInnerHTML={{ __html: feat }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="relative">
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img
              src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/e7fee6c34b989cd79e235bfa54805f54.png"
              alt="AI chat interface on phone"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Stat overlay */}
          <div className="absolute bottom-0 left-0 bg-[#D4FF00] px-6 py-5">
            <p className="font-['Anton'] text-4xl text-[#111111] leading-none">80%</p>
            <p className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase text-[#111111] mt-1">of all queries and support handled automatically&nbsp;</p>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#2A2A2A] mt-20" />
    </section>
  );
}