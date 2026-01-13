import { useState, useEffect, useRef } from 'react';
import etiPortrait from '@/assets/eti-about.png';
import { Sparkles, ArrowDownRight, Quote, Heart } from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/use-scroll-reveal';
import image1 from '@/assets/1.JPG';
import image2 from '@/assets/2.JPG';
import image4 from '@/assets/4.JPG';
import image3 from '@/assets/3.JPG';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, visibleItems: cardsVisible } = useStaggeredReveal(3, 150);

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
      className="section-padding relative overflow-hidden py-32 md:py-48"
      style={{ background: 'linear-gradient(to bottom, #faf9f5, #f0f0e8, #e8e8e0)' }}
    >
      
      {/* Decorative Modern Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-32 items-center">
          
          {/* Visual Canvas - 1 Column */}
          <div className="lg:col-span-1 relative order-2 lg:order-1 px-4 sm:px-0 max-w-md md:max-w-lg mx-auto">
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
                  <span className="font-body text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary">שנות ניסיון</span>
                  <div className="w-10 h-0.5 md:w-12 md:h-px bg-gradient-gold mt-4 md:mt-6 group-hover:w-16 md:group-hover:w-20 transition-all duration-500" />
                  <Heart className="w-6 h-6 md:w-8 md:h-8 mt-3 text-primary group-hover:scale-110 group-hover:fill-primary/20 transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Background Decor Component */}
            <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-32 h-32 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-2xl md:blur-3xl animate-pulse-slow" />
          </div>

          {/* Narrative Side - 11 Columns */}
          <div className="lg:col-span-11 space-y-12 md:space-y-16 order-1 lg:order-2">
            <div className={`space-y-8 md:space-y-10 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="flex items-center gap-4 group relative">
                {/* Image on the left side */}
                <div className="hidden md:block absolute left-40 lg:left-60 top-1/2 -translate-y-1/2 w-96 lg:w-[28rem] group-hover:scale-105 transition-transform duration-500">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/70 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <img 
                      src={image3} 
                      alt="" 
                      className="w-full h-auto aspect-square object-cover"
                    />
                  </div>
                </div>
                <span className="text-primary font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] py-2 px-4 bg-primary/5 rounded-full group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-500">
                  הכירו אותי
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent group-hover:from-primary/60 transition-all duration-700" />
              </div>

              <h2 
                ref={titleRef as React.RefObject<HTMLHeadingElement>}
                className={`font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] md:leading-[1] tracking-tighter transition-all duration-1000 px-6 md:px-8 text-center md:text-right ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                שילוב של <br />
                <span className="text-gradient-gold italic font-medium inline-block hover:scale-105 transition-transform duration-500 cursor-default pr-2">
                  קליני ורוחני
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-4 md:pt-8">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-xl md:text-2xl text-foreground font-body font-light leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                    אני אתי אסתר דיין, מובילת התוכנית. <br />
                    אני מגיעה עם ניסיון חיים אישי ומקצועי עשיר ומגוון שמשלב עולמות שונים. <br />
                    המסע שלי בעולם הטיפול התחיל מתוך חיפוש אישי אחר ריפוי ושלמות.
                  </p>
                  <div className="flex items-center gap-3 text-secondary group cursor-default">
                    <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="font-body font-bold text-xs md:text-sm uppercase tracking-widest">המסע המקצועי שלי</span>
                  </div>
                </div>
                
                <p className="text-base md:text-lg text-foreground/60 font-body leading-relaxed">
                  אשת חינוך, אמא וסבתא עם הבנה עמוקה של תהליכים משפחתיים, ומסע אישי של ריפוי שהפך לדרך מקצועית של ליווי במסעות ריפוי אישיים.
                </p>
              </div>
            </div>

            {/* Detailed Professional Background */}
            <div className="space-y-6 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-white/70 via-primary/15 to-secondary/15 backdrop-blur-sm border-2 border-primary/20">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground/95 mb-6 drop-shadow-sm">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform shadow-sm" />
                    <div>
                      <h4 className="font-body text-base md:text-lg font-bold text-foreground/95 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm md:text-base text-foreground/75 font-body font-medium">
                        {item.hasNumber ? (
                          <>
                            כ־<span className="font-bold">33</span> שנים של עבודה עם אנשים
                          </>
                        ) : item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Background Section - Image Gallery */}
            <div 
              ref={cardsRef as React.RefObject<HTMLDivElement>}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto"
            >
              {[image1, image2, image4].map((imgSrc, i) => (
                <div 
                  key={i} 
                  className={`group relative transition-all duration-700 hover:-translate-y-1 cursor-default ${cardsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-white/70 group-hover:border-white/90 group-hover:shadow-lg transition-all duration-500 rotate-1 group-hover:rotate-0">
                    <img 
                      src={imgSrc} 
                      alt={`טיפול ${i + 1}`}
                      className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Insight Card */}
            <div className={`relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[3rem] bg-foreground text-white overflow-hidden group transition-all duration-1000 delay-700 transform hover:scale-[1.02] cursor-default ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/20 rounded-full blur-[80px] md:blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-secondary/20 rounded-full blur-[60px] md:blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary/20 absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-700" />
              <p className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl italic leading-relaxed relative z-10 text-white/90 group-hover:text-white transition-colors duration-500 px-2 sm:px-4 md:px-6 text-center">
                "הגוף יודע לרפא את עצמו, <br /> הוא רק צריך שנפסיק להילחם בו ונתחיל להקשיב לו"
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
