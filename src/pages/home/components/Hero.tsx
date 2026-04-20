interface HeroProps {
  onBookAudit: () => void;
}

export default function Hero({ onBookAudit }: HeroProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#F5F4F0] min-h-screen flex flex-col overflow-hidden" id="hero">

      {/* Phone sticker — cord exits through the very top of the page */}
      <div
        className="absolute right-8 md:right-20 pointer-events-none"
        style={{ top: '-20px', width: '170px', height: '85%', zIndex: 1 }}
      >
        <img
          src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/4b29aca56b3b779e4e81601184faa9ed.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain object-top"
        />
      </div>

      {/* Top utility bar */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-6 pb-2 mt-16">
        <span className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#111111]">
          AI AUTOMATION SERVICES
        </span>
        <span className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#111111]">
          INNOVATE | AUTOMATE
        </span>
      </div>

      {/* Hero main content */}
      <div className="relative z-10 flex-1 flex flex-col px-6 md:px-12 pt-8 pb-16">

        {/* Headline */}
        <div className="mt-4 md:mt-8">
          <h1 className="font-['Anton'] text-[clamp(90px,18vw,200px)] leading-[0.88] tracking-tight text-[#111111] uppercase">
            BETTER<br />
            CALL<br />
            <span className="text-[#E63329]">BOT</span>
          </h1>
        </div>

        {/* Subline */}
        <p className="font-['DM_Sans'] text-base md:text-lg text-[#111111] mt-6 max-w-md leading-relaxed">
          It&apos;s Time To Innovate &amp; Automate
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={onBookAudit}
            className="font-['DM_Sans'] text-sm tracking-[0.12em] uppercase font-semibold bg-[#D4FF00] text-[#111111] px-7 py-4 cursor-pointer whitespace-nowrap hover:bg-[#c5f000] transition-colors"
          >
            BOOK A FREE AUDIT →
          </button>
          <a
            href="https://wa.me/18317776194"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['DM_Sans'] text-sm tracking-[0.12em] uppercase font-semibold border border-[#111111] bg-transparent text-[#111111] px-7 py-4 cursor-pointer whitespace-nowrap hover:bg-[#111111] hover:text-[#F5F4F0] transition-colors inline-block"
          >
            Test Our Agent →
          </a>
        </div>

        {/* Year + stat */}
        <div className="mt-12 flex gap-12">
          <div>
            <p className="font-['Anton'] text-4xl text-[#111111]">2025</p>
            <p className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase text-[#888888] mt-1">Founded</p>
          </div>
          <div>
            <p className="font-['Anton'] text-4xl text-[#111111]">400+</p>
            <p className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase text-[#888888] mt-1">hours saved</p>
          </div>
          <div>
            <p className="font-['Anton'] text-4xl text-[#111111]">3x</p>
            <p className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase text-[#888888] mt-1">Avg ROI</p>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 h-px bg-[#CCCCCC] mx-6 md:mx-12" />
    </section>
  );
}
