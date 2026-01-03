import { MessageCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <a
      href="https://wa.me/972526172932"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 group"
      aria-label="Contact on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <div className="relative" style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${mousePos.y * -0.5}deg) rotateY(${mousePos.x * 0.5}deg)` 
          : '',
        transition: 'transform 0.3s ease-out',
      }}>
        {/* Multiple Ping Animations */}
        <span className="absolute inset-0 rounded-full bg-secondary/40 animate-ping group-hover:animate-none" />
        <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping group-hover:animate-none" style={{ animationDelay: '0.5s' }} />
        
        {/* Glowing Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700 animate-gradient" />
        
        {/* Main Button */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-gold transition-all duration-400 group-hover:scale-110 group-active:scale-95 group-hover:shadow-2xl overflow-hidden">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <MessageCircle className={`w-8 h-8 text-white relative z-10 transition-all duration-400 ${isHovered ? 'scale-105 rotate-6' : ''}`} />
          
          {/* Sparkles on hover */}
          {isHovered && (
            <>
              <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white/80 animate-pulse" />
              <Sparkles className="absolute bottom-2 left-2 w-2 h-2 text-white/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
            </>
          )}
        </div>

        {/* Enhanced Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 px-5 py-3 bg-foreground/95 backdrop-blur-xl text-white text-sm font-bold rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap shadow-2xl scale-75 group-hover:scale-100 border border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            <span>דברי איתי בוואטסאפ</span>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-3 h-3 bg-foreground/95 rotate-45 border-l border-b border-white/10" />
        </div>
      </div>
    </a>
  );
};

export default FloatingCTA;

