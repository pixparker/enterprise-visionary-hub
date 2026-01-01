import { Building2, Cpu, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "طراحی معماری نرم‌افزارهای کلان",
      subtitle: "Enterprise Architecture",
      description:
        "طراحی و پیاده‌سازی معماری‌های مقیاس‌پذیر برای سازمان‌های بزرگ با رعایت اصول SOLID و Clean Architecture.",
      features: ["Microservices", "Domain-Driven Design", "Cloud Native"],
    },
    {
      icon: Cpu,
      title: "استراتژی گذار به هوش مصنوعی",
      subtitle: "AI Transformation",
      description:
        "تدوین نقشه راه تحول دیجیتال و یکپارچه‌سازی هوش مصنوعی در فرآیندهای کسب‌وکار شما.",
      features: ["AI Strategy", "ML Pipelines", "Data Architecture"],
    },
    {
      icon: Users,
      title: "منتورینگ و رهبری تیم‌های فنی",
      subtitle: "Tech Leadership",
      description:
        "ارتقای مهارت‌های تیم فنی، استقرار فرهنگ مهندسی و راه‌اندازی فرآیندهای توسعه حرفه‌ای.",
      features: ["Team Building", "Code Review Culture", "Agile Coaching"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-elevated-dark/40" />
      <div className="absolute inset-0 grid-lines opacity-15" />
      <div className="absolute inset-0 holographic opacity-30" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric-violet/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tech-teal/8 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-electric-violet/10 border border-electric-violet/20 rounded-full px-4 py-1.5 text-electric-violet text-sm font-medium tracking-wide mb-4">
            <span className="w-2 h-2 bg-electric-violet rounded-full animate-pulse" />
            خدمات تخصصی
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white-ice mb-4">
            چگونه می‌توانم کمک کنم؟
          </h2>
          <p className="text-silver-grey max-w-xl mx-auto text-lg">
            هر کسب‌وکار نیاز به راه‌حل منحصربه‌فرد دارد. من در کنار شما هستم.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 flex flex-col h-full group transition-all duration-500 hover:-translate-y-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Icon Container with Holographic Effect */}
              <div className="relative w-18 h-18 rounded-2xl bg-gradient-to-br from-electric-violet/20 via-transparent to-tech-teal/10 p-4 mb-6 group-hover:scale-105 transition-transform duration-500">
                <service.icon className="w-10 h-10 text-electric-violet group-hover:text-electric-violet-glow transition-colors" />
                <div className="absolute inset-0 rounded-2xl bg-electric-violet/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="mb-2">
                <span className="text-tech-teal text-xs font-inter tracking-wider uppercase">
                  {service.subtitle}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white-ice mb-4 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-silver-grey leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-surface-elevated/80 border border-border/30 px-3 py-1.5 rounded-full text-xs text-silver-grey font-inter hover:border-electric-violet/30 hover:text-white-ice transition-all cursor-default"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button 
                variant="ghost" 
                className="w-full justify-center text-silver-grey hover:text-electric-violet hover:bg-electric-violet/10 border border-transparent hover:border-electric-violet/20 transition-all"
              >
                اطلاعات بیشتر
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
