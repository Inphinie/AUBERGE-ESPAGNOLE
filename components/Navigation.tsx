import React from 'react';
import { ACTS } from '../constants';

interface NavigationProps {
  activeId: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeId }) => {
  return (
    <nav className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-black/90 border-r border-slate-800 p-8 z-50 backdrop-blur-sm">
      <div className="mb-12">
        <div className="w-3 h-3 bg-neon-green rounded-full inline-block mr-2 animate-pulse"></div>
        <span className="font-mono text-slate-400 text-sm">MONITEUR SYSTÈME</span>
      </div>

      <ul className="space-y-6">
        {ACTS.map((act) => {
          const isActive = activeId === act.id;
          return (
            <li key={act.id}>
              <a 
                href={`#${act.id}`}
                className={`group flex items-center gap-3 transition-all duration-300 ${isActive ? 'translate-x-2' : ''}`}
              >
                <div 
                  className={`w-1 h-full transition-all duration-300 ${isActive ? 'h-6 bg-neon-blue' : 'h-1 bg-slate-700 group-hover:bg-slate-500'}`}
                ></div>
                <div className="flex flex-col">
                  <span className={`font-mono text-xs ${isActive ? 'text-neon-blue' : 'text-slate-500'}`}>
                    {act.id.toUpperCase()}
                  </span>
                  <span className={`font-sans text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}`}>
                    {act.title.split(':')[1]}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto pt-8 border-t border-slate-800">
        <p className="font-mono text-[10px] text-slate-600">
          SYS_STATUS: COMPROMISED<br/>
          UPTIME: ERROR<br/>
          KERNEL: PANIC
        </p>
      </div>
    </nav>
  );
};

export default Navigation;