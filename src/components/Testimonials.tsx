import { Star, Quote, MessageSquare, Sparkles, Heart, Wind, Flower2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useState, useEffect } from 'react';
import personalStoryImage from '@/assets/personal story.jpg';

const testimonials = [
  {
    text: 'המסע אצל אתי שינה את חיי. הגעתי אליה שבורה ומבולבלת, ובזכות השילוב המדהים בין הצלילים לעבודה הרגשית, מצאתי מחדש את עצמי. ממליצה בחום!',
    author: 'מיכל ר.',
    rating: 5,
    role: 'משתתפת במסע אישי',
  },
  {
    text: 'מעגל הנשים של אתי הוא מקום קסום. האווירה המכילה והתומכת יצרו עבורי מרחב בטוח להתפתח ולצמוח. כל מפגש הוא חוויה מטהרת.',
    author: 'שירה כ.',
    rating: 5,
    role: 'משתתפת במסע קבוצתי',
  },
  {
    text: 'חוויית הסאונד הילינג עם הכלים הקסומים, במיוחד קערת הקריסטל, היתה מדהימה. הרגשתי הרפיה עמוקה שלא חוויתי מעולם. אתי מקצועית, רגישה ואכפתית.',
    author: 'נעמה ב.',
    rating: 5,
    role: 'משתתפת בתדרי ריפוי',
  },
  {
    text: 'מדהים השיפור, איך ההרגשה בגוף השתפרה, יותר ערנית, פחות כאובה, תחושה של שלווה ופחות כאוס...',
    author: 'איריס א.',
    rating: 5,
    role: 'משתתפת במסע',
  },
  {
    text: 'אין מילים שיכולות לתאר את הרוגע והשלווה שנכנסו לחיי מהיום בו אתי נכנסה לחיי. זכיתי בה! כמו מלאך שמלווה אותי. כמה כח היא הכניסה לחיי...',
    author: 'אלי ס.',
    rating: 5,
    role: 'משתתפת במסע',
  },
  {
    text: 'אתי מצליחה ליצור חיבור מדויק בין עולמות. השילוב של צבע וצליל פתח אצלי דלתות שחשבתי שסגורות לעד.',
    author: 'דנה מ.',
    rating: 5,
    role: 'משתתפת במסע',
  },
  {
    text: 'המקום של אתי הוא אי של שקט בתוך המרוץ של החיים. הדיוק שלה והרגישות לפרטים הקטנים הופכים כל מפגש למסע אמיתי.',
    author: 'שלמה כ.',
    rating: 5,
    role: 'משתתף במעגלים',
  },
];

const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #e8e8e0, #f5f5f0, #f0f0e8)' }}>
      {/* Enhanced Dynamic Background with Parallax */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[120px] animate-blob transition-transform duration-500"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        />
        <div 
          className="absolute top-1/3 right-0 w-80 h-80 bg-primary/8 rounded-full blur-[140px] transition-transform duration-500"
          style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)` }}
        />
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles 
          className="absolute top-[15%] left-[8%] w-8 h-8 text-primary/20 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '0s' 
          }} 
        />
        <Heart 
          className="absolute bottom-[20%] right-[10%] w-7 h-7 text-secondary/20 fill-secondary/10 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) rotate(${mousePos.x * 2}deg)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1.5s' 
          }} 
        />
        <Wind 
          className="absolute top-[50%] right-[5%] w-9 h-9 text-primary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * -0.25}px, ${mousePos.y * -0.25}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '3s' 
          }} 
        />
        <Flower2 
          className="absolute top-[70%] left-[12%] w-8 h-8 text-secondary/15 animate-float" 
          style={{ 
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '4.5s' 
          }} 
        />
      </div>

      <div className="container-custom relative">
        {/* Header Section */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-10 md:gap-12"
        >
          <div className={`max-w-2xl transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-6 group">
              <MessageSquare className="w-5 h-5 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
              <span className="text-primary font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] group-hover:tracking-[0.5em] transition-all duration-500">
                המשתתפים מספרים
              </span>
              <Sparkles className="w-4 h-4 text-primary/40 group-hover:text-primary group-hover:rotate-180 transition-all duration-700" />
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] md:leading-none px-4 text-center md:text-right">
              הדים של <br />
              <span className="text-gradient-gold italic font-medium inline-block hover:scale-105 transition-transform duration-500 cursor-default">
                שינוי וריפוי
              </span>
            </h2>
          </div>
          <div className={`bg-cream/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-3xl border border-secondary/10 shadow-soft w-full md:w-auto hover:scale-105 hover:shadow-card transition-all duration-500 group cursor-default ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary group-hover:scale-110 transition-transform duration-500" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <span className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">5.0</span>
            </div>
            <p className="text-foreground/40 font-body text-[10px] font-bold uppercase tracking-widest group-hover:text-foreground/60 transition-colors duration-500">ממוצע דירוג בגוגל (54 ביקורות)</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div 
                      className="h-full bg-white border border-primary/10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col transition-all duration-700 hover:shadow-card hover:-translate-y-4 hover:border-primary/30 hover:scale-[1.02] group cursor-default relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      transform: hoveredCard === index 
                        ? `perspective(1000px) rotateX(${mousePos.y * -0.02}deg) rotateY(${mousePos.x * 0.02}deg) translateY(-1rem) scale(1.02)` 
                        : '',
                      transition: 'transform 0.3s ease-out, box-shadow 0.7s, border 0.7s',
                    }}
                  >
                    {/* Enhanced Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/8 group-hover:via-secondary/8 group-hover:to-primary/8 transition-all duration-1000 pointer-events-none" />
                    
                    {/* Glowing Orb Effect */}
                    <div 
                      className="absolute -inset-20 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        transform: hoveredCard === index ? `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` : '',
                        transition: 'transform 0.3s ease-out, opacity 0.7s',
                      }}
                    />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-8 md:mb-10 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    {/* Quote Content */}
                    <div className="relative mb-10 md:mb-12 flex-1 z-10">
                      <Quote className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 text-primary/5 group-hover:text-primary/10 group-hover:scale-110 transition-all duration-700" />
                      <p className="text-foreground/70 leading-relaxed relative z-10 text-lg md:text-xl font-body font-light italic group-hover:text-foreground/90 transition-colors duration-500">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Identity Badge */}
                    <div className="mt-auto flex items-center gap-4 md:gap-6 pt-8 md:pt-10 border-t border-primary/5 group-hover:border-primary/20 transition-colors duration-500 relative z-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl md:text-2xl group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm shrink-0">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-foreground font-display text-xl md:text-2xl font-bold leading-none group-hover:text-primary transition-colors duration-500">{testimonial.author}</h4>
                      </div>
                    </div>

                {/* Decorative corner */}
                <div className="absolute top-4 left-4 w-0 h-0 border-t-2 border-l-2 border-primary/0 group-hover:w-8 group-hover:h-8 group-hover:border-primary/20 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA to WhatsApp */}
        <div className="mt-20 md:mt-32 text-center px-4">
          <a
            href="https://wa.me/972526172932"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 py-5 sm:py-6 md:py-8 px-6 sm:px-8 md:px-12 bg-primary rounded-[3rem] text-white overflow-hidden relative shadow-2xl hover:scale-110 transition-all duration-700 w-full sm:w-auto cursor-pointer hover:shadow-[0_30px_80px_rgba(var(--primary),0.4)] max-w-md sm:max-w-none mx-auto"
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * -0.03}deg) rotateY(${mousePos.x * 0.03}deg)`,
              transition: 'transform 0.3s ease-out, box-shadow 0.7s, scale 0.7s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_100%] animate-shimmer" />
            <span className="relative z-10 font-display text-base sm:text-lg md:text-2xl font-bold group-hover:scale-105 transition-all duration-500 text-center">מרגיש לך נכון לצאת לדרך האור?</span>
            <div className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4">
              <span className="font-display text-base sm:text-lg md:text-2xl font-bold group-hover:scale-105 transition-all duration-500">כאן</span>
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-transform group-hover:scale-125 group-hover:fill-white/30" />
            </div>
            
            {/* Pulsing Ring */}
            <div className="absolute inset-0 rounded-[3rem] border-2 border-white/40 animate-ping opacity-0 group-hover:opacity-100" />
          </a>

          {/* Image after CTA */}
          <div className="mt-16 md:mt-20 flex justify-center px-4">
            <div className="w-full max-w-xs h-96 sm:w-80 sm:h-96 md:w-[28rem] md:h-[35rem] lg:w-[32rem] lg:h-[40rem] rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src={personalStoryImage} 
                alt="מסע דרך האור" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
