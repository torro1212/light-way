import { Calendar, Users, Clock, Sparkles, Stars, Wind, Flower2, Heart, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import servicesBackground from '@/assets/services.jpg';
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
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Artistic Background Image Placement */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Floating Image left side */}
        <div className="absolute top-10 -left-5 md:top-20 md:-left-10 w-[50%] md:w-[45%] opacity-[0.15] md:opacity-[0.2] -rotate-6 transition-transform duration-1000 hover:rotate-0">
           <img 
            src={servicesBackground} 
            alt="" 
            className="w-full h-auto object-contain rounded-[4rem] shadow-2xl"
            style={{
              maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)'
            }}
          />
        </div>
      </div>
      
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
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8 group">
              <div className="w-12 md:w-16 h-0.5 bg-primary group-hover:w-20 md:group-hover:w-24 transition-all duration-700" />
              <span className="text-primary font-body text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">
                התוכנית הקבוצתית
              </span>
              <div className="w-12 md:w-16 h-0.5 bg-primary group-hover:w-20 md:group-hover:w-24 transition-all duration-700" />
            </div>
            
            <h2 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-[1.1] mb-6 md:mb-8 px-4">
              דרך האור
            </h2>
            
            <p className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary/80 italic font-medium mb-4 md:mb-6 px-6">
              מסע ריפוי אישי וקבוצתי למתמודדים עם מחלות אוטואימוניות
            </p>

            <p className="text-xl md:text-3xl text-foreground/70 font-body font-light leading-relaxed mb-4">
              לגלות את החוכמה הפנימית של הגוף
            </p>
            
            <p className="text-lg md:text-xl text-foreground/50 font-body">
              עם אתי אסתר דיין
            </p>
          </div>
        </div>

        {/* Program Details Highlight */}
        <div className="mb-20 md:mb-32">
          <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
                קבוצה טיפולית תהליכית – <span className="font-numeric">10</span> חודשים
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/60 font-body italic px-4">
                מרחב בטוח, עמוק ומכיל, למסע של הקשבה לגוף, חיבור פנימי ותהליך ריפוי למתמודדים עם מחלות אוטואימוניות
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {programDetails.map((item, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-1 font-numeric">
                    {item.label}
                  </h4>
                  <p className="text-sm md:text-base text-foreground/60 font-body">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-20 md:mb-32 px-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-12 text-center">
            מה כוללת התוכנית
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {programIncludes.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/50 backdrop-blur-xl border border-primary/10 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary shrink-0 group-hover:scale-125 transition-transform" />
                <span className="font-body text-base md:text-lg text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Learned */}
        <div className="mb-20 md:mb-32 px-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-12 text-center">
            כלים נלמדים לאורך התהליך
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {toolsLearned.map((tool, i) => (
              <div 
                key={i}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:border-secondary/30 hover:shadow-xl hover:scale-105 transition-all duration-500 group cursor-default"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                  <span className="font-body text-base md:text-lg text-foreground font-medium">
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
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 text-center">
              מבנה חודשי – <span className="font-numeric">10</span> חודשים
            </h3>
            <p className="text-lg md:text-xl text-foreground/60 font-body text-center mb-8 md:mb-12 max-w-3xl mx-auto">
              כל חודש במסע מוקדש לנושא אחר, עם מפגשים שבועיים שמעמיקים בו
            </p>
            
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              {monthlyStructure.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => setExpandedMonth(expandedMonth === i ? null : i)}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-6 md:gap-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/50 backdrop-blur-xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <span className="font-numeric text-2xl md:text-3xl font-bold text-white">
                        {item.month}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
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
          <div className="relative p-12 md:p-20 rounded-[2rem] md:rounded-[3rem] bg-foreground text-white overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
            <p className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl italic leading-relaxed relative z-10 text-center text-white/90 group-hover:text-white transition-colors duration-500 px-6">
              "הגוף יודע לרפא את עצמו, הוא רק צריך שנפסיק להילחם בו ונתחיל להקשיב לו"
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 border-2 border-primary/20">
            <h3 className="font-display text-2xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
              דרך האור
            </h3>
            <p className="text-lg md:text-2xl text-foreground/70 font-body leading-relaxed mb-8 md:mb-10">
              אם משהו בפנים מרגיש שזה הזמן להקשיב, להעמיק, ולצאת למסע –<br />
              מוזמנים ומוזמנות ליצור קשר ולקבל פרטים נוספים.
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
