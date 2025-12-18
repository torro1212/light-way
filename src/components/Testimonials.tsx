import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'הטיפול אצל אתי שינה את חיי. הגעתי אליה שבורה ומבולבלת, ובזכות השילוב המדהים בין הצלילים לעבודה הרגשית, מצאתי מחדש את עצמי. ממליצה בחום!',
    author: 'מיכל ר.',
    rating: 5,
  },
  {
    text: 'מעגל הנשים של אתי הוא מקום קסום. האווירה המכילה והתומכת יצרו עבורי מרחב בטוח להתפתח ולצמוח. כל מפגש הוא חוויה מטהרת.',
    author: 'שירה כ.',
    rating: 5,
  },
  {
    text: 'חוויית הסאונד הילינג עם הקערות הטיבטיות הייתה מדהימה. הרגשתי הרפיה עמוקה שלא חוויתי מעולם. אתי מקצועית, רגישה ואכפתית.',
    author: 'נועה ל.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/-/ai-testimonial_bg-1766042118980.png)'
        }}
      />
      <div className="absolute inset-0 bg-foreground/85" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
            המלצות
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
            מה אומרות עליי
          </h2>
          <div className="decorative-line mb-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group card-hover glass-card p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-secondary/50" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?cid=7758587950641435592"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-foreground font-medium">5.0</span>
            <span className="text-muted-foreground text-sm">(54 ביקורות בגוגל)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
