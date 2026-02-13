import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="z-10 text-center max-w-5xl">
        <div className="inline-block border border-neon-red text-neon-red px-3 py-1 font-mono text-xs tracking-[0.2em] mb-6 animate-pulse">
          SYSTEM_ALERT: CRITICAL_VULNERABILITY
        </div>
        
        <h1 
          className="glitch-text text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-mono tracking-tighter"
          data-text="L'AUBERGE ESPAGNOLE"
        >
          L'AUBERGE ESPAGNOLE
        </h1>
        
        <h2 className="text-xl md:text-3xl text-slate-400 font-sans font-light mb-8">
          DE LA SÉCURITÉ INFORMATIQUE
        </h2>

        <p className="text-neon-green font-mono text-sm md:text-lg max-w-2xl mx-auto border-t border-b border-slate-800 py-4 mb-12">
          &lt;Où Chacun Apporte son Propre Malware /&gt;
        </p>

        <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed italic mb-12">
          "Imaginez un comptable qui vous annonce fièrement que vos dépenses mensuelles représentent 24% de vos revenus, avant de vous glisser discrètement sous le nez une facture détaillée qui culmine à 42%..."
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <a href="#act-1" className="text-neon-blue flex flex-col items-center gap-2 font-mono text-xs hover:text-white transition-colors">
          <span>INITIALISER L'ANALYSE</span>
          <ArrowDown />
        </a>
      </div>
    </div>
  );
};

export default Hero;