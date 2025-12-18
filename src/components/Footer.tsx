import { Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80 py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="אתי אסתר דיין" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-display text-xl text-white">אתי אסתר דיין</p>
              <p className="text-sm text-white/60">פסיכותרפיה וסאונד הילינג</p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-secondary transition-colors">אודות</a>
            <a href="#services" className="hover:text-secondary transition-colors">שירותים</a>
            <a href="#testimonials" className="hover:text-secondary transition-colors">המלצות</a>
            <a href="#faq" className="hover:text-secondary transition-colors">שאלות נפוצות</a>
            <a href="#contact" className="hover:text-secondary transition-colors">צור קשר</a>
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-left text-sm">
            <p className="flex items-center justify-center md:justify-start gap-1">
              נבנה באהבה
              <Heart className="w-4 h-4 text-secondary fill-secondary" />
            </p>
            <p className="text-white/40 mt-1">
              © {new Date().getFullYear()} אתי אסתר דיין. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
