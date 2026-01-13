import { useState, useEffect } from 'react';
import { Heart, Sparkles, Waves, Wind, Flower2, Stars } from 'lucide-react';
import logo from '@/assets/LOGO-RE.png';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [exitAnim, setExitAnim] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const phrases = [
    'מתחברת אליך...',
    'יוצרת מרחב בטוח...',
    'מזמינה אותך פנימה...',
    'מוכנה לקבל אותך ❤️'
  ];

  useEffect(() => {
    // Mouse tracking for interactive effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Progress with phase changes
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.5;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        
        // Update phase based on progress
        if (next > 75) setCurrentPhase(3);
        else if (next > 50) setCurrentPhase(2);
        else if (next > 25) setCurrentPhase(1);
        
        return next;
      });
    }, 35);

    // Exit animation
    const timer = setTimeout(() => {
      setExitAnim(true);
      setTimeout(() => setLoading(false), 1500);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-all duration-[1.5s] ${exitAnim ? 'scale-110 opacity-0 blur-xl pointer-events-none' : 'scale-100 opacity-100 blur-0'}`}>
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFCF8] via-[#F5F1E8] to-[#FFF5EB] animate-gradient" style={{ backgroundSize: '400% 400%' }} />
      
      {/* Interactive Floating Elements */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      >
        {/* Animated waves */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full opacity-20"
            style={{
              background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 15}%, rgba(var(--primary-rgb), ${0.1 - i * 0.02}) 0%, transparent 50%)`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-[20%] left-[15%] w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-[15%] right-[20%] w-6 h-6 text-secondary/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <Flower2 className="absolute bottom-[25%] left-[10%] w-7 h-7 text-primary/15 animate-float" style={{ animationDelay: '1s' }} />
        <Stars className="absolute bottom-[20%] right-[15%] w-6 h-6 text-secondary/20 animate-float" style={{ animationDelay: '1.5s' }} />
        <Wind className="absolute top-[40%] right-[10%] w-8 h-8 text-primary/15 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* 3D Logo Container with Parallax */}
        <div 
          className="relative mb-12 perspective-[1000px]"
          style={{
            transform: `rotateX(${mousePos.y * -0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated rings */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-2 rounded-full animate-ping"
                style={{
                  borderColor: i % 2 === 0 ? 'rgba(var(--primary-rgb), 0.2)' : 'rgba(var(--secondary-rgb), 0.2)',
                  animationDuration: `${3 + i}s`,
                  animationDelay: `${i * 0.5}s`,
                  transform: `scale(${1 + i * 0.1})`,
                }}
              />
            ))}
            
            {/* Gradient orbs */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary/30 border-r-secondary/30 animate-spin" style={{ animationDuration: '4s' }} />
            
            {/* Logo with 3D effect */}
            <div className="absolute inset-0 flex items-center justify-center p-12 transform-gpu">
              <img 
                src={logo} 
                alt="אתי אסתר דיין" 
                className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float"
                style={{ 
                  transform: `translateZ(50px)`,
                  animation: 'float 6s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>

        {/* Animated Text */}
        <div className="text-center space-y-6 mb-10">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground animate-reveal-text relative" style={{ letterSpacing: '0.05em' }}>
            אתי אסתר דיין
            {/* Animated underline */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-[width_2s_ease-out_forwards]" style={{ width: '0%', maxWidth: '200px' }} />
          </h1>
          
          <p className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-secondary/70 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            פסיכותרפיה • סאונד הילינג • מעגלי נשים
          </p>
        </div>

        {/* Interactive Loading Phase */}
        <div className="mb-8">
          <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-2 border-t-primary border-r-primary animate-spin" />
            </div>
            <span className="font-body text-foreground/80 font-medium text-lg transition-all duration-500">
              {phrases[currentPhase]}
            </span>
            <Heart className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </div>

        {/* Modern Progress Bar */}
        <div className="w-80 md:w-96">
          <div className="relative h-3 bg-white/50 rounded-full overflow-hidden border border-white/60 backdrop-blur-xl shadow-inner">
            {/* Animated gradient fill */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ 
                width: `${progress}%`,
                backgroundSize: '200% 100%',
                animation: 'gradient-shift 3s ease infinite',
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 blur-sm bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
            </div>
          </div>
          
          {/* Percentage with animation */}
          <div className="text-center mt-4">
            <span className="font-display text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-10 flex items-center gap-4 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <Waves className="w-5 h-5 text-primary/40 animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </div>
      </div>

      <style>{`
        @keyframes width {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        :root {
          --primary-rgb: 134, 147, 143;
          --secondary-rgb: 179, 152, 130;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Preloader;

