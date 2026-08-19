const industries = [
  { name: 'STREETWEAR BRANDS', desc: 'Drops, sizing, restocks.' },
  { name: 'DENTAL CLINICS', desc: 'Bookings, insurance, aftercare.' },
  { name: 'SNEAKER & SHOE STORES', desc: 'Stock checks, instantly.' },
  { name: 'SUPPLEMENT BRANDS', desc: 'Dosage, subscriptions, shipping.' },
  { name: 'MED SPAS & CLINICS', desc: 'Booking, no lead lost.' },
  { name: 'ONLINE FASHION BOUTIQUES', desc: 'Returns, sizing, styling.' },
  { name: 'CAR DEALERSHIPS', desc: 'Financing, test drives, service.' },
  { name: 'RESTAURANT CHAINS', desc: 'Reservations, menus, delivery.' },
];

export default function Industries() {
  return (
    <section id="industries" className="bcb-gradient-light px-6 md:px-12 py-20">
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        INDUSTRIES WE SERVE
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#111111] uppercase">
          YOUR INDUSTRY.<br />OUR <span className="text-[#E63329]">SYSTEMS.</span>
        </h2>
        <p className="font-['DM_Sans'] text-[14px] tracking-[0.1em] uppercase text-[#555555] max-w-xs">
          8 industries. One system.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className={`p-6 md:p-8 border-[#CCCCCC] border-b ${
              i % 4 !== 3 ? 'border-r-0 sm:border-r-0 md:border-r' : ''
            } group cursor-pointer hover:bg-[#111111] transition-colors duration-200`}
          >
            <p className="font-['Anton'] text-xl text-[#111111] uppercase mb-3 group-hover:text-[#D4FF00] transition-colors">
              {ind.name}
            </p>
            <p className="font-['DM_Sans'] text-[16px] text-[#777777] leading-relaxed group-hover:text-[#AAAAAA] transition-colors">
              {ind.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#CCCCCC] mt-20" />
    </section>
  );
}