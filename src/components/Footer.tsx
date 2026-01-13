import { Heart, Instagram, Facebook, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import logo from '@/assets/LOGO-RE.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80 pt-24 pb-12 relative overflow-hidden group/footer">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] group-hover/footer:scale-150 transition-transform duration-1000" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-pulse-slow" />

      <div className="container-custom px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center md:text-right">
            <a href="#" className="flex flex-col md:flex-row items-center gap-4 group/logo">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-0 group-hover/logo:opacity-100 transition-all duration-700 scale-150" />
                  <img src={logo} alt="דרך האור" className="h-32 md:h-36 lg:h-40 w-32 md:w-36 lg:w-40 object-contain group-hover/logo:scale-110 group-hover/logo:rotate-12 transition-all duration-700 relative z-10 animate-float-slow" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary font-bold group-hover/logo:tracking-[0.5em] transition-all duration-500">דרך האור</span>
                  <Sparkles className="w-3 h-3 text-primary/40 group-hover/logo:text-primary group-hover/logo:rotate-180 transition-all duration-700" />
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start md:border-r md:border-white/10 md:pr-4">
                <span className="font-display text-2xl md:text-3xl font-bold text-white group-hover/logo:text-secondary transition-colors duration-500" style={{ letterSpacing: '0.05em' }}>אתי אסתר דיין</span>
              </div>
            </a>
            <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-md font-body font-normal mx-auto md:mx-0 hover:text-white/95 transition-colors duration-500 px-2 sm:px-4 md:px-0 text-center md:text-right">
              מסע ריפוי אישי וקבוצתי <br />
              למתמודדים עם מחלה אוטואימונית. <br />
              מרחב בטוח של הקשבה, ליווי והתחברות פנימית.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/eti.dayan' },
                { icon: Facebook, href: 'https://www.facebook.com/tystrdyyn' },
                { icon: Mail, href: 'mailto:Etidayan246@gmail.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white hover:border-secondary hover:-translate-y-2 hover:scale-110 hover:rotate-12 transition-all duration-500 group/social"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 group-hover/social:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8 text-center md:text-right">
            <h4 className="font-display text-lg md:text-xl font-bold text-white">ניווט מהיר</h4>
            <nav className="flex flex-col gap-3 md:gap-4">
              {[
                { href: '#about', label: 'אודות' },
                { href: '#my-story', label: 'הסיפור שלי' },
                { href: '#services', label: 'המסעות' },
                { href: '#testimonials', label: 'המלצות' },
                { href: '#contact', label: 'יצירת קשר' }
              ].map((link, i) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-white/50 hover:text-secondary hover:translate-x-[-8px] transition-all duration-500 font-body text-sm inline-flex items-center justify-center md:justify-start gap-2 group/link"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="w-1 h-1 bg-secondary/30 rounded-full group-hover/link:scale-150 group-hover/link:bg-secondary transition-all duration-500" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8 text-center md:text-right">
            <h4 className="font-display text-lg md:text-xl font-bold text-white">יצירת קשר</h4>
            <div className="space-y-4 md:space-y-6">
              <a href="https://wa.me/972526172932" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-4 group/contact">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover/contact:bg-secondary group-hover/contact:text-white group-hover/contact:scale-110 group-hover/contact:rotate-12 transition-all duration-500">
                  <Phone className="w-4 h-4 group-hover/contact:animate-pulse" />
                </div>
                <span className="text-white/70 group-hover/contact:text-white transition-colors duration-500 font-numeric" dir="ltr">052-617-2932</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 text-center px-2 sm:px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[0.65rem] sm:text-xs md:text-sm text-white/30 font-body" style={{ letterSpacing: '0.02em' }}>
            <span>נבנה בדיוק והקשבה</span>
            <Heart className="w-3 h-3 md:w-4 md:h-4 text-secondary fill-secondary animate-pulse flex-shrink-0" />
            <span>עבור אתי אסתר דיין</span>
          </div>
          <p className="text-white/20 text-[9px] sm:text-[10px] md:text-xs font-body tracking-wider sm:tracking-widest">
            © {new Date().getFullYear()} ETTI ESTER DAYAN. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-white/30 text-[10px] sm:text-xs md:text-sm font-body italic">
            נשמרת הזכות לערוך שינויים בתכנית ט.ל.ח.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
