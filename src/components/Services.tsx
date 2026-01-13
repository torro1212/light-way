import { Calendar, Users, Clock, Sparkles, Stars, Wind, Flower2, Heart, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import backImage from '@/assets/Back.png';

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const programDetails = [
    { icon: Calendar, label: 'מפגש שבועי', detail: 'פעם בשבוע' },
    { icon: Clock, label: '18:00-21:00', detail: '3 שעות' },
    { icon: Sparkles, label: 'מרחב של הקשבה וריפוי', detail: 'מסע עמוק ומרפא' },
    { icon: Users, label: 'עד 10 משתתפים ומשתתפות', detail: 'קבוצה קטנה ומחוייבת' },
    { icon: Heart, label: '10 חודשים', detail: 'מסע מלא' }
  ];

  const programIncludes = [
    'מרחב בטוח של הקשבה, חיבור פנימי וריפוי',
    'טיפולי הילינג קבוצתיים',
    'כלי נגינה תרפוייטים, תדרי ריפוי וצלילים מרפאים',
    'תרגולי נשימה והרפיה',
    'עבודה תודעתית והקשבה לגוף',
    'דיבור עם הגוף וזיהוי מסרים',
    'כלים לריפוי עצמי והילינג עצמי',
    'ליווי רגשי ותמיכה אישית בתוך הקבוצה'
  ];

  const toolsLearned = [
    'הקשבה לסימפטומים ולגוף',
    'זיהוי טריגרים רגשיים והתנהגותיים',
    'תרגול נשימה, הרפיה ומדיטציה',
    'חיזוק תחושת מסוגלות ובחירה',
    'יצירת גבולות פנימיים וחיצוניים',
    'שיפור ויסות רגשי ופיזי',
    'חיבור למשאבים פנימיים ולהילינג עצמי'
  ];

  const monthlyStructure = [
    { month: 1, title: 'יצירת מרחב בטוח וברית עם הגוף' },
    { month: 2, title: 'מערכת החיסון כראי רגשי' },
    { month: 3, title: 'סטרס, טראומה והגוף' },
    { month: 4, title: 'גבולות, ריצוי והחזקה' },
    { month: 5, title: 'הקול שלא נאמר' },
    { month: 6, title: 'זהות, ערך עצמי ומחלה' },
    { month: 7, title: 'הקשבה לסימפטומים' },
    { month: 8, title: 'הילינג עצמי' },
    { month: 9, title: 'יצירת תנאים לריפוי' },
    { month: 10, title: 'אינטגרציה וסגירה' }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #faf9f5, #f0f0e8, #e8e8e0)' }}>
      
      {/* Modern Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* Enhanced Background with Parallax */}
      <div 
        className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-primary/8 rounded-full blur-[100px] transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-1/4 -left-20 w-[35rem] h-[35rem] bg-secondary/8 rounded-full blur-[120px] transition-transform duration-500"
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
        <Stars 
          className="absolute bottom-[30%] right-[12%] w-7 h-7 text-secondary/20 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) rotate(${mousePos.x * 2}deg)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1.5s' 
          }} 
        />
        <Wind 
          className="absolute top-[50%] right-[6%] w-9 h-9 text-primary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.25}px, ${mousePos.y * -0.25}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '3s' 
          }} 
        />
        <Flower2 
          className="absolute top-[70%] left-[8%] w-8 h-8 text-secondary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '4.5s' 
          }} 
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16 md:mb-32 max-w-5xl mx-auto"
        >
          <div className={`transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-6 md:mb-8 group px-4">
              <div className="w-8 sm:w-12 md:w-16 h-1 bg-primary/80 group-hover:w-12 sm:group-hover:w-20 md:group-hover:w-24 transition-all duration-700 shadow-sm" />
              <span className="text-foreground bg-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-body text-[9px] sm:text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] border-2 border-primary/30 whitespace-nowrap">
                התוכנית הקבוצתית
              </span>
              <div className="w-8 sm:w-12 md:w-16 h-1 bg-primary/80 group-hover:w-12 sm:group-hover:w-20 md:group-hover:w-24 transition-all duration-700 shadow-sm" />
            </div>
            
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6 md:mb-8 px-4 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
              דרך האור
            </h2>
            
            <p className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground/95 italic font-normal mb-3 sm:mb-4 md:mb-6 px-4 sm:px-6 text-center drop-shadow-sm">
              מסע ריפוי אישי וקבוצתי למתמודדים עם מחלה אוטואימונית
            </p>

            <p className="font-display text-xl md:text-3xl lg:text-4xl text-gradient-gold italic font-medium mb-4 drop-shadow-md">
              לגלות את החוכמה הפנימית של הגוף
            </p>
            
            <p className="text-lg md:text-xl text-foreground/80 font-body font-medium bg-white/50 inline-block px-5 py-2 rounded-xl" style={{ letterSpacing: '0.02em' }}>
              עם אתי אסתר דיין
            </p>
          </div>
        </div>

        {/* Program Details Highlight */}
        <div className="mb-20 md:mb-32">
          <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4 drop-shadow-sm">
                קבוצה טיפולית תהליכית – <span className="font-numeric">10</span> חודשים
              </h3>
              <div className="bg-white/60 backdrop-blur-sm inline-block px-6 py-3 rounded-2xl border border-primary/20">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 font-body italic">
                  מרחב בטוח, עמוק ומכיל, למסע של הקשבה לגוף, חיבור פנימי ותהליך ריפוי למתמודדים עם מחלה אוטואימונית
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4">
              {/* Top row - 2 boxes */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 mb-8 md:mb-12 max-w-2xl mx-auto">
                {[programDetails[0], programDetails[1]].map((item, i) => (
                  <div key={i} className="text-center group cursor-default">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-7 h-7 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1 font-numeric px-1">
                      {item.label}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/60 font-body px-1">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Center box - highlighted */}
              <div className="flex justify-center mb-8 md:mb-12 px-4">
                {(() => {
                  const CenterIcon = programDetails[2].icon;
                  return (
                    <div className="text-center group cursor-default max-w-xs sm:max-w-none">
                      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary group-hover:to-primary/90 group-hover:scale-110 transition-all duration-500 border-2 border-primary/30">
                        <CenterIcon className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-display text-base sm:text-lg md:text-xl font-bold text-primary mb-1 px-2">
                        {programDetails[2].label}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-foreground/70 font-body font-medium px-2">
                        {programDetails[2].detail}
                      </p>
                    </div>
                  );
                })()}
              </div>
              
              {/* Bottom row - 2 boxes */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 max-w-2xl mx-auto">
                {[programDetails[3], programDetails[4]].map((item, i) => (
                  <div key={i + 3} className="text-center group cursor-default">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-7 h-7 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1 font-numeric px-1">
                      {item.label}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/60 font-body px-1">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-20 md:mb-32 px-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-12 text-center drop-shadow-sm">
            מה כוללת התוכנית
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {programIncludes.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary shrink-0 group-hover:scale-125 transition-transform" />
                <span className="font-body text-base md:text-lg text-foreground/95 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Learned */}
        <div className="mb-20 md:mb-32 px-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-12 text-center drop-shadow-sm">
            כלים נלמדים לאורך התהליך
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {toolsLearned.map((tool, i) => (
              <div 
                key={i}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm border-2 border-primary/25 hover:border-secondary/40 hover:shadow-xl hover:scale-105 transition-all duration-500 group cursor-default"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform shadow-sm" />
                  <span className="font-body text-base md:text-lg text-foreground/95 font-medium">
                    {tool}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Structure - Timeline */}
        <div className="mb-20 md:mb-32 relative">
          {/* Background Image for Monthly Structure */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[3rem]">
            <img 
              src={backImage} 
              alt="" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <div className="relative z-10 px-6">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 text-center drop-shadow-sm">
              מבנה חודשי – <span className="font-numeric">10</span> חודשים
            </h3>
            <div className="bg-white/70 backdrop-blur-sm inline-block px-6 py-3 rounded-2xl border border-primary/20 mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-foreground/90 font-body text-center max-w-3xl mx-auto font-medium">
                כל חודש במסע מוקדש לנושא אחר, עם מפגשים שבועיים שמעמיקים בו
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              {monthlyStructure.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => setExpandedMonth(expandedMonth === i ? null : i)}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-6 md:gap-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-primary/25 hover:border-primary/40 hover:shadow-xl transition-all duration-500">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <span className="font-numeric text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
                        {item.month}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg md:text-2xl font-bold text-foreground/95 group-hover:text-foreground transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className={`w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center transition-transform duration-500 ${expandedMonth === i ? 'rotate-180' : ''}`}>
                      <span className="text-primary text-xl">↓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Quote */}
        <div className="mb-20 md:mb-32">
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-[2rem] md:rounded-[3rem] bg-foreground text-white overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
            <p className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl italic leading-relaxed relative z-10 text-center text-white/90 group-hover:text-white transition-colors duration-500 px-2 sm:px-4 md:px-6">
              "הגוף יודע לרפא את עצמו, <br /> הוא רק צריך שנפסיק להילחם בו ונתחיל להקשיב לו"
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-white/80 via-primary/15 to-secondary/15 backdrop-blur-sm border-2 border-primary/30 shadow-xl">
            <h3 className="font-display text-2xl md:text-4xl font-bold text-primary mb-6 md:mb-8 drop-shadow-lg">
              דרך האור
            </h3>
            <p className="text-lg md:text-2xl text-foreground/90 font-body leading-relaxed mb-8 md:mb-10 font-medium">
              אם משהו בפנים מרגיש שזה הזמן להקשיב, להעמיק, ולצאת למסע –<br />
              ליצירת קשר וקבלת פרטים נוספים<br />
              👇
            </p>
            
            <a
              href="https://wa.me/972526172932"
              className="inline-flex items-center justify-center gap-4 px-12 py-6 md:px-16 md:py-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg md:text-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 group"
            >
              <span>📲 להרשמה ופרטים נוספים</span>
            </a>
            
            <p className="mt-6 text-base md:text-lg text-foreground/60 font-numeric" dir="ltr">
              052-617-2932
            </p>
            <p className="mt-2 text-sm md:text-base text-foreground/50 font-body">
              כתבי הודעה, ואשמח לחזור אלייך 🤍
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
