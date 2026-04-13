const caseStudies = [
  {
    client: 'Resin Marvels',
    industry: 'E-COMMERCE',
    result: '85% Queries Handled',
    detail: 'AI support agent handled 85% of queries instantly, reducing support workload by 70%.',
    img: 'https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/f2f97b1231824b5000baf70dd1935c13.jpeg',
  },
  {
    client: 'UA Travels and tours',
    industry: 'Travel agency',
    result: '62% More Conversion',
    detail: 'Lead qualification bot reduced time-to-call from 48hrs to 4 minutes. Conversion rate jumped 62%.',
    img: 'https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/a9897475fe13a8278f80661db12cfaa3.jpeg',
  },
  {
    client: 'The revival movement',
    industry: 'fashion',
    result: '55% Increase In Customer Satisfaction',
    detail: 'Order tracking, shipping and inventory status reported to customers live. Used order history to recommend fits according to style and size.',
    img: 'https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/69762d2bac34ac66eddf45c30095ab45.jpeg',
  },
];

export default function OurWork() {
  return (
    <section id="work" className="bg-[#0D0D0D] px-6 md:px-12 py-20">
      <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
        SOME OF OUR WORK
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <h2 className="font-['Anton'] text-[clamp(40px,6vw,80px)] leading-[0.92] text-[#F5F4F0] uppercase">
          PROOF, NOT<br /><span className="text-[#D4FF00]">PROMISES.</span>
        </h2>
        <p className="font-['DM_Sans'] text-[18px] text-[#888888] max-w-xs leading-relaxed">
          Disclaimer: Number accuracy for metrics reporting can vary&nbsp;
        </p>
      </div>

      <div className="space-y-0">
        {caseStudies.map((cs, i) => (
          <div
            key={cs.client}
            className={`flex flex-col md:flex-row gap-0 border-t border-[#2A2A2A] ${
              i === caseStudies.length - 1 ? 'border-b' : ''
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-2/5 h-64 md:h-80 overflow-hidden flex-shrink-0">
              <img
                src={cs.img}
                alt={cs.client}
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-between border-l-0 md:border-l border-[#2A2A2A]">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-[#888888] border border-[#2A2A2A] px-2 py-1">
                    {cs.industry}
                  </span>
                </div>
                <h3 className="font-['Anton'] text-3xl md:text-4xl text-[#F5F4F0] uppercase mb-4">{cs.client}</h3>
                <p className="font-['DM_Sans'] text-[17px] text-[#888888] leading-relaxed max-w-md">{cs.detail}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#2A2A2A]">
                <div>
                  <p className="font-['DM_Sans'] text-[10px] tracking-[0.15em] uppercase text-[#555555] mb-1">RESULT</p>
                  <p className="font-['Anton'] text-3xl text-[#D4FF00]">{cs.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#2A2A2A] mt-0" />
    </section>
  );
}