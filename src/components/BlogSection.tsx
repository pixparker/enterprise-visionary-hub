import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const articles = [
    {
      title: "چرا Clean Architecture کلید موفقیت پروژه‌های بزرگ است؟",
      excerpt:
        "در این مقاله بررسی می‌کنیم که چگونه یک معماری تمیز می‌تواند هزینه‌های نگهداری را کاهش دهد...",
      category: "Architecture",
      readTime: "۸ دقیقه",
      date: "۱۵ آذر ۱۴۰۴",
    },
    {
      title: "گذار به Microservices: چه زمانی و چگونه؟",
      excerpt:
        "آیا واقعاً به معماری میکروسرویس نیاز دارید؟ در این مطلب معیارهای تصمیم‌گیری را بررسی می‌کنیم...",
      category: "System Design",
      readTime: "۱۲ دقیقه",
      date: "۸ آذر ۱۴۰۴",
    },
    {
      title: "۵ اشتباه رایج در یکپارچه‌سازی هوش مصنوعی در سازمان‌ها",
      excerpt:
        "بسیاری از سازمان‌ها در پیاده‌سازی AI با چالش‌هایی مواجه می‌شوند که قابل پیشگیری هستند...",
      category: "AI Strategy",
      readTime: "۱۰ دقیقه",
      date: "۱ آذر ۱۴۰۴",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-elevated-dark/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-electric-violet text-sm font-medium tracking-wide mb-3 block">
              دیدگاه‌ها و مقالات
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white-ice">
              آخرین نوشته‌ها
            </h2>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-silver-grey hover:text-electric-violet">
            مشاهده همه مقالات
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Thumbnail area */}
              <div className="h-48 bg-gradient-to-br from-electric-violet/20 via-surface-elevated to-tech-teal/10 relative overflow-hidden">
                <div className="absolute inset-0 grid-lines opacity-50" />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-electric-violet/80 text-white-ice text-xs px-3 py-1 rounded-full font-inter">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-muted-grey text-xs mb-4">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white-ice mb-3 group-hover:text-electric-violet transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-silver-grey text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="mt-4 pt-4 border-t border-border/30">
                  <span className="text-electric-violet text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    ادامه مطلب
                    <ArrowLeft className="w-4 h-4" />
                  </span>
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
