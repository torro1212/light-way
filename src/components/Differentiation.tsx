import { Heart, Sparkles, Shield, Leaf } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'גישה אינטגרטיבית',
    description: 'שילוב ייחודי בין פסיכותרפיה קלינית לכלים רוחניים ואנרגטיים',
  },
  {
    icon: Sparkles,
    title: 'ניסיון עשיר',
    description: 'למעלה מ-15 שנות ניסיון בליווי נשים בתהליכי טרנספורמציה',
  },
  {
    icon: Shield,
    title: 'מרחב בטוח',
    description: 'סביבה מכילה ומקבלת ללא שיפוטיות, המאפשרת פתיחות מלאה',
  },
  {
    icon: Leaf,
    title: 'טיפול הוליסטי',
    description: 'עבודה על גוף, נפש ורוח כמכלול אחד שלם ומחובר',
  },
];

const Differentiation = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
            למה לבחור בי
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            מה מייחד את
            <span className="text-gradient-gold"> הגישה שלי</span>
          </h2>
          <div className="decorative-line mb-6" />
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mx-auto mb-6 w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-secondary/20 transform transition-transform duration-500 group-hover:scale-110" />
                <div className="relative w-full h-full rounded-full bg-card flex items-center justify-center shadow-soft border border-border/50">
                  <value.icon className="w-8 h-8 text-secondary transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <span className="absolute -top-8 right-0 text-8xl text-secondary/20 font-display leading-none">
              "
            </span>
            <p className="font-display text-2xl sm:text-3xl text-foreground italic leading-relaxed">
              כל אישה נושאת בתוכה את הכוח והחוכמה להירפא. 
              התפקיד שלי הוא ליצור את המרחב שבו זה יכול לקרות.
            </p>
            <footer className="mt-6">
              <span className="text-secondary font-medium">— אתי אסתר דיין</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
