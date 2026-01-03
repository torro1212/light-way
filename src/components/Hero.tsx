import { MessageCircle, ChevronDown, Sparkles, Heart, Stars, Award, Users, Flower2, Wind, Waves } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number; rotation: number }>>([]);
  const [currentWord, setCurrentWord] = useState(0);
  
  const floatingWords = ['להקשיב', 'להתחבר', 'להירפא', 'לנשום'];

  useEffect(() => {
    setIsLoaded(true);

    // Enhanced particles with rotation
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 4 + 2,
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % floatingWords.length);
    }, 4000);

    // Enhanced mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.3] transition-all duration-1000"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/90" />
      </div>

      {/* Enhanced Floating Particles with 3D effect */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-gradient-to-br from-primary/40 to-secondary/30 rounded-full animate-float-slow backdrop-blur-sm pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: '0 0 25px rgba(var(--primary), 0.4)',
            transform: `rotate(${particle.rotation}deg) translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles 
          className="absolute top-[15%] left-[10%] w-10 h-10 text-primary/25 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '0s' 
          }} 
        />
        <Heart 
          className="absolute top-[25%] right-[15%] w-8 h-8 text-secondary/25 fill-secondary/10 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '0.5s' 
          }} 
        />
        <Flower2 
          className="absolute bottom-[30%] left-[8%] w-9 h-9 text-primary/20 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s' 
          }} 
        />
        <Stars 
          className="absolute bottom-[25%] right-[12%] w-7 h-7 text-secondary/25 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px) rotate(${mousePos.x * 2}deg)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1.5s' 
          }} 
        />
        <Wind 
          className="absolute top-[45%] right-[8%] w-10 h-10 text-primary/20 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.25}px, ${mousePos.y * -0.25}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2s' 
          }} 
        />
        <Waves 
          className="absolute top-[60%] left-[12%] w-8 h-8 text-secondary/20 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2.5s' 
          }} 
        />
      </div>

      {/* Interactive Floating Modern Blobs */}
      <div 
        className="absolute top-1/4 -right-20 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-[140px] animate-blob transition-transform duration-300"
        style={{ 
          transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px) scale(${1 + mousePos.x * 0.001})` 
        }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[120px] animate-blob animation-delay-2000 transition-transform duration-300"
        style={{ 
          transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px) scale(${1 - mousePos.y * 0.001})` 
        }}
      />

      {/* Enhanced Animated Gradient Orbs with Parallax */}
      <div 
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-secondary/15 to-primary/15 rounded-full blur-3xl animate-pulse-slow transition-transform duration-500" 
        style={{ 
          animationDelay: '2s',
          transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` 
        }} 
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-[100px] animate-gradient transition-transform duration-700"
        style={{ transform: `translate(calc(-50% + ${mousePos.x * 0.5}px), calc(-50% + ${mousePos.y * 0.5}px))` }}
      />

      {/* Content Section */}
      <div 
        className="relative z-10 container-custom px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Enhanced Interactive Badge with 3D effect */}
            <div 
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/50 backdrop-blur-3xl border-2 border-white/70 mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-1000 group hover:scale-105 hover:shadow-[0_30px_80px_rgba(var(--primary),0.2)] cursor-pointer ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -0.05}deg) rotateY(${mousePos.x * 0.05}deg) scale(${isLoaded ? 1 : 0.9})`,
                transition: 'transform 0.3s ease-out, opacity 1s, translate 1s',
              }}
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse group-hover:rotate-180 transition-transform duration-700" />
              <span className="text-foreground/90 font-body text-xs md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] group-hover:tracking-[0.6em] transition-all duration-500">
                מסע פנימי • הקשבה עמוקה • ריפוי משותף
              </span>
              <Sparkles className="w-5 h-5 text-primary animate-pulse group-hover:rotate-180 transition-transform duration-700" />
            </div>

            {/* Enhanced Main Headline */}
            <h1 className={`font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] text-primary font-bold leading-[0.9] mb-6 md:mb-8 tracking-tight transition-all duration-1000 delay-300 hover:scale-105 cursor-default ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              דרך האור
            </h1>
            
            {/* Rotating Subtitle */}
            <div className={`mb-8 md:mb-12 h-12 flex items-center justify-center transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-foreground/80 font-display text-2xl md:text-3xl italic">
                מקום {' '}
                <span className="inline-block transition-all duration-500 font-bold text-foreground">
                  {floatingWords[currentWord]}
                </span>
              </span>
            </div>

            {/* Enhanced Subtitle */}
            <div className={`max-w-5xl mx-auto mb-8 md:mb-12 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-10'}`}>
              <p className="font-body text-lg sm:text-3xl md:text-4xl text-foreground/70 leading-relaxed text-balance font-light hover:text-foreground/90 transition-colors duration-500 px-4">
                מסע ריפוי אישי וקבוצתי לנשים שאובחנו כחולות <br className="hidden sm:block" />
                במחלות אוטואימוניות
              </p>
              
              {/* Special Styled Tagline */}
              <div className="mt-6 md:mt-12 flex items-center justify-center gap-2 md:gap-4 group cursor-default">
                <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-white/90 group-hover:text-white group-hover:rotate-180 transition-all duration-700 drop-shadow-lg" />
                <p className="font-display text-xl sm:text-4xl md:text-5xl text-white italic font-bold group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  לגלות את החוכמה הפנימית של הגוף
                </p>
                <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-white/90 group-hover:text-white group-hover:rotate-180 transition-all duration-700 drop-shadow-lg" />
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 hover:bg-white/40 transition-all duration-500 group">
                <Award className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-500" />
                <span className="text-foreground/80 font-bold text-sm">15+ שנות ניסיון</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 hover:bg-white/40 transition-all duration-500 group">
                <Stars className="w-5 h-5 text-primary group-hover:rotate-180 transition-transform duration-700" />
                <span className="text-foreground/80 font-bold text-sm">5.0 ★★★★★</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10 w-full px-4 sm:px-0 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href="https://wa.me/972526172932"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-5 md:px-20 md:py-9 rounded-full bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-lg md:text-3xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(var(--primary),0.4)] active:scale-95 overflow-hidden w-full sm:w-auto border-2 border-white/20"
              >
                {/* Multiple shimmer effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s]" style={{ transitionDelay: '0.2s' }} />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700" />
                
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-0 group-hover:opacity-100" />
                
                <div className="flex items-center justify-center gap-4 relative z-10">
                  <MessageCircle className="w-7 h-7 md:w-9 md:h-9 group-hover:rotate-6 group-hover:scale-105 transition-all duration-400" />
                  <span className="group-hover:tracking-wide transition-all duration-300">שיחת היכרות חינם</span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                </div>
              </a>
              
              <a
                href="#my-story"
                className="group flex items-center justify-center gap-4 px-10 py-7 md:px-16 md:py-9 rounded-full bg-white/50 backdrop-blur-3xl border-2 border-white/70 text-foreground font-bold text-xl md:text-2xl transition-all duration-500 hover:bg-white/70 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:scale-105 hover:border-white/90 w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('my-story')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="group-hover:tracking-wider transition-all duration-300">הסיפור שלי</span>
                <ChevronDown className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-y-2 duration-400" />
              </a>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className={`mt-20 flex flex-col items-center gap-6 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-primary/40 animate-pulse" />
                <Heart className="w-6 h-6 text-primary/60 fill-primary/20 animate-glow" />
                <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-primary/50 to-primary/40 animate-pulse" />
              </div>
              <p className="text-foreground/40 font-body text-sm italic">
                "מסע חזרה אל עצמך"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-50 hover:opacity-100 transition-all duration-500 group cursor-pointer animate-float"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] uppercase tracking-[1em] font-bold text-foreground/80 group-hover:text-foreground transition-colors">גלול</span>
          <ChevronDown className="w-5 h-5 text-foreground/60 animate-bounce" />
        </div>
        <div className="w-[2px] h-24 bg-gradient-to-b from-foreground via-foreground/30 to-transparent rounded-full group-hover:h-32 transition-all duration-500" />
      </a>

      {/* Background Decor Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-[0.03] select-none hidden 2xl:block">
        <span className="font-display text-[40rem] font-bold leading-none">HEALING</span>
      </div>
    </section>
  );
};

export default Hero;
