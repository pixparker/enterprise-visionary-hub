import { Terminal } from "lucide-react";

const TrustBar = () => {
  const industries = [
    { name: "FINTECH", code: "FIN" },
    { name: "AUTOMATION", code: "AUT" },
    { name: "ROBOTICS", code: "ROB" },
    { name: "E-COMMERCE", code: "ECM" },
    { name: "EU TECH", code: "EUT" },
  ];

  return (
    <section className="py-12 border-y border-neon-cyan/20 bg-cyber-dark/50 relative overflow-hidden">
      {/* Animated data stream background */}
      <div className="absolute inset-0 data-stream opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Terminal className="w-4 h-4 text-neon-cyan" />
          <p className="text-holo-grey text-sm font-orbitron tracking-widest">
            EXPERIENCE_SECTORS
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative px-6 py-3 border border-neon-cyan/20 bg-cyber-dark/60 hover:border-neon-cyan/60 hover:bg-neon-cyan/5 transition-all duration-300">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan/50" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-cyan/50" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-cyan/50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan/50" />
                
                <div className="flex items-center gap-3">
                  <span className="text-neon-cyan/50 font-orbitron text-xs">[{industry.code}]</span>
                  <span className="font-orbitron text-sm tracking-wider text-holo-grey group-hover:text-neon-cyan transition-colors">
                    {industry.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
