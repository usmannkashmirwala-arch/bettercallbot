import { useState, useEffect } from 'react';

interface NavbarProps {
  onBookAudit: () => void;
}

export default function Navbar({ onBookAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F5F4F0] border-b border-[#CCCCCC]' : 'bg-transparent'
      }`}
    >
      <div className="px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/3502b63edbc5dd9f99fc7baeb70e12e7.jpeg"
            alt="Better Call Bot Logo"
            className="w-8 h-8 object-cover"
          />
          <span
            className="font-['Anton'] text-lg tracking-wider text-[#111111]"
          >
            BETTER CALL <span className="text-[#E63329]">BOT</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'SERVICES', id: 'services' },
            { label: 'WORK', id: 'work' },
            { label: 'PRICING', id: 'pricing' },
            { label: 'ABOUT', id: 'founder' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-['DM_Sans'] text-[11px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#E63329] transition-colors cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.instagram.com/bettercallbot/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 flex items-center justify-center text-[#111111] hover:text-[#E63329] transition-colors cursor-pointer"
          >
            <i className="ri-instagram-line text-[18px]"></i>
          </a>
          <button
            onClick={onBookAudit}
            className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase bg-[#D4FF00] text-[#111111] font-semibold px-5 py-2.5 cursor-pointer whitespace-nowrap hover:bg-[#c5f000] transition-colors"
          >
            BOOK A FREE AUDIT →
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#111111] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5F4F0] border-t border-[#CCCCCC] px-6 py-6 flex flex-col gap-5">
          {[
            { label: 'SERVICES', id: 'services' },
            { label: 'WORK', id: 'work' },
            { label: 'PRICING', id: 'pricing' },
            { label: 'ABOUT', id: 'founder' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-['DM_Sans'] text-[12px] tracking-[0.2em] uppercase text-[#111111] text-left cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.instagram.com/bettercallbot/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 text-[#111111] hover:text-[#E63329] transition-colors cursor-pointer w-fit"
          >
            <i className="ri-instagram-line text-[18px]"></i>
            <span className="font-['DM_Sans'] text-[11px] tracking-[0.2em] uppercase">INSTAGRAM</span>
          </a>
          <button
            onClick={() => { onBookAudit(); setMenuOpen(false); }}
            className="font-['DM_Sans'] text-[12px] tracking-[0.15em] uppercase bg-[#D4FF00] text-[#111111] font-semibold px-5 py-3 cursor-pointer whitespace-nowrap"
          >
            BOOK A FREE AUDIT →
          </button>
        </div>
      )}
    </nav>
  );
}