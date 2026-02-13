import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Rapporté (Task Mgr)', value: 24 },
  { name: 'Fantôme / Caché', value: 18 },
  { name: 'Libre', value: 58 },
];

const COLORS = ['#00ff41', '#ff003c', '#1a1a1a'];

const MemoryChart: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-80 bg-cyber-gray/50 rounded-lg p-4 border border-slate-800 shadow-[0_0_15px_rgba(0,255,65,0.1)]">
      <h3 className="text-center font-mono text-neon-blue mb-2 text-sm">
        ANALYSE MÉMOIRE : RÉALITÉ VS RAPPORT
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#000', borderColor: '#333', borderRadius: '4px' }}
            itemStyle={{ color: '#fff', fontFamily: 'monospace' }}
          />
          <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontFamily: 'monospace', fontSize: '12px' }}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MemoryChart;