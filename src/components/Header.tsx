import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
          ? "bg-elevated-dark/70 backdrop-blur-2xl border-b border-electric-violet/10 shadow-[0_4px_30px_rgba(127,90,240,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Futuristic Logo */}
          <a href="#" className="text-xl font-bold text-white-ice group relative">
            <span className="relative z-10">
              علی<span className="text-electric-violet group-hover:text-tech-teal transition-colors">.</span>بازداران
            </span>
            <div className="absolute -inset-2 bg-electric-violet/10 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          </a>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-silver-grey hover:text-white-ice transition-all duration-300 text-sm cyber-line py-1"
              >
                {item.label}
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
            className="md:hidden text-white-ice"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-silver-grey hover:text-white-ice transition-colors duration-200"
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
