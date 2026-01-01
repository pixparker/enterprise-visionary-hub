import { ArrowLeft, MapPin, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 holo-bg" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image / Avatar Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              {/* Rotating border */}
              <div className="absolute inset-0 border-2 border-neon-cyan/30 rotate-45 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-neon-magenta/20 -rotate-45 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Main container */}
              <div className="absolute inset-8 border border-neon-cyan/40 bg-cyber-dark/80 backdrop-blur-sm flex items-center justify-center">
                {/* Scan lines */}
                <div className="absolute inset-0 scan-lines" />
                
                {/* Avatar placeholder */}
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto border border-neon-cyan/50 flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-neon-cyan" />
                  </div>
                  <div className="text-2xl font-orbitron font-bold text-gradient-cyber mb-2">ع.ب</div>
                  <div className="text-holo-grey text-sm font-rajdhani">علی بازداران</div>
                </div>
                
                {/* Corner HUD elements */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-neon-cyan" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-neon-cyan" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-neon-cyan" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-neon-cyan" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 border border-neon-cyan/40 bg-cyber-dark/90 px-4 py-2 backdrop-blur-sm animate-float">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neon-cyan" />
                  <span className="text-holo-white text-sm font-orbitron">GERMANY</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 border border-neon-magenta/40 bg-cyber-dark/90 px-4 py-2 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-neon-magenta" />
                  <span className="text-holo-white text-sm font-orbitron">15+ YRS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-neon-cyan font-orbitron text-xs tracking-widest mb-4">
              <span className="w-8 h-[1px] bg-neon-cyan" />
              <span>PROFILE_DATA</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-holo-white mb-2 tracking-wide">
              علی بازداران
            </h2>
            <p className="text-neon-magenta font-orbitron text-sm tracking-wider mb-6">
              SYSTEM_ARCHITECT // TECH_STRATEGIST
            </p>

            <div className="space-y-4 text-holo-grey leading-relaxed mb-8 font-rajdhani text-lg">
              <p>
                پس از سال‌ها همکاری با کمپانی‌های آلمانی و پروژه‌های بین‌المللی در حوزه‌های
                فین‌تک، رباتیک و اتوماسیون صنعتی، امروز ماموریت من انتقال نظم و تکنولوژی
                روز دنیا به کسب‌وکارهای شماست.
              </p>
              <p>
                من معتقدم که یک معماری درست، پایه و اساس هر محصول موفقی است. با ترکیب
                تجربه عملی در صنایع سطح اول اروپا و دانش عمیق از هوش مصنوعی، به شما
                کمک می‌کنم تا سیستم‌هایی بسازید که نه تنها امروز کار می‌کنند، بلکه
                برای فردا هم آماده‌اند.
              </p>
            </div>

            <Button variant="hero" asChild>
              <a href="#" className="inline-flex items-center gap-2">
                مطالعه داستان کامل
                <ArrowLeft className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
