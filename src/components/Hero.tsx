import { MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-6">
            פסיכותרפיה • סאונד הילינג • מעגלי נשים
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6">
            להיזכר במי שאת
            <span className="block text-gradient-gold mt-2">באמת</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            ריפוי דרך צליל, צבע ותנועה. מרחב נשי עוטף ומאפשר ברמת גן
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/972529706731"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-3 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>לקביעת פגישה</span>
            </a>
            <a
              href="#about"
              className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 hover:!text-white"
            >
              גלי עוד
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
