import React from 'react';

interface TerminalBlockProps {
  title: string;
  lines: string[];
  type?: 'error' | 'info' | 'success';
}

const TerminalBlock: React.FC<TerminalBlockProps> = ({ title, lines, type = 'info' }) => {
  const borderColor = type === 'error' ? 'border-neon-red' : 'border-neon-green';
  const textColor = type === 'error' ? 'text-neon-red' : 'text-neon-green';

  return (
    <div className={`my-6 font-mono text-xs md:text-sm bg-black border-l-4 ${borderColor} p-4 shadow-lg`}>
      <div className="flex justify-between items-center mb-2 border-b border-gray-800 pb-1">
        <span className="text-gray-500">ROOT@SYSTEM:~/LOGS</span>
        <span className="text-gray-500">{title}</span>
      </div>
      <div className={`${textColor} space-y-1`}>
        {lines.map((line, idx) => (
          <p key={idx} className="typing-effect">
            <span className="opacity-50 mr-2">$</span>
            {line}
          </p>
        ))}
        <span className="animate-pulse inline-block w-2 h-4 bg-current ml-1 align-middle"></span>
      </div>
    </div>
  );
};

export default TerminalBlock;