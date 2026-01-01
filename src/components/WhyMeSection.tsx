import { TrendingUp, Shield, Brain, ChevronRight } from "lucide-react";

const WhyMeSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "مقیاس‌پذیری بی‌پایان",
      code: "SCALE.01",
      description: "زیرساختی که با رشد مشتریان شما، کند نمی‌شود و آماده هر میزان ترافیک است.",
      color: "cyan",
    },
    {
      icon: Shield,
      title: "کاهش ریسک و هزینه",
      code: "OPTIM.02",
      description: "کدهای استاندارد (Clean Code) که هزینه نگهداری را تا ۵۰٪ کاهش می‌دهند.",
      color: "magenta",
    },
    {
      icon: Brain,
      title: "پیشرو با هوش مصنوعی",
      code: "AI.03",
      description: "تبدیل سازمان شما به یک سیستم هوشمند و داده‌محور با استفاده از AI.",
      color: "cyan",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute inset-0 holo-bg" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-neon-cyan/60 font-orbitron text-xs tracking-widest mb-4">
            <ChevronRight className="w-4 h-4" />
            <span>SYSTEM_ADVANTAGES</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-holo-white mb-4 tracking-wide">
            چرا <span className="text-neon-cyan">معماری سیستم</span> مهم‌تر از کدنویسی است؟
          </h2>
          <p className="text-holo-grey max-w-2xl mx-auto font-rajdhani text-lg">
            یک معماری درست از همان ابتدا، هزاران ساعت کار اضافی و میلیون‌ها تومان هزینه را صرفه‌جویی می‌کند.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="cyber-card p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Code label */}
              <div className={`font-orbitron text-xs tracking-widest mb-4 ${
                benefit.color === "cyan" ? "text-neon-cyan/60" : "text-neon-magenta/60"
              }`}>
                [{benefit.code}]
              </div>
              
              {/* Icon */}
              <div className={`w-14 h-14 flex items-center justify-center mb-6 border transition-all duration-300 ${
                benefit.color === "cyan" 
                  ? "border-neon-cyan/30 group-hover:border-neon-cyan group-hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.3)]" 
                  : "border-neon-magenta/30 group-hover:border-neon-magenta group-hover:shadow-[0_0_30px_hsl(320_100%_55%_/_0.3)]"
              }`}>
                <benefit.icon className={`w-7 h-7 ${
                  benefit.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta"
                }`} />
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-holo-white mb-3 tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-holo-grey leading-relaxed font-rajdhani">
                {benefit.description}
              </p>
              
              {/* Bottom accent line */}
              <div className={`mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${
                benefit.color === "cyan" 
                  ? "bg-gradient-to-r from-neon-cyan to-transparent" 
                  : "bg-gradient-to-r from-neon-magenta to-transparent"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
