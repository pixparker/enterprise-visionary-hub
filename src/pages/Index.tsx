import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhyMeSection from "@/components/WhyMeSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <WhyMeSection />
        <ServicesSection />
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
