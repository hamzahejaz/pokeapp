import React from 'react';
import { calculateStatPercentage, padNumber } from '@/lib/utils';

export interface StatBarProps {
  name: string;
  value: number;
  maxValue?: number;
  color?: string;
}

export function StatBar({ name, value, maxValue = 255, color = '#78C850' }: StatBarProps) {
  const percentage = calculateStatPercentage(value, maxValue);

  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-bold w-16 text-right uppercase text-sm" style={{ color }}>
        {name}
      </span>
      <span className="text-gray-600 font-mono text-sm w-12">
        {padNumber(value, 3)}
      </span>
      <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
