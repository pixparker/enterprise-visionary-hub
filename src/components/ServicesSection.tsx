import { Building2, Cpu, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "طراحی معماری نرم‌افزارهای کلان",
      subtitle: "ENTERPRISE_ARCH",
      description:
        "طراحی و پیاده‌سازی معماری‌های مقیاس‌پذیر برای سازمان‌های بزرگ با رعایت اصول SOLID و Clean Architecture.",
      features: ["Microservices", "DDD", "Cloud Native"],
      status: "ACTIVE",
    },
    {
      icon: Cpu,
      title: "استراتژی گذار به هوش مصنوعی",
      subtitle: "AI_TRANSFORM",
      description:
        "تدوین نقشه راه تحول دیجیتال و یکپارچه‌سازی هوش مصنوعی در فرآیندهای کسب‌وکار شما.",
      features: ["AI Strategy", "ML Ops", "Data Arch"],
      status: "ACTIVE",
    },
    {
      icon: Users,
      title: "منتورینگ و رهبری تیم‌های فنی",
      subtitle: "TECH_LEAD",
      description:
        "ارتقای مهارت‌های تیم فنی، استقرار فرهنگ مهندسی و راه‌اندازی فرآیندهای توسعه حرفه‌ای.",
      features: ["Team Build", "Code Review", "Agile"],
      status: "ACTIVE",
    },
  ];

  return (
    <section id="services" className="py-24 bg-cyber-dark/50 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-neon-magenta font-orbitron text-xs tracking-widest mb-4">
            <span className="w-2 h-2 bg-neon-magenta rounded-full animate-pulse" />
            <span>SERVICE_MODULES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-holo-white mb-4 tracking-wide">
            چگونه می‌توانم کمک کنم؟
          </h2>
          <p className="text-holo-grey max-w-xl mx-auto font-rajdhani text-lg">
            هر کسب‌وکار نیاز به راه‌حل منحصربه‌فرد دارد. من در کنار شما هستم.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Main card */}
              <div className="h-full border border-neon-cyan/20 bg-cyber-dark/80 backdrop-blur-sm p-8 transition-all duration-500 hover:border-neon-cyan/60 hover:shadow-[0_0_40px_hsl(185_100%_50%_/_0.15)]">
                {/* Header with status */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-orbitron text-xs text-neon-cyan/60 tracking-widest">
                    {service.subtitle}
                  </span>
                  <span className="flex items-center gap-2 text-neon-green text-xs font-orbitron">
                    <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
                    {service.status}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 border border-neon-cyan/30 flex items-center justify-center mb-6 group-hover:border-neon-cyan group-hover:shadow-[inset_0_0_20px_hsl(185_100%_50%_/_0.2)] transition-all duration-300">
                  <service.icon className="w-8 h-8 text-neon-cyan" />
                </div>

                <h3 className="text-lg font-orbitron font-bold text-holo-white mb-4 tracking-wide">
                  {service.title}
                </h3>

                <p className="text-holo-grey leading-relaxed mb-6 font-rajdhani">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1 text-xs text-neon-cyan font-orbitron tracking-wider"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="w-full justify-between text-holo-grey hover:text-neon-cyan group/btn">
                  <span>اطلاعات بیشتر</span>
                  <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                </Button>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
