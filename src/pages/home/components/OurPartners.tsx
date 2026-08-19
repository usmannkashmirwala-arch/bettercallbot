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

      <div className="border-t border-b border-[#CCCCCC] py-10 overflow-hidden">
        <div className="flex gap-14 items-center bcb-marquee-track">
          {track.map((p, i) => (
            <img
              key={`${p.name}-${i}`}
              src={p.src}
              alt={p.name}
              title={p.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}
