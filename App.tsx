import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import Navigation from './components/Navigation';
import { ACTS } from './constants';
import { Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    ACTS.forEach((act) => {
      const element = document.getElementById(act.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cyber-black text-slate-200 min-h-screen selection:bg-neon-green selection:text-black">
      <Navigation activeId={activeSection} />
      
      <main className="lg:pl-64">
        <Hero />
        
        <div className="max-w-7xl mx-auto pb-32">
          {ACTS.map((act) => (
            <Section key={act.id} act={act} />
          ))}

          <section className="px-4 md:px-12 py-20 border-t border-slate-800 bg-gradient-to-b from-cyber-black to-slate-900">
             <div className="max-w-4xl mx-auto text-center">
                <Terminal className="w-16 h-16 text-neon-red mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-8">
                  CONCLUSION : La Confiance est un Luxe
                </h2>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                  "La question n'est pas de savoir si Microsoft est gentil ou méchant. La question est de savoir si, en tant qu'utilisateur, vous pouvez raisonnablement compter sur les outils intégrés à Windows pour vous protéger. Et la réponse, basée sur les preuves techniques, est non."
                </p>
                <div className="inline-block p-6 border border-neon-green bg-neon-green/10 rounded-lg">
                  <p className="font-mono text-neon-green font-bold">
                    &gt; RECOMMENDATION: ADOPTER UNE POSTURE DE VIGILANCE INFORMÉE_
                  </p>
                </div>
             </div>
          </section>

          <footer className="text-center py-12 border-t border-slate-900 font-mono text-xs text-slate-600">
            <p>GENERATED_BY_REACT_ENGINEER_V18.0</p>
            <p className="mt-2">NO_COOKIES_WERE_HARMED_IN_THIS_PROCESS</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;