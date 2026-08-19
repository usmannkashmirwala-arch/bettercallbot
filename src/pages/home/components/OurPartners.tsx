const partners = [
  { name: 'UA Travels and Tours', src: '/partners/ua-travels.jpg' },
  { name: 'Resin Marvels', src: '/partners/resin-marvels.jpg' },
  { name: 'The Revival Movement', src: '/partners/revival-movement.jpg' },
];

export default function OurPartners() {
  const track = [...partners, ...partners];

  return (
    <section id="partners" className="px-6 md:px-12 py-20">
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        OUR PARTNERS
      </p>
      <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#111111] uppercase mb-14">
        TRUSTED BY BRANDS<br />THAT <span className="text-[#E63329]">GROW.</span>
      </h2>

      <div className="border-t border-b border-[#CCCCCC] py-8 overflow-hidden">
        <div className="flex gap-10 items-center bcb-marquee-track">
          {track.map((p, i) => (
            <div key={`${p.name}-${i}`} className="flex items-center gap-4 flex-shrink-0">
              <img
                src={p.src}
                alt={p.name}
                className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
              <span className="font-['Anton'] text-lg text-[#111111] uppercase whitespace-nowrap">
                {p.name}
              </span>
              <span className="text-[#E63329] text-lg">·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}
