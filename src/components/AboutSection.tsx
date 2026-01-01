import { ArrowLeft, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-violet/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image / Avatar Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/30 to-tech-teal/20 rounded-3xl blur-3xl" />
              
              {/* Main container */}
              <div className="relative glass-card p-4 rounded-3xl h-full overflow-hidden">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-elevated-dark to-surface-elevated flex items-center justify-center">
                  {/* Placeholder for photo - using initials */}
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-gradient mb-4">ع.ب</div>
                    <div className="text-silver-grey text-sm">علی بازداران</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl animate-float">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-tech-teal" />
                  <span className="text-white-ice text-sm font-inter">Germany</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl animate-float animation-delay-400">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-electric-violet" />
                  <span className="text-white-ice text-sm font-inter">15+ Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-electric-violet text-sm font-medium tracking-wide mb-3 block">
              درباره من
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white-ice mb-6">
              علی بازداران
              <span className="block text-xl text-silver-grey font-normal mt-2">
                معمار سیستم و استراتژیست تکنولوژی
              </span>
            </h2>

            <div className="space-y-4 text-silver-grey leading-relaxed mb-8">
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
