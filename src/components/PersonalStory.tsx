import { Heart, Sparkles, ScrollText, Sunrise, Stars, Wind, Flower2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/use-scroll-reveal';
import personalStoryBg1 from '@/assets/personal story.jpg';
import personalStoryBg2 from '@/assets/Personal Story.png';

const PersonalStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, visibleItems: cardsVisible } = useStaggeredReveal(4, 100);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const backgrounds = [personalStoryBg1, personalStoryBg2];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMousePos({ x, y });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    window.addEventListener('mousemove', handleMouseMove);
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="my-story"
      ref={sectionRef}
      className="py-32 md:py-48 bg-[#FDFCF8] relative overflow-hidden"
    >
      {/* Artistic Photo Collage Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Image 1 - Top Right - Polaroid Style */}
        <div 
          className="absolute top-10 -right-10 md:right-10 w-[60%] md:w-[35%] opacity-[0.25] rotate-6 transition-all duration-1000 hover:rotate-3 hover:scale-105"
        >
          <div className="bg-white p-3 md:p-4 shadow-xl rounded-xl rotate-2">
            <img 
              src={backgrounds[0]} 
              alt="" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
        
        {/* Image 2 - Bottom Left - Polaroid Style */}
        <div 
          className="absolute bottom-20 -left-10 md:left-10 w-[60%] md:w-[35%] opacity-[0.25] -rotate-3 transition-all duration-1000 hover:-rotate-1 hover:scale-105"
        >
          <div className="bg-white p-3 md:p-4 shadow-xl rounded-xl -rotate-2">
            <img 
              src={backgrounds[1]} 
              alt="" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:100px_100px]" />
      </div>

      {/* Enhanced Background with Parallax */}
      <div 
        className="absolute top-1/4 right-0 w-[35rem] h-[35rem] bg-primary/6 rounded-full blur-[120px] transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-[40rem] h-[40rem] bg-secondary/6 rounded-full blur-[140px] transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
      />

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles 
          className="absolute top-[18%] left-[8%] w-8 h-8 text-primary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '0s' 
          }} 
        />
        <Heart 
          className="absolute bottom-[25%] right-[10%] w-7 h-7 text-secondary/15 fill-secondary/10 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) rotate(${mousePos.x * 2}deg)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1.5s' 
          }} 
        />
        <Stars 
          className="absolute top-[55%] left-[5%] w-7 h-7 text-primary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.25}px, ${mousePos.y * -0.25}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '3s' 
          }} 
        />
        <Wind 
          className="absolute top-[40%] right-[12%] w-9 h-9 text-secondary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '4.5s' 
          }} 
        />
        <Flower2 
          className="absolute bottom-[45%] left-[12%] w-8 h-8 text-primary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '6s' 
          }} 
        />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="text-center mb-16 md:mb-24 space-y-6"
          >
            <div className={`inline-flex items-center gap-4 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 hover:scale-105 transition-all duration-500 group cursor-default ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <ScrollText className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-primary font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] group-hover:tracking-[0.5em] transition-all duration-500">
                הסיפור שלי
              </span>
              <Stars className="w-3 h-3 text-primary/40 group-hover:text-primary group-hover:rotate-180 transition-all duration-700" />
            </div>
            <h2 className={`font-display text-4xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tighter transition-all duration-1000 delay-300 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              למה יצרתי את <br />
              <span className="text-primary italic font-medium inline-block hover:scale-105 transition-transform duration-500 cursor-default">
                דרך האור
              </span>
            </h2>
          </div>

          {/* Story Chapters */}
          <div className="space-y-20 md:space-y-32">
            
            {/* Intro Thought */}
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-white border border-primary/10 shadow-soft overflow-hidden group hover:shadow-card hover:scale-[1.02] hover:border-primary/20 transition-all duration-700 cursor-default">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 group-hover:bg-primary/10 transition-all duration-1000" />
                <p className="font-display text-xl sm:text-3xl md:text-4xl text-foreground leading-relaxed italic text-center relative z-10 group-hover:text-foreground/90 transition-colors duration-500">
                  "אצל רבים מאיתנו, נשים במיוחד, הגוף לוקח על עצמו תפקיד שהנפש כבר לא יכלה לשאת לבד"
                </p>
                <div className="mt-8 flex justify-center">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary/20 fill-primary/10 group-hover:text-primary/40 group-hover:fill-primary/20 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* The Conflict */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground border-r-4 border-primary/20 pr-6">הקריאה של הגוף</h3>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground/70 font-body leading-relaxed">
                  <p>
                    כאב שלא נאמר, עומס מתמשך, טראומה גלויה או סמויה. חיים של נתינה, החזקה, תפקוד - בלי מקום אמיתי לעצמי.
                  </p>
                  <p className="font-bold text-foreground">
                    ברפואה קוראים לזה ״הגוף תוקף את עצמו”.
                  </p>
                  <p>
                    מניסיוני האישי והטיפולי לעיתים זו לא תקיפה, אלא קריאה נואשת להקשבה.
                  </p>
                </div>
              </div>

              <div className={`p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-foreground text-white space-y-6 md:space-y-8 transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="space-y-4">
            <p className="text-lg md:text-xl font-display italic">
              "לפני <span className="font-numeric">27</span> שנים אובחנתי כחולה במחלה אוטואימונית קשה."
            </p>
                  <div className="h-px bg-white/10 w-16 md:w-24" />
                  <p className="text-xs md:text-sm text-white/60 font-body leading-relaxed">
                    3 שבועות אחרי לידה שקטה, הופיעו אצלי סימנים ראשונים למחלה. נאמר לי שזו מחלה כרונית לכל החיים ושעליי להיערך לחיים של תרופות וטיפולים.
                  </p>
                </div>
              </div>
            </div>

            {/* The Hard Years - Scrollable list or markers */}
            <div className={`space-y-8 md:space-y-12 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
                <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed italic">
                  הרופא אמר לי: "זו מחלה כרונית, מחלה לכל החיים"
                </p>
                <p className="text-base md:text-lg text-foreground/60 font-body leading-relaxed">
                  מאותו רגע התחילו שנים של סבל: כאבים, אשפוזים, תרופות מדכאות חיסון, סטרואידים, תרופות ביולוגיות. שנים של פחדים והרבה מאוד סמכות חיצונית שאמרה לי מה הגוף שלי לא יכול.
                </p>
              </div>

              <div 
                ref={cardsRef as React.RefObject<HTMLDivElement>}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              >
                {[
                  'אמא',
                  'לידה שקטה',
                  'אשפוזים ופחד',
                  'סמכות חיצונית'
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-primary/5 text-center shadow-sm hover:shadow-card hover:border-primary/20 hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-default group ${cardsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/40 group-hover:text-primary/60 group-hover:tracking-[0.2em] transition-all duration-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Turning Point */}
            <div className="relative py-12 md:py-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              </div>
              
              <div className="relative z-10 grid gap-16 md:gap-24">
                <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg animate-pulse">
                    <Sunrise className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">משהו בי התחיל לשאול...</h3>
                  <div className="max-w-2xl space-y-6 md:space-y-8 font-body text-lg md:text-xl text-foreground/70 leading-relaxed italic">
                    <p>התחלתי לקרוא, לחפש מידע, לחפש תשובות.</p>
                    <p className="text-xl md:text-2xl font-bold text-foreground not-italic">
                      "אם הגוף שלי יודע לפגוע בעצמו, <br />
                      אולי הוא גם יודע להבריא את עצמו?"
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-primary/5 border border-primary/10 text-center hover:bg-primary/10 transition-colors duration-500">
                    <p className="font-display text-base md:text-lg font-bold text-primary">מה הגוף שלי מנסה לעצור?</p>
                  </div>
                  <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-primary/5 border border-primary/10 text-center hover:bg-primary/10 transition-colors duration-500">
                    <p className="font-display text-base md:text-lg font-bold text-primary">
                      איזה עומס הגוף שלי כבר לא מוכן לשאת?
                    </p>
                  </div>
                  <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-primary/5 border border-primary/10 text-center hover:bg-primary/10 transition-colors duration-500">
                    <p className="font-display text-base md:text-lg font-bold text-primary">איך המחלה משרתת אותי?</p>
                  </div>
                  <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-primary/5 border border-primary/10 text-center hover:bg-primary/10 transition-colors duration-500">
                    <p className="font-display text-base md:text-lg font-bold text-primary">מה הגוף שלי מבקש ממני להבין?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Healing Journey */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  שיח מתמשך עם הגוף שלי <br />
                  <span className="text-primary italic">הקשבה לקול הפנימי ולנפש</span>
                </h3>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground/60 font-body leading-relaxed">
                  <p>
                    הפסקתי טיפולים בהדרגה ויצאתי למסע של ריפוי עצמי יחד עם הגוף שלי, לא נגדו. מעמיקה בהקשבה לגוף ולנפש.
                  </p>
                  <p>
                    למדתי הילינג. למדתי קבלה. עם השנים התופעות נעלמו. הייתה רמיסיה מוחלטת.
                  </p>
                </div>
              </div>
              
              <div className="relative p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-cream shadow-inner border border-secondary/10">
                <div className="space-y-4 md:space-y-6 font-body text-base md:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    ובתקופות של משברים רגשיים, היא הופיעה שוב לרגע, הגוף הזכיר לי לעצור ולהקשיב.
                  </p>
                  <p className="font-bold text-secondary">
                    היום, לאחר שנים של תהליך, אין בגופי עדות למחלה.
                  </p>
                  <p className="text-sm md:text-base text-foreground/60">
                    בדיקות רפואיות עדכניות מראות שאין ממצאים פעילים ואין זכר למה שתועד בעבר. אני חיה ללא טיפול תרופתי ובתפקוד מלא.
                  </p>
                </div>
              </div>
            </div>

            {/* The Final Confirmation */}
            <div className={`relative p-10 md:p-24 rounded-[3rem] md:rounded-[4rem] bg-foreground text-white text-center space-y-8 md:space-y-12 transition-all duration-1000 transform overflow-hidden group hover:scale-[1.02] cursor-default ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              {/* Animated background gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="space-y-4 relative z-10">
                <span className="text-primary font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] group-hover:tracking-[0.6em] transition-all duration-500">הניצחון של הרוח</span>
                <h3 className="font-display text-2xl sm:text-5xl md:text-6xl font-bold leading-tight group-hover:scale-105 transition-transform duration-500">
                  "הכול תקין. אין זכר למה שמתועד בתיק הרפואי."
                </h3>
              </div>
              
              <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-body leading-relaxed italic relative z-10 group-hover:text-white/80 transition-colors duration-500">
                היום אני כאן, בריאה, חיה ובהודיה עמוקה לגוף שלי. הסיפור שלי אינו הבטחה, הוא עדות לכך שלגוף יש חוכמה עמוקה, וכשהוא מקבל הקשבה ותנאים מיטיבים - <br />
                ייתכן שינוי משמעותי.
              </p>

              <div className="pt-4 md:pt-8 relative z-10">
                <div className="inline-flex flex-col items-center group/heart">
                  <div className="w-16 md:w-24 h-px bg-primary/40 mb-4 md:mb-6 group-hover/heart:w-24 md:group-hover/heart:w-32 group-hover/heart:bg-primary/60 transition-all duration-700" />
                  <p className="font-display text-xl md:text-2xl italic font-medium group-hover/heart:scale-110 transition-transform duration-500">אני כאן בשבילך</p>
                  <Heart className="w-5 h-5 mt-4 text-primary/40 fill-primary/20 group-hover/heart:text-primary group-hover/heart:fill-primary/30 group-hover/heart:scale-125 transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Conclusion CTA */}
            <div className="text-center max-w-2xl mx-auto space-y-8 md:space-y-10">
              <p className="text-lg md:text-2xl text-foreground font-body leading-relaxed group hover:text-foreground/90 transition-colors duration-500 cursor-default">
                הסיפור האישי שלי כולל מסע מרתק של ריפוי עצמי ממחלה אוטואימונית, תהליך של גילוי חוכמת הגוף והכוח הפנימי לריפוי. חוויותיי האישיות והמקצועיות מאפשרות לי להוביל אתכן במסע הזה בביטחון, הקשבה ותמיכה לאורך כל הדרך.
              </p>
              <a 
                href="#contact"
                className="group/cta inline-flex items-center justify-center gap-4 px-10 py-5 md:px-12 md:py-6 rounded-full bg-primary text-white font-bold text-lg md:text-xl hover:scale-105 transition-all duration-400 shadow-lg hover:shadow-[0_20px_60px_rgba(var(--primary),0.35)] w-full sm:w-auto ripple-effect relative overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePos.y * -0.02}deg) rotateY(${mousePos.x * 0.02}deg)`,
                  transition: 'transform 0.3s ease-out, box-shadow 0.5s, scale 0.5s',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Pulsing Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-0 group-hover/cta:opacity-100" />
                <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-110 animate-ping opacity-0 group-hover/cta:opacity-100" style={{ animationDelay: '0.5s' }} />
                
                <span className="relative z-10 group-hover/cta:tracking-wider transition-all duration-300">בואי נדבר</span>
                <Heart className="w-5 h-5 relative z-10 group-hover/cta:scale-110 group-hover/cta:fill-white/30 transition-all duration-400" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;

