import { TrendingUp, Shield, Brain } from "lucide-react";

const WhyMeSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "مقیاس‌پذیری بی‌پایان",
      description: "زیرساختی که با رشد مشتریان شما، کند نمی‌شود و آماده هر میزان ترافیک است.",
      color: "electric-violet",
    },
    {
      icon: Shield,
      title: "کاهش ریسک و هزینه",
      description: "کدهای استاندارد (Clean Code) که هزینه نگهداری را تا ۵۰٪ کاهش می‌دهند.",
      color: "tech-teal",
    },
    {
      icon: Brain,
      title: "پیشرو با هوش مصنوعی",
      description: "تبدیل سازمان شما به یک سیستم هوشمند و داده‌محور با استفاده از AI.",
      color: "electric-violet",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="absolute inset-0 grid-lines opacity-20" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-tech-teal/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-electric-violet/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white-ice mb-4">
            چرا <span className="text-gradient text-glow-violet">معماری سیستم</span> مهم‌تر از کدنویسی است؟
          </h2>
          <p className="text-silver-grey max-w-2xl mx-auto text-lg">
            یک معماری درست از همان ابتدا، هزاران ساعت کار اضافی و میلیون‌ها تومان هزینه را صرفه‌جویی می‌کند.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Icon with Glow Ring */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    benefit.color === "electric-violet"
                      ? "bg-electric-violet/10 group-hover:bg-electric-violet/20"
                      : "bg-tech-teal/10 group-hover:bg-tech-teal/20"
                  }`}
                >
                  <benefit.icon
                    className={`w-8 h-8 transition-all duration-300 group-hover:scale-110 ${
                      benefit.color === "electric-violet"
                        ? "text-electric-violet"
                        : "text-tech-teal"
                    }`}
                  />
                </div>
                {/* Glow Effect on Hover */}
                <div 
                  className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${
                    benefit.color === "electric-violet"
                      ? "bg-electric-violet/30"
                      : "bg-tech-teal/30"
                  }`}
                />
              </div>
              
              <h3 className="text-xl font-bold text-white-ice mb-3 group-hover:text-gradient transition-all">
                {benefit.title}
              </h3>
              <p className="text-silver-grey leading-relaxed">{benefit.description}</p>
              
              {/* Decorative Bottom Line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-electric-violet/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
