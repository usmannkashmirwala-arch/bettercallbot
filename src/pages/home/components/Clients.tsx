import BrandMarquee from './BrandMarquee';

const testimonials = [
  {
    quote: '48-hour response times to 4 minutes. That\'s not a tool, that\'s a diagnosis.',
    name: 'Naveed Ahmed',
    role: 'CEO, UA Travels and Tours',
    initial: 'N',
  },
  {
    quote: 'Three months later, all the numbers beat the projection.',
    name: 'Rafay Kamal',
    role: 'Founder, The Revival Movement',
    initial: 'R',
  },
  {
    quote: 'My team reclaimed 30+ hours a week.',
    name: 'OMAR SHEIKH',
    role: 'Senior Analyst, Atlas Legal Group',
    initial: 'O',
  },
  {
    quote: 'Live in three weeks. Paid for itself in one month.',
    name: 'FATIMA TAHIR',
    role: 'Operations Head, Resin Marvels',
    initial: 'F',
  },
];

export default function Clients() {
  return (
    <section id="clients" className="bcb-gradient-light px-6 md:px-12 py-20">
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        SOME OF OUR CLIENTS
      </p>

      <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#111111] uppercase mb-14">
        THEY <span className="text-[#E63329]">TRUSTED</span> US.<br />THEN THEY GREW.
      </h2>

      <BrandMarquee />

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`p-8 md:p-10 border-[#CCCCCC] ${
              i % 2 === 0 ? 'border-r-0 md:border-r' : ''
            } ${i < 2 ? 'border-b' : ''} border`}
          >
            <p className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-[#E63329] mb-5">
              — TESTIMONIAL
            </p>
            <blockquote className="font-['DM_Sans'] text-[18px] text-[#333333] leading-relaxed italic mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-6 border-t border-[#EEEEEE]">
              <div className="w-10 h-10 bg-[var(--bcb-maroon-950)] flex items-center justify-center flex-shrink-0">
                <span className="font-['Anton'] text-lg text-[#F5F4F0]">{t.initial}</span>
              </div>
              <div>
                <p className="font-['DM_Sans'] text-[17px] font-semibold text-[#111111] uppercase tracking-wide">{t.name}</p>
                <p className="font-['DM_Sans'] text-[16px] text-[#888888]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}