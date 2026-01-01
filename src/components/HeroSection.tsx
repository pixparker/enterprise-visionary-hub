import { ArrowLeft, Zap, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid" />
      
      {/* Holographic background */}
      <div className="absolute inset-0 holo-bg" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-neon-cyan/5 to-transparent animate-scan" />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 opacity-20 animate-float">
        <Hexagon className="w-32 h-32 text-neon-cyan" strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <Hexagon className="w-24 h-24 text-neon-magenta" strokeWidth={0.5} />
      </div>
      
      {/* Corner HUD elements */}
      <div className="absolute top-24 right-6 text-neon-cyan/40 font-orbitron text-xs tracking-widest">
        <div>SYS.STATUS: ONLINE</div>
        <div className="mt-1">VER.2026.01</div>
      </div>
      <div className="absolute top-24 left-6 text-neon-magenta/40 font-orbitron text-xs tracking-widest text-left">
        <div>LOCATION: DE</div>
        <div className="mt-1">EXP.15+ YEARS</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-3 border border-neon-cyan/30 bg-cyber-dark/50 backdrop-blur-sm px-5 py-2 mb-8 animate-fade-in"
            style={{ animationFillMode: 'forwards', clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <Zap className="w-4 h-4 text-neon-cyan animate-pulse-neon" />
            <span className="text-holo-grey text-sm font-rajdhani tracking-wide">۱۵+ سال تجربه در صنایع پیشرو</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-holo-white leading-tight mb-6 animate-fade-in-up tracking-wide"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            تلفیق استانداردهای جهانی مهندسی و{" "}
            <span className="text-gradient-cyber">هوش مصنوعی</span>
            <br />
            <span className="text-neon-cyan">برای خلق سیستم‌های نرم‌افزاری ماندگار</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-holo-grey max-w-2xl mx-auto mb-10 leading-relaxed font-rajdhani animate-fade-in-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            من به رهبران کسب‌وکارهای مدرن کمک می‌کنم تا با عبور از پیچیدگی‌های فنی،
            ساختارهایی مقیاس‌پذیر، امن و آماده برای آینده بسازند.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="#contact">
                رزرو مشاوره استراتژیک
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">مشاهده خدمات</a>
            </Button>
          </div>

          {/* Stats with HUD style */}
          <div 
            className="grid grid-cols-3 gap-6 mt-20 animate-fade-in"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            {[
              { value: "15+", label: "سال تجربه" },
              { value: "50+", label: "پروژه موفق" },
              { value: "20+", label: "تیم راهبری شده" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="hud-frame text-center group hover:border-neon-cyan transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-cyan group-hover:text-neon-magenta transition-colors">
                  {stat.value}
                </div>
                <div className="text-holo-grey text-sm mt-2 font-rajdhani">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
