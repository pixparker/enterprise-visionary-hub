import { ArrowLeft, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const articles = [
    {
      title: "چرا Clean Architecture کلید موفقیت پروژه‌های بزرگ است؟",
      excerpt:
        "در این مقاله بررسی می‌کنیم که چگونه یک معماری تمیز می‌تواند هزینه‌های نگهداری را کاهش دهد...",
      category: "ARCH",
      readTime: "8",
      date: "2026.01.15",
      id: "001",
    },
    {
      title: "گذار به Microservices: چه زمانی و چگونه؟",
      excerpt:
        "آیا واقعاً به معماری میکروسرویس نیاز دارید؟ در این مطلب معیارهای تصمیم‌گیری را بررسی می‌کنیم...",
      category: "SYS",
      readTime: "12",
      date: "2026.01.08",
      id: "002",
    },
    {
      title: "۵ اشتباه رایج در یکپارچه‌سازی هوش مصنوعی در سازمان‌ها",
      excerpt:
        "بسیاری از سازمان‌ها در پیاده‌سازی AI با چالش‌هایی مواجه می‌شوند که قابل پیشگیری هستند...",
      category: "AI",
      readTime: "10",
      date: "2026.01.01",
      id: "003",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-cyber-dark/30 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-neon-cyan font-orbitron text-xs tracking-widest mb-4">
              <FileText className="w-4 h-4" />
              <span>DATA_LOGS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-holo-white tracking-wide">
              آخرین نوشته‌ها
            </h2>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-holo-grey hover:text-neon-cyan">
            مشاهده آرشیو
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="h-full border border-neon-cyan/20 bg-cyber-dark/60 backdrop-blur-sm transition-all duration-500 hover:border-neon-cyan/60 hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.1)]">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-neon-cyan/20 bg-neon-cyan/5">
                  <span className="font-orbitron text-xs text-neon-cyan tracking-widest">
                    [{article.category}_{article.id}]
                  </span>
                  <span className="text-holo-muted text-xs font-orbitron">{article.date}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-holo-muted text-xs mb-4 font-orbitron">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} MIN
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-holo-white mb-3 group-hover:text-neon-cyan transition-colors font-yekan leading-relaxed">
                    {article.title}
                  </h3>

                  <p className="text-holo-grey text-sm leading-relaxed font-rajdhani line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 pt-4 border-t border-neon-cyan/10">
                    <span className="text-neon-cyan text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-orbitron tracking-wider">
                      READ_MORE
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
