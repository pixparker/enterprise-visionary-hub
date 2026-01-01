import { ArrowLeft, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAbstract from "@/assets/hero-abstract.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Futuristic Background Layers */}
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute inset-0 scan-lines pointer-events-none" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroAbstract})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />
      
      {/* Enhanced Mesh Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      
      {/* Animated Glowing Orbs - More Dynamic */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-violet/15 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tech-teal/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-electric-violet/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-violet/60 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Futuristic Badge */}
          <div className="inline-flex items-center gap-3 bg-elevated-dark/50 backdrop-blur-xl border border-electric-violet/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in neon-border" style={{ animationFillMode: 'forwards' }}>
            <div className="relative">
              <Zap className="w-4 h-4 text-electric-violet" />
              <div className="absolute inset-0 w-4 h-4 bg-electric-violet/50 rounded-full blur-md animate-pulse" />
            </div>
            <span className="text-silver-grey text-sm font-medium">۱۵+ سال تجربه در صنایع پیشرو</span>
            <Sparkles className="w-4 h-4 text-tech-teal" />
          </div>

          {/* Main Headline - Enhanced */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white-ice leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            تلفیق استانداردهای جهانی مهندسی و{" "}
            <span className="text-gradient text-glow-violet">هوش مصنوعی</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">برای خلق سیستم‌های نرم‌افزاری ماندگار</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-silver-grey max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            من به رهبران کسب‌وکارهای مدرن کمک می‌کنم تا با عبور از پیچیدگی‌های فنی،
            ساختارهایی مقیاس‌پذیر، امن و آماده برای آینده بسازند.
          </p>

          {/* CTA Buttons - Enhanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
              <a href="#contact">
                <span className="relative z-10 flex items-center">
                  رزرو مشاوره استراتژیک
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-glow to-electric-violet opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 text-silver-grey hover:text-white-ice hover:border-electric-violet/50 backdrop-blur-sm" asChild>
              <a href="#services">مشاهده خدمات</a>
            </Button>
          </div>

          {/* Futuristic Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-electric-violet/10 animate-fade-in relative" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            {/* Decorative line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-electric-violet to-transparent" />
            
            {[
              { value: "15+", label: "سال تجربه" },
              { value: "50+", label: "پروژه موفق" },
              { value: "20+", label: "تیم راهبری شده" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="stat-number text-4xl md:text-5xl font-bold font-inter mb-2 group-hover:text-glow-violet transition-all">
                  {stat.value}
                </div>
                <div className="text-silver-grey text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
