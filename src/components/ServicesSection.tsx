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
    <section id="services" className="py-24 bg-elevated-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-electric-violet text-sm font-medium tracking-wide mb-3 block">
            خدمات تخصصی
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white-ice mb-4">
            چگونه می‌توانم کمک کنم؟
          </h2>
          <p className="text-silver-grey max-w-xl mx-auto">
            هر کسب‌وکار نیاز به راه‌حل منحصربه‌فرد دارد. من در کنار شما هستم.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 flex flex-col h-full group transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-violet/20 to-tech-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-electric-violet" />
              </div>

              <div className="mb-2">
                <span className="text-tech-teal text-xs font-inter tracking-wider">
                  {service.subtitle}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white-ice mb-4">{service.title}</h3>

              <p className="text-silver-grey leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-surface-elevated px-3 py-1 rounded-full text-xs text-silver-grey font-inter"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button variant="ghost" className="w-full justify-center text-silver-grey hover:text-electric-violet hover:bg-electric-violet/10">
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
