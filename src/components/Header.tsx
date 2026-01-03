import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowLeft } from 'lucide-react';
import logo from '@/assets/LOGO-RE.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'אודות' },
    { href: '#my-story', label: 'הסיפור שלי' },
    { href: '#services', label: 'המסעות' },
    { href: '#testimonials', label: 'המלצות' },
    { href: '#contact', label: 'יצירת קשר' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-3'
          : 'bg-transparent py-8'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 right-0 h-[2px] bg-gradient-gold transition-all duration-300 z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container-custom px-4 sm:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="group flex items-center gap-5">
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
                <img 
                  src={logo} 
                  alt="דרך האור" 
                  className="h-24 md:h-28 w-24 md:w-28 object-contain relative z-10 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110"
                />
              </div>
              <span className={`font-body text-sm md:text-base uppercase tracking-[0.3em] font-bold transition-colors duration-500 whitespace-nowrap ${
                isScrolled ? 'text-primary' : 'text-primary/80'
              }`}>
                דרך האור
              </span>
            </div>
            <div className="flex flex-col border-r border-white/20 pr-5 transition-all duration-500 group-hover:border-secondary/40">
              <span className={`font-display text-2xl font-bold tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                אתי אסתר דיין
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-body text-xs font-bold uppercase tracking-widest transition-all duration-500 hover:text-secondary relative group ${
                    isScrolled ? 'text-foreground/70' : 'text-white/80'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>
            
            <a
              href="tel:052-617-2932"
              className={`group flex items-center gap-4 px-8 py-3.5 rounded-full font-bold text-xs tracking-widest transition-all duration-500 ${
                isScrolled 
                  ? 'bg-primary text-white shadow-soft hover:shadow-xl hover:-translate-y-1' 
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-primary'
              }`}
            >
              <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span className="font-numeric" dir="ltr">052-617-2932</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              isScrolled ? 'bg-secondary/10 text-secondary' : 'bg-white/10 text-white backdrop-blur-md'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-background transition-all duration-700 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '0', height: '100vh' }}
        >
          <div className="flex flex-col h-full p-8 pt-32">
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-border transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="font-display text-4xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {link.label}
                  </span>
                  <ArrowLeft className="w-8 h-8 text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
            
            <div className="mt-auto space-y-6 pb-12">
              <p className="text-muted-foreground text-center font-body text-sm">זמינה עבורך לכל שאלה</p>
              <a
                href="tel:052-617-2932"
                className="btn-gold flex items-center justify-center gap-4 w-full py-6 text-xl rounded-[2rem]"
              >
                <Phone className="w-6 h-6" />
                <span className="font-numeric" dir="ltr">052-617-2932</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
