import etiPortrait from '@/assets/eti-portrait.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-secondary/30 rounded-2xl transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl transform -rotate-2" />
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={etiPortrait}
                  alt="אתי אסתר דיין - מטפלת"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">15+</p>
                    <p className="text-sm text-muted-foreground">שנות ניסיון</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
              הכירו אותי
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
              שילוב נדיר בין
              <span className="text-gradient-gold block">קליני לרוחני</span>
            </h2>

            <div className="decorative-line mb-8 !mx-0" />

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                אני אתי אסתר דיין, מטפלת בפסיכותרפיה באומנויות עם התמחות בסאונד הילינג 
                באמצעות קערות טיבטיות. המסע שלי בעולם הטיפול התחיל מתוך חיפוש אישי 
                אחר ריפוי ושלמות.
              </p>
              <p>
                אני מאמינה שכל אישה נושאת בתוכה את הכוח והחוכמה להירפא. 
                התפקיד שלי הוא ליצור מרחב בטוח ומכיל שבו תוכלי להיזכר במי שאת באמת, 
                להתחבר לקול הפנימי שלך ולשחרר את מה שכבר לא משרת אותך.
              </p>
              <p>
                השילוב הייחודי שאני מביאה - בין הכלים הקליניים של פסיכותרפיה לכלים 
                הרוחניים של צליל וצבע - מאפשר עבודה עמוקה ורב-ממדית על הנפש והגוף כאחד.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-foreground bg-primary/10 px-4 py-2 rounded-full">
                <span>🎨</span>
                <span>פסיכותרפיה באומנות</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-secondary/10 px-4 py-2 rounded-full">
                <span>🔔</span>
                <span>סאונד הילינג</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-accent/10 px-4 py-2 rounded-full">
                <span>🌙</span>
                <span>מעגלי נשים</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
