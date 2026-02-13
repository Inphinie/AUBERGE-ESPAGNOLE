import React from 'react';
import { Act } from '../types';
import { Cpu, ShieldAlert, Ghost, Shuffle, GlobeLock, Terminal } from 'lucide-react';
import MemoryChart from './MemoryChart';
import TerminalBlock from './TerminalBlock';

const Icons = {
  Cpu,
  ShieldAlert,
  Ghost,
  Shuffle,
  GlobeLock,
  Terminal,
};

interface SectionProps {
  act: Act;
}

const Section: React.FC<SectionProps> = ({ act }) => {
  const IconComponent = Icons[act.iconName];

  return (
    <section id={act.id} className="min-h-screen py-20 px-4 md:px-8 relative border-l border-slate-800 ml-4 md:ml-0">
      {/* Connector Line for visual flow */}
      <div className="hidden md:block absolute left-[-17px] top-0 bottom-0 w-[2px] bg-slate-800">
        <div className="sticky top-1/2 w-3 h-3 bg-neon-blue rounded-full -ml-[5px] shadow-[0_0_10px_#00f3ff]"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-cyber-gray rounded-lg border border-slate-700 shadow-inner">
            <IconComponent className="w-8 h-8 text-neon-blue" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-white tracking-tighter uppercase">
              {act.title}
            </h2>
            <p className="text-neon-green font-mono text-sm md:text-base mt-1">
              {act.subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {act.subsections.map((sub, idx) => (
            <article key={idx} className="bg-cyber-gray/30 p-6 md:p-8 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 border-l-4 border-neon-blue pl-4">
                {sub.title}
              </h3>
              
              <div className="text-slate-300 leading-relaxed space-y-4 font-sans text-lg">
                {sub.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {sub.highlight && (
                <div className="mt-6 p-4 bg-neon-yellow/10 border border-neon-yellow/30 rounded text-neon-yellow italic font-mono text-sm">
                  ⚠ {sub.highlight}
                </div>
              )}

              {/* Specific Visual Enhancements based on Content */}
              {act.id === 'act-1' && idx === 0 && (
                <div className="mt-8">
                  <MemoryChart />
                </div>
              )}

              {act.id === 'act-2' && idx === 1 && (
                <TerminalBlock 
                  title="BOOT_SEQUENCE_INTERCEPT" 
                  type="error"
                  lines={[
                    "Loading Secure Boot...",
                    "[CRITICAL] Signature verification bypassed",
                    "BlackLotus kit detected",
                    "Loading malicious payload...",
                    "System compromised."
                  ]} 
                />
              )}

              {act.id === 'act-3' && idx === 0 && (
                 <TerminalBlock 
                 title="VOLATILITY_SCAN_RESULTS" 
                 type="info"
                 lines={[
                   "Analyzing memory dump...",
                   "PID 4022 (svchost.exe) - LEGITIMATE",
                   "PID 4022 (svchost.exe) - HIDDEN/UNLINKED [SUSPICIOUS]",
                   "PID 4022 -> Parent: UNKNOWN",
                   "Warning: Process list inconsistency detected."
                 ]} 
               />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;