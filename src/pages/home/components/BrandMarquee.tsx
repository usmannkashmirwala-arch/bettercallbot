interface BrandLogo {
  name: string;
  src: string;
}

interface BrandMarqueeProps {
  logos?: BrandLogo[];
}

const defaultLogos: BrandLogo[] = [
  { name: 'UA Travels and Tours', src: '/logos/ua-travels.svg' },
  { name: 'Zara Interiors', src: '/logos/zara-interiors.svg' },
  { name: 'Atlas Legal Group', src: '/logos/atlas-legal-group.svg' },
  { name: 'Resin Marvels', src: '/logos/resin-marvels.svg' },
  { name: 'The Revival Movement', src: '/logos/the-revival-movement.svg' },
  { name: 'Peak Education Group', src: '/logos/peak-education-group.svg' },
];

export default function BrandMarquee({ logos = defaultLogos }: BrandMarqueeProps) {
  const track = [...logos, ...logos];

  return (
    <div className="border-t border-b border-[#CCCCCC] py-6 mb-16 overflow-hidden">
      <div className="flex gap-16 items-center bcb-marquee-track">
        {track.map((logo, i) => (
          <img
            key={`${logo.name}-${i}`}
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            className="h-10 md:h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
