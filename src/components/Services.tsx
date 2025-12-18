import { Palette, Bell, Users } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'פסיכותרפיה באומנות',
    description: 'טיפול רגשי עמוק המאפשר ביטוי ללא מילים, עיבוד טראומות וחיזוק כוחות הנפש.',
    image: 'https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/-/ai-service_1-1766042118691.png',
    features: ['עיבוד רגשי עמוק', 'ביטוי ללא מילים', 'חיזוק כוחות הנפש'],
  },
  {
    icon: Bell,
    title: 'סאונד הילינג',
    description: 'איזון אנרגטי באמצעות תדרים וצלילים מרפאים של קערות טיבטיות, להפחתת מתח וחרדה.',
    image: 'https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/-/ai-service_2-1766042118751.png',
    features: ['איזון אנרגטי', 'הפחתת מתח', 'הרפיה עמוקה'],
  },
  {
    icon: Users,
    title: 'מעגלי נשים',
    description: 'מפגשים קבוצתיים של הקשבה, שיתוף והתפתחות אישית באווירה מחבקת ומכילה.',
    image: 'https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/-/ai-service_3-1766042118773.png',
    features: ['קהילה תומכת', 'שיתוף וחיבור', 'צמיחה אישית'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
            השירותים שלי
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            דרכים לריפוי והתחדשות
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-muted-foreground">
            מגוון שיטות טיפול המותאמות אישית לצרכים שלך
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-hover bg-card rounded-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/972529706731"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <span>לתיאום פגישת היכרות</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
