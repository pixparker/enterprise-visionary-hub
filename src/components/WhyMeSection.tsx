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
    <section className="py-24 relative">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white-ice mb-4">
            چرا <span className="text-gradient">معماری سیستم</span> مهم‌تر از کدنویسی است؟
          </h2>
          <p className="text-silver-grey max-w-2xl mx-auto">
            یک معماری درست از همان ابتدا، هزاران ساعت کار اضافی و میلیون‌ها تومان هزینه را صرفه‌جویی می‌کند.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  benefit.color === "electric-violet"
                    ? "bg-electric-violet/10 group-hover:bg-electric-violet/20 group-hover:shadow-[0_0_30px_rgba(127,90,240,0.3)]"
                    : "bg-tech-teal/10 group-hover:bg-tech-teal/20 group-hover:shadow-[0_0_30px_rgba(44,182,125,0.3)]"
                }`}
              >
                <benefit.icon
                  className={`w-7 h-7 ${
                    benefit.color === "electric-violet"
                      ? "text-electric-violet"
                      : "text-tech-teal"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold text-white-ice mb-3">{benefit.title}</h3>
              <p className="text-silver-grey leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
