import { Heart, Sparkles, ScrollText, Sunrise, Stars, Wind, Flower2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import personalStoryBg1 from '@/assets/5.JPG';
import personalStoryBg2 from '@/assets/Personal Story.png';
import treeHeaderImage from '@/assets/5.JPG';

const PersonalStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
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
      className="py-32 md:py-48 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #e8e8e0, #f0f0e8, #faf9f5)' }}
    >
      
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
            className="text-center mb-16 md:mb-24 space-y-6 relative py-16 md:py-24 px-4 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={treeHeaderImage} 
                alt="" 
                className="w-full h-full object-cover opacity-90 brightness-110"
              />
              {/* Gradient overlays for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f5]/95 via-[#faf9f5]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#e8e8e0]/50 via-transparent to-[#faf9f5]/95" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className={`inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border-2 border-white/90 shadow-lg hover:bg-white/95 hover:scale-105 transition-all duration-500 group cursor-default ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <ScrollText className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-500 drop-shadow-sm" />
                <span className="text-foreground font-body text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] md:tracking-[0.4em] group-hover:tracking-[0.5em] transition-all duration-500 drop-shadow-sm">
                  הסיפור שלי
                </span>
                <Stars className="w-3 h-3 text-primary group-hover:text-primary group-hover:rotate-180 transition-all duration-700 drop-shadow-sm" />
              </div>
              <h2 className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tighter transition-all duration-1000 delay-300 px-4 text-center drop-shadow-2xl ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                למה יצרתי את <br />
                <span className="text-primary italic font-black inline-block hover:scale-105 transition-transform duration-500 cursor-default mt-2 drop-shadow-2xl">
                  דרך האור
                </span>
              </h2>
            </div>
          </div>

          {/* Story Chapters */}
          <div className="space-y-20 md:space-y-32">
            
            {/* Intro Thought */}
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] bg-white border border-primary/10 shadow-soft overflow-hidden group hover:shadow-card hover:scale-[1.02] hover:border-primary/20 transition-all duration-700 cursor-default">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 group-hover:bg-primary/10 transition-all duration-1000" />
                <p className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground leading-relaxed italic text-center relative z-10 group-hover:text-foreground/90 transition-colors duration-500 px-2">
                  "אצל רבים מאיתנו, נשים במיוחד, הגוף לוקח על עצמו תפקיד שהנפש כבר לא יכלה לשאת לבד"
                </p>
                <div className="mt-6 md:mt-8 flex justify-center">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary/20 fill-primary/10 group-hover:text-primary/40 group-hover:fill-primary/20 group-hover:scale-110 transition-all duration-500" />
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

              <div className={`p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] space-y-6 md:space-y-8 transition-all duration-1000 delay-400 transform shadow-2xl border-2 border-primary/30 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/15 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary drop-shadow-md" />
                </div>
                <div className="space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-display italic font-bold text-primary drop-shadow-lg leading-relaxed">
              "לפני <span className="font-numeric text-3xl md:text-4xl lg:text-5xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">27</span> שנים אובחנתי כחולה במחלה אוטואימונית קשה."
            </p>
                  <div className="h-px bg-primary/60 w-16 md:w-24 shadow-lg" />
                  <p className="text-base md:text-lg lg:text-xl text-white font-body leading-relaxed font-semibold drop-shadow-md">
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
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight px-4 text-center">משהו בי התחיל לשאול...</h3>
                  <div className="max-w-2xl space-y-6 md:space-y-8 font-body text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed italic px-4">
                    <p>התחלתי לקרוא, לחפש מידע, לחפש תשובות.</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground not-italic text-center">
                      "אם הגוף שלי יודע לפגוע בעצמו, <br />
                      אולי הוא גם יודע להבריא את עצמו?"
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/40 text-center hover:from-primary/30 hover:to-primary/40 hover:border-primary/50 hover:shadow-lg transition-all duration-500">
                    <p className="font-display text-base md:text-lg font-bold text-foreground drop-shadow-sm">מה הגוף שלי מנסה לעצור?</p>
                  </div>
                  <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/40 text-center hover:from-primary/30 hover:to-primary/40 hover:border-primary/50 hover:shadow-lg transition-all duration-500">
                    <p className="font-display text-base md:text-lg font-bold text-foreground drop-shadow-sm">
                      איזה עומס הגוף שלי כבר לא מוכן לשאת?
                    </p>
                  </div>
                  <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/40 text-center hover:from-primary/30 hover:to-primary/40 hover:border-primary/50 hover:shadow-lg transition-all duration-500">
                    <p className="font-display text-base md:text-lg font-bold text-foreground drop-shadow-sm">איך המחלה משרתת אותי?</p>
                  </div>
                  <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/40 text-center hover:from-primary/30 hover:to-primary/40 hover:border-primary/50 hover:shadow-lg transition-all duration-500">
                    <p className="font-display text-base md:text-lg font-bold text-foreground drop-shadow-sm">מה הגוף שלי מבקש ממני להבין?</p>
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
            <div className={`relative p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] text-white text-center space-y-6 sm:space-y-8 md:space-y-12 transition-all duration-1000 transform overflow-hidden group hover:scale-[1.02] cursor-default shadow-2xl border-2 border-primary/30 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}>
              {/* Animated background gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="space-y-3 sm:space-y-4 relative z-10">
                <span className="text-primary font-body text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] group-hover:tracking-[0.4em] md:group-hover:tracking-[0.6em] transition-all duration-500 drop-shadow-lg">הניצחון של הרוח</span>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight group-hover:scale-105 transition-transform duration-500 px-2 sm:px-4 text-primary drop-shadow-2xl">
                  "הכול תקין. אין זכר למה שמתועד בתיק הרפואי."
                </h3>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto font-body leading-relaxed italic relative z-10 px-2 sm:px-4 font-semibold drop-shadow-lg">
                היום אני כאן, בריאה, חיה ובהודיה עמוקה לגוף שלי. הסיפור שלי אינו הבטחה, הוא עדות לכך שלגוף יש חוכמה עמוקה, וכשהוא מקבל הקשבה ותנאים מיטיבים - <br />
                ייתכן שינוי משמעותי.
              </p>

              <div className="pt-3 sm:pt-4 md:pt-8 relative z-10">
                <div className="inline-flex flex-col items-center group/heart">
                  <div className="w-12 sm:w-16 md:w-24 h-px bg-primary/60 mb-3 sm:mb-4 md:mb-6 group-hover/heart:w-16 sm:group-hover/heart:w-24 md:group-hover/heart:w-32 group-hover/heart:bg-primary transition-all duration-700 shadow-lg" />
                  <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-bold group-hover/heart:scale-110 transition-transform duration-500 text-primary drop-shadow-lg">אני כאן בשבילך</p>
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 mt-3 sm:mt-4 text-primary fill-primary/30 group-hover/heart:fill-primary/50 group-hover/heart:scale-125 transition-all duration-500 drop-shadow-lg" />
                </div>
              </div>
            </div>

            {/* Conclusion CTA */}
            <div className="text-center max-w-2xl mx-auto space-y-8 md:space-y-10">
              <p className="text-lg md:text-2xl text-foreground font-body leading-relaxed group hover:text-foreground/90 transition-colors duration-500 cursor-default">
                הסיפור האישי שלי כולל מסע מרתק של ריפוי עצמי ממחלה אוטואימונית, תהליך של גילוי חוכמת הגוף והכוח הפנימי לריפוי. חוויותיי האישיות והמקצועיות מאפשרות לי להוביל אותך במסע הזה בביטחון, הקשבה ותמיכה לאורך כל הדרך.
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
                
                <span className="relative z-10 group-hover/cta:tracking-wider transition-all duration-300">נדבר?</span>
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

