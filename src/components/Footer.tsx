import { Linkedin, Instagram, Send } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "خانه", href: "#hero" },
    { label: "خدمات", href: "#services" },
    { label: "آموزش", href: "#blog" },
    { label: "تماس", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  return (
    <footer id="contact" className="border-t border-border/30 bg-deep-void">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-white-ice inline-block mb-4">
              علی<span className="text-electric-violet">.</span>بازداران
            </a>
            <p className="text-silver-grey text-sm leading-relaxed">
              معمار سیستم‌های Enterprise، استراتژیست هوش مصنوعی
              و منتور تیم‌های فنی با ۱۵ سال تجربه.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white-ice font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-silver-grey hover:text-electric-violet transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white-ice font-bold mb-4">ارتباط با من</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-elevated-dark border border-border/50 flex items-center justify-center text-silver-grey hover:text-electric-violet hover:border-electric-violet/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-silver-grey text-sm">
              برای همکاری و مشاوره، از طریق شبکه‌های اجتماعی
              یا ایمیل در تماس باشید.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-grey text-sm font-inter">
            © 2026 Ali Bazdaran. طراحی شده برای تعالی.
          </p>
          <p className="text-muted-grey text-xs">
            ساخته شده با ❤️ و کد تمیز
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
