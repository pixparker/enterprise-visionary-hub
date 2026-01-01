import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "خانه", href: "#hero" },
    { label: "خدمات", href: "#services" },
    { label: "درباره من", href: "#about" },
    { label: "مقالات", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cyber-dark/90 backdrop-blur-xl border-b border-neon-cyan/20"
          : "bg-transparent"
      }`}
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-cyan/20 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              <Cpu className="w-5 h-5 text-neon-cyan relative z-10" />
            </div>
            <span className="text-xl font-orbitron font-bold text-holo-white tracking-wider">
              علی<span className="text-neon-cyan">.</span>بازداران
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-holo-grey hover:text-neon-cyan transition-colors duration-300 text-sm font-rajdhani tracking-wide group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_10px_hsl(185_100%_50%)]" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">رزرو مشاوره</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-cyan p-2 border border-neon-cyan/30 hover:bg-neon-cyan/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-cyan/20 pt-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-holo-grey hover:text-neon-cyan transition-colors duration-200 font-rajdhani"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="w-fit mt-2" asChild>
                <a href="#contact">رزرو مشاوره</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
