import { useState, useEffect, useRef } from 'react';
import etiPortrait from '@/assets/eti-about.png';
import { Sparkles, ArrowDownRight, Quote, Heart } from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/use-scroll-reveal';
import aboutBackground from '@/assets/Back.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, visibleItems: cardsVisible } = useStaggeredReveal(4, 150);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden py-32 md:py-48"
    >
      {/* Artistic Background Image Placement */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Large blended image positioned delicately */}
        <div 
          className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-[60%] md:w-[60%] opacity-[0.1] md:opacity-[0.15] rotate-3 transition-transform duration-1000 hover:scale-105"
        >
          <img 
            src={aboutBackground} 
            alt="" 
            className="w-full h-auto object-contain rounded-[3rem]"
            style={{
              maskImage: 'linear-gradient(to bottom left, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom left, black 40%, transparent 100%)'
            }}
          />
        </div>
      </div>
      
      {/* Decorative Modern Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-32 items-center">
          
          {/* Visual Canvas - 5 Columns */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 px-4 sm:px-0">
            <div 
              className="relative z-10 transition-all duration-700 ease-out"
              style={{ 
                transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px) rotate(${mousePos.x * 2}deg)`,
              }}
            >
              {/* Complex Modern Frame with Animations */}
              <div className="absolute -inset-6 md:-inset-12 bg-primary/5 rounded-[2.5rem] md:rounded-[4rem] blur-[60px] md:blur-[80px] animate-blob" />
              <div className="absolute -inset-4 md:-inset-8 border border-primary/20 rounded-[2rem] md:rounded-[3.5rem] transform -rotate-3 transition-all duration-700 hover:rotate-0 hover:border-primary/40" />
              <div className="absolute -inset-4 md:-inset-8 border border-secondary/20 rounded-[2rem] md:rounded-[3.5rem] transform rotate-2 transition-all duration-700 hover:rotate-0 hover:border-secondary/40" />
              
              {/* Main Image with Reveal */}
              <div className={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-1000 transform group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <img
                  src={etiPortrait}
                  alt="אתי אסתר דיין - מטפלת"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-auto object-cover aspect-[3/4] transition-all duration-[2s] group-hover:scale-110 ${imageLoaded ? 'blur-0' : 'blur-sm'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-700" />
                
                {/* Animated Border on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-[2rem] animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary rounded-br-[2rem] animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              {/* Innovative Experience Badge */}
              <div 
                className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 glass-card p-6 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] magnetic-hover group cursor-default"
                style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
              >
                <div className="flex flex-col items-center text-center">
                  <span className="font-numeric text-4xl md:text-6xl font-bold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-500">15</span>
                  <span className="font-body text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-secondary">שנות ניסיון</span>
                  <div className="w-10 h-0.5 md:w-12 md:h-px bg-gradient-gold mt-4 md:mt-6 group-hover:w-16 md:group-hover:w-20 transition-all duration-500" />
                  <Heart className="w-4 h-4 mt-3 text-primary/40 group-hover:text-primary group-hover:fill-primary/20 transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Background Decor Component */}
            <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-32 h-32 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-2xl md:blur-3xl animate-pulse-slow" />
          </div>

          {/* Narrative Side - 7 Columns */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16 order-1 lg:order-2">
            <div className={`space-y-8 md:space-y-10 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="flex items-center gap-4 group">
                <span className="text-primary font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] py-2 px-4 bg-primary/5 rounded-full group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-500">
                  הכירו אותי
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent group-hover:from-primary/60 transition-all duration-700" />
              </div>

              <h2 
                ref={titleRef as React.RefObject<HTMLHeadingElement>}
                className={`font-display text-4xl sm:text-7xl md:text-8xl font-bold text-foreground leading-[1.1] md:leading-[0.9] tracking-tighter transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                מרחב של <br />
                <span className="text-gradient-gold italic font-medium inline-block hover:scale-105 transition-transform duration-500 cursor-default">
                  הקשבה אמיתית
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-4 md:pt-8">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-xl md:text-2xl text-foreground font-body font-light leading-relaxed">
                    אני אתי אסתר דיין, מובילת התוכנית. אני מגיעה עם ניסיון חיים אישי ומקצועי עשיר ומגוון שמשלב עולמות שונים.
                  </p>
                  <div className="flex items-center gap-3 text-secondary group cursor-default">
                    <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="font-body font-bold text-xs md:text-sm uppercase tracking-widest">המסע המקצועי שלי</span>
                  </div>
                </div>
                
                <p className="text-base md:text-lg text-foreground/60 font-body leading-relaxed">
                  <span className="font-numeric">33</span> שנות חינוך, אמא וסבתא עם הבנה עמוקה של תהליכים משפחתיים, ומסע אישי של ריפוי שהפך לדרך מקצועית של ליווי נשים במסעות שלהן.
                </p>
              </div>
            </div>

            {/* Detailed Professional Background */}
            <div className="space-y-6 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/30">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                הניסיון והמומחיות שלי
              </h3>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { title: 'אשת חינוך', detail: 'כ־33 שנים של עבודה עם אנשים', hasNumber: true },
                  { title: 'אמא וסבתא', detail: 'הבנה עמוקה של תהליכים משפחתיים' },
                  { title: 'תרפיסטית ופסיכותרפיסטית באומנות', detail: 'עבודה עם רגשות, טראומות וחיזוק העצמי' },
                  { title: 'מטפלת בהילינג', detail: 'כלים אנרגטיים ותודעתיים, הילינג עץ החיים' },
                  { title: 'מטפלת בתנועה נשית', detail: 'חיבור לגוף ולחכמה הפנימית' },
                  { title: 'סאונד הילרית', detail: 'כלי נגינה תרפוייטים, תדרי ריפוי וצלילים מרפאים' },
                  { title: 'מטפלת במודל היזכרות', detail: 'טיפול הילינג בשילוב ניגון בקערת קריסטל' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform" />
                    <div>
                      <h4 className="font-body text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm md:text-base text-foreground/60 font-body">
                        {item.hasNumber ? (
                          <>
                            כ־<span className="font-numeric">33</span> שנים של עבודה עם אנשים
                          </>
                        ) : item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Background Section */}
            <div 
              ref={cardsRef as React.RefObject<HTMLDivElement>}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {[
                { label: 'תרפיה באומנות', desc: 'עבודה עם רגשות', icon: Sparkles },
                { label: 'הילינג', desc: 'עץ החיים ומודל היזכרות', icon: Sparkles },
                { label: 'תנועה נשית', desc: 'חיבור לגוף', icon: Sparkles },
                { label: 'סאונד הילינג', desc: 'צלילים ותדרי ריפוי', icon: Sparkles }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-primary/10 hover:border-primary/40 hover:shadow-card transition-all duration-700 hover:-translate-y-4 hover:rotate-1 cursor-default text-center ${cardsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/5 flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-pulse" />
                  </div>
                  <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-500">
                    {item.label}
                  </h4>
                  <p className="font-body text-[10px] text-foreground/40 font-bold uppercase tracking-widest group-hover:text-foreground/60 transition-colors duration-500">
                    {item.label === 'הילינג' ? (
                      <>
                        עץ החיים <br />
                        ומודל היזכרות
                      </>
                    ) : item.desc}
                  </p>
                  
                  {/* Decorative corner on hover */}
                  <div className="absolute top-4 right-4 w-0 h-0 border-t-2 border-r-2 border-primary/0 group-hover:w-6 group-hover:h-6 group-hover:border-primary/40 transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* Bottom Insight Card */}
            <div className={`relative p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-foreground text-white overflow-hidden group transition-all duration-1000 delay-700 transform hover:scale-[1.02] cursor-default ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/20 rounded-full blur-[80px] md:blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-secondary/20 rounded-full blur-[60px] md:blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/20 absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-700" />
              <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl italic leading-relaxed relative z-10 text-white/90 group-hover:text-white transition-colors duration-500">
                "הגוף יודע לרפא את עצמו, הוא רק צריך שנפסיק להילחם בו ונתחיל להקשיב לו"
              </p>
              
              {/* Animated gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundSize: '200% 100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
