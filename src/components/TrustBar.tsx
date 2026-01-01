const TrustBar = () => {
  const industries = [
    { name: "Fintech", icon: "💳" },
    { name: "Automation & Robotics", icon: "🤖" },
    { name: "E-commerce", icon: "🛒" },
    { name: "European Tech Market", icon: "🇪🇺" },
  ];

  return (
    <section className="py-16 border-y border-border/30 bg-elevated-dark/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-silver-grey text-sm mb-8">
          تجربه حل چالش‌های پیچیده در صنایع پیشرو
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="flex items-center gap-3 text-muted-grey hover:text-silver-grey transition-colors duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <span className="text-2xl">{industry.icon}</span>
              <span className="font-inter text-sm tracking-wide">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
