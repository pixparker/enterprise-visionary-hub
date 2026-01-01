import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAbstract from "@/assets/hero-abstract.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroAbstract})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Glowing Orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-violet/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tech-teal/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '400ms' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-elevated-dark/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            <Sparkles className="w-4 h-4 text-electric-violet" />
            <span className="text-silver-grey text-sm">۱۵+ سال تجربه در صنایع پیشرو</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-ice leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            تلفیق استانداردهای جهانی مهندسی و{" "}
            <span className="text-gradient">هوش مصنوعی</span>
            <br />
            برای خلق سیستم‌های نرم‌افزاری ماندگار
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-silver-grey max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            من به رهبران کسب‌وکارهای مدرن کمک می‌کنم تا با عبور از پیچیدگی‌های فنی،
            ساختارهایی مقیاس‌پذیر، امن و آماده برای آینده بسازند.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="#contact">
                رزرو مشاوره استراتژیک
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 text-silver-grey hover:text-white-ice hover:border-electric-violet/50" asChild>
              <a href="#services">مشاهده خدمات</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/30 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white-ice font-inter">15+</div>
              <div className="text-silver-grey text-sm mt-1">سال تجربه</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white-ice font-inter">50+</div>
              <div className="text-silver-grey text-sm mt-1">پروژه موفق</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white-ice font-inter">20+</div>
              <div className="text-silver-grey text-sm mt-1">تیم راهبری شده</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
