import { Heart, Sparkles, Shield, Leaf, Quote, MousePointer2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import differentiationBackground from '@/assets/Differentiation.jpg';

const values = [
  {
    icon: Heart,
    title: 'הזמנה, לא שכנוע',
    description: 'זו לא מכירה, זו הזמנה. את באה כי משהו בפנים אמר "כן", לא כי שכנעו אותך.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Shield,
    title: 'מרחב בטוח',
    description: 'קבוצה קטנה, סגורה ומחוייבת. מקום שבו אפשר להיות בלי מסיכות.',
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    icon: Sparkles,
    title: 'יש זמן',
    description: 'לא רצים לשום מקום. התהליך מתנהל בקצב שלך, ללא לחץ.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Leaf,
    title: 'אפשר לנשום',
    description: 'מרחב של שקט אמיתי. פה אפשר פשוט לנשום ולהיות.',
    color: 'from-secondary/20 to-secondary/5',
  },
];

const Differentiation = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="section-padding relative overflow-hidden py-32 md:py-48"
      style={{ background: 'linear-gradient(to bottom, #e8e8e0, #f0f0e8, #faf9f5)' }}
    >
      {/* Artistic Background Image Placement */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
         <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-[60%] md:w-[50%] opacity-[0.15] md:opacity-[0.2] rotate-12 transition-transform duration-1000 hover:rotate-6">
           <img 
            src={differentiationBackground} 
            alt="" 
            className="w-full h-auto object-contain rounded-[3rem] shadow-2xl"
             style={{
              maskImage: 'linear-gradient(to top right, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top right, black 40%, transparent 100%)'
            }}
          />
        </div>
      </div>
      
      {/* Dynamic Modern Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      <div className="container-custom relative z-20">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32 space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-soft animate-fade-in">
            <MousePointer2 className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">למה לבחור בי</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] md:leading-[1] tracking-tighter px-4 text-center">
            מה מייחד את <br />
            <span className="text-primary italic font-medium">דרך האור</span>
          </h2>
          <div className="w-20 md:w-24 h-1 md:h-1.5 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* Values Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute -inset-4 bg-gradient-to-br ${value.color} rounded-[2rem] md:rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
              
              <div className="relative h-full p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white group-hover:border-primary/20 transition-all duration-500 shadow-soft hover:shadow-2xl hover:-translate-y-4">
                {/* Icon Container */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-8 md:mb-10">
                  <div className="absolute inset-0 bg-primary/5 rounded-xl md:rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="relative w-full h-full rounded-xl md:rounded-2xl bg-white border border-primary/10 flex items-center justify-center shadow-lg group-hover:-rotate-3 transition-transform duration-500">
                    <value.icon className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-body">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement Section */}
        <div className="mt-24 md:mt-48 max-w-5xl mx-auto">
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] bg-foreground text-white overflow-hidden group">
            {/* Animated Background Overlay */}
            <div 
              className="absolute top-0 right-0 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] bg-primary/20 rounded-full blur-[100px] md:blur-[120px] transition-transform duration-1000 group-hover:scale-125"
              style={{ transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)` }}
            />
            
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-primary/10 absolute top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 animate-float" />
            
            <div className="relative z-10 space-y-6 sm:space-y-8 md:space-y-12 text-center px-2 sm:px-4 md:px-6">
              <p className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl italic leading-relaxed font-medium text-white/90">
                "אתם לא מקולקלים. הגוף שלכם לא נגדכם. <br />
                יש כאן תהליך, יש ליווי ויש זמן. <br />
                אתם לא לבד".
              </p>
              
              <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
                <div className="w-10 sm:w-12 md:w-16 h-px bg-primary/40" />
                <div className="flex flex-col items-center">
                  <span className="text-primary font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] mb-1 md:mb-2">אתי אסתר דיין</span>
                  <span className="text-white/40 font-body text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">מנחת מסעות ריפוי</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
