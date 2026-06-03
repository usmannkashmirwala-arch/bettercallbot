const industries = [
  { name: 'STREETWEAR BRANDS', desc: 'Size availability, drop release info, shipping status, return policy — handled instantly, 24/7, without a single DM going unread.' },
  { name: 'DENTAL CLINICS', desc: 'New patient FAQs, appointment rescheduling, insurance queries, post-procedure instructions — answered before your front desk even opens.' },
  { name: 'SNEAKER & SHOE STORES', desc: 'Stock checks, sizing guides, order tracking, restock alerts — your customers get answers the moment they ask, not when you\'re back online.' },
  { name: 'SUPPLEMENT BRANDS', desc: 'Ingredient questions, dosage guidance, subscription changes, shipping delays — resolved automatically so your team focuses on growth, not tickets.' },
  { name: 'MED SPAS & CLINICS', desc: 'Treatment FAQs, booking confirmations, pre-care instructions, pricing queries — handled 24/7 so no lead ever slips through.' },
  { name: 'ONLINE FASHION BOUTIQUES', desc: 'Returns, size exchanges, delivery updates, styling advice — automated flows that feel personal and keep customers coming back.' },
  { name: 'CAR DEALERSHIPS', desc: 'Vehicle availability, financing FAQs, test drive booking, service reminders — every incoming query handled before your sales team even picks up.' },
  { name: 'RESTAURANT CHAINS', desc: 'Reservation confirmations, allergy queries, menu FAQs, delivery status — support that runs through rush hour without adding headcount.' },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-[#F5F4F0] px-6 md:px-12 py-20">
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        INDUSTRIES WE SERVE
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#111111] uppercase">
          YOUR INDUSTRY.<br />OUR <span className="text-[#E63329]">SYSTEMS.</span>
        </h2>
        <p className="font-['DM_Sans'] text-[18px] text-[#555555] max-w-xs leading-relaxed">
          We&apos;ve built customer support systems across industries. The questions look different, the result is always the same: faster replies, happier customers, and a team that stops drowning in tickets.
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