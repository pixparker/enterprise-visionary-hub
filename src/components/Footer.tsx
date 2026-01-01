import { Linkedin, Instagram, Send, Terminal, Radio } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "HOME", href: "#hero" },
    { label: "SERVICES", href: "#services" },
    { label: "LEARN", href: "#blog" },
    { label: "CONNECT", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", code: "LI" },
    { icon: Instagram, href: "#", label: "Instagram", code: "IG" },
    { icon: Send, href: "#", label: "Telegram", code: "TG" },
  ];

  return (
    <footer id="contact" className="border-t border-neon-cyan/20 bg-cyber-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-neon-cyan/50 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-neon-cyan" />
              </div>
              <span className="text-xl font-orbitron font-bold text-holo-white tracking-wider">
                علی<span className="text-neon-cyan">.</span>بازداران
              </span>
            </div>
            <p className="text-holo-grey text-sm leading-relaxed font-rajdhani">
              معمار سیستم‌های Enterprise، استراتژیست هوش مصنوعی
              و منتور تیم‌های فنی با ۱۵ سال تجربه.
            </p>
            <div className="mt-4 flex items-center gap-2 text-neon-green/60 text-xs font-orbitron">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>STATUS: ONLINE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neon-cyan font-orbitron text-sm tracking-widest mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-holo-grey hover:text-neon-cyan transition-colors text-sm font-orbitron tracking-wider flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-neon-cyan transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-neon-cyan font-orbitron text-sm tracking-widest mb-4">
              CONNECT
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="relative w-12 h-12 border border-neon-cyan/30 flex items-center justify-center text-holo-grey hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_20px_hsl(185_100%_50%_/_0.3)] transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="absolute -bottom-5 text-[10px] font-orbitron text-neon-cyan/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.code}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-holo-grey text-sm font-rajdhani">
              برای همکاری و مشاوره، از طریق شبکه‌های اجتماعی
              در تماس باشید.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-cyan/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-holo-muted text-sm font-orbitron tracking-wider">
            © 2026 ALI_BAZDARAN // BUILT_FOR_EXCELLENCE
          </p>
          <div className="flex items-center gap-2 text-holo-muted text-xs font-orbitron">
            <span className="w-2 h-2 bg-neon-cyan/50 animate-pulse" />
            <span>SYSTEM_V2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
