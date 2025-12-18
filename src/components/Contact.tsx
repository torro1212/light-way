import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
        <img
          src="https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/-/ai-contact_background-1766042119018.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/80 to-background" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
              צרי קשר
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
              בואי נתחיל את
              <span className="text-gradient-gold block">המסע שלך</span>
            </h2>
            <div className="decorative-line mb-8 !mx-0" />

            <p className="text-muted-foreground leading-relaxed mb-8">
              אשמח לשמוע ממך ולענות על כל שאלה. פגישת היכרות ראשונה ללא התחייבות.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <a
                href="tel:052-970-6731"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">טלפון</p>
                  <p className="font-medium text-foreground" dir="ltr">052-970-6731</p>
                </div>
              </a>

              <a
                href="mailto:eti.dayan@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">אימייל</p>
                  <p className="font-medium text-foreground">eti.dayan@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJHUnzwzRLHRUR2ZaWxEUhIb0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">כתובת</p>
                  <p className="font-medium text-foreground">תובל 40, קומה 22, רמת גן</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://instagram.com/eti.dayan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.ester-law.co.il/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/972529706731"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>שלחי הודעה בוואטסאפ</span>
            </a>
          </div>

          {/* Map */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0!2d34.8!3d32.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b34c3f34921%3A0xbd21214584962d99!2z16rXldeo15zXmSDXlNeV15HXnCDXqNee16og15LXnw!5e0!3m2!1siw!2sil!4v1703000000000!5m2!1siw!2sil"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מיקום הקליניקה"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
