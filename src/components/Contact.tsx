import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, ArrowUpLeft, Quote, Sparkles, Heart, Stars, Wind, Flower2 } from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/use-scroll-reveal';
import { useState, useEffect } from 'react';
import contactBackground from '@/assets/Contact.png';

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, visibleItems: cardsVisible } = useStaggeredReveal(3, 100);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="contact" className="section-padding relative overflow-hidden py-32 md:py-48" style={{ background: 'linear-gradient(to bottom, #faf9f5, #f0f0e8, #e8e8e0)' }}>
      {/* Artistic Background Image Placement */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-5 -right-5 md:top-10 md:-right-10 w-[50%] md:w-[45%] opacity-[0.2] md:opacity-[0.25] rotate-3">
           <img 
            src={contactBackground} 
            alt="" 
            className="w-full h-auto object-contain rounded-[5rem] shadow-2xl"
            style={{
               maskImage: 'linear-gradient(to bottom left, black 50%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom left, black 50%, transparent 100%)'
            }}
          />
        </div>
      </div>
      
      {/* Editorial Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Enhanced Background with Parallax */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[120px] transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] bg-secondary/8 rounded-full blur-[140px] transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)` }}
      />

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles 
          className="absolute top-[20%] left-[10%] w-8 h-8 text-primary/20 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '0s' 
          }} 
        />
        <Heart 
          className="absolute bottom-[30%] right-[8%] w-7 h-7 text-secondary/20 fill-secondary/10 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) rotate(${mousePos.x * 2}deg)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1.5s' 
          }} 
        />
        <Stars 
          className="absolute top-[60%] left-[6%] w-7 h-7 text-primary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.25}px, ${mousePos.y * -0.25}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '3s' 
          }} 
        />
        <Wind 
          className="absolute top-[35%] right-[15%] w-9 h-9 text-secondary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '4.5s' 
          }} 
        />
        <Flower2 
          className="absolute bottom-[15%] left-[12%] w-8 h-8 text-primary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '6s' 
          }} 
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Narrative Side */}
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="lg:col-span-6 space-y-12 md:space-y-16 px-2 md:px-0"
          >
            <div className={`space-y-6 md:space-y-10 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-4 group">
                <span className="text-primary font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] py-2 px-4 bg-primary/5 rounded-full group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-500">
                  צרי קשר
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent group-hover:from-primary/60 transition-all duration-700" />
                <Sparkles className="w-4 h-4 text-primary/40 group-hover:text-primary group-hover:rotate-180 transition-all duration-700" />
              </div>

              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tighter text-center md:text-right">
                בואו נתחיל את <br />
                <span className="text-gradient-gold italic font-medium inline-block hover:scale-105 transition-transform duration-500 cursor-default">
                  המסע שלכם
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/60 font-body font-light leading-relaxed max-w-xl group hover:text-foreground/80 transition-colors duration-500 cursor-default">
                אם משהו בפנים מרגיש שזה הזמן לעצור, להקשיב ולבחור בדרך אחרת – אפשר פשוט לשלוח הודעה.
              </p>
            </div>

            {/* Contact Info - WhatsApp Only */}
            <div className="space-y-8 md:space-y-12">
              <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-primary/10 hover:border-primary/40 hover:shadow-card hover:-translate-y-4 hover:scale-105 transition-all duration-700 relative overflow-hidden max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 hover:from-primary/8 hover:to-secondary/8 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 hover:bg-primary hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-2">וואטסאפ</p>
                  <a href="https://wa.me/972526172932" target="_blank" rel="noopener noreferrer" className="font-numeric text-2xl font-bold text-foreground hover:text-primary transition-colors" dir="ltr">052-617-2932</a>
                </div>
              </div>
            </div>

            {/* Social & CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-10 pt-4 md:pt-8">
              <a
                href="https://wa.me/972526172932"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-6 md:px-12 md:py-6 rounded-full bg-primary text-white font-bold text-lg md:text-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(var(--primary),0.4)] overflow-hidden flex items-center justify-center gap-4 w-full sm:w-auto ripple-effect"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePos.y * -0.02}deg) rotateY(${mousePos.x * 0.02}deg)`,
                  transition: 'transform 0.3s ease-out, box-shadow 0.7s, scale 0.7s',
                }}
              >
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Pulsing Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-110 animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }} />
                
                <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-6 group-hover:scale-105 transition-transform duration-400" />
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">להרשמה ופרטים נוספים</span>
              </a>
              
              <p className="text-sm md:text-base text-foreground/50 font-body text-center sm:text-right">
                כתבו הודעה, ואשמח לחזור אליכם 🤍
              </p>

              <div className="flex gap-4">
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
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-sm hover:shadow-card"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side with Quote */}
          <div 
            className="lg:col-span-6 relative mt-12 lg:mt-0 flex items-center justify-center"
            style={{
              transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <div className="relative p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-foreground text-white text-center space-y-8 md:space-y-12 transition-all duration-1000 transform overflow-hidden group hover:scale-105 cursor-default max-w-2xl">
              {/* Animated background gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-primary/20 mx-auto relative z-10 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-700" />
              <p className="text-foreground font-display text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold italic leading-relaxed relative z-10 text-white/90 group-hover:text-white transition-colors duration-500 px-2 sm:px-4 md:px-6 text-center">
                "אפשר לנשום פה. מישהו מבין אותי. זו הזמנה..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
