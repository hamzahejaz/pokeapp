import React from 'react';
import { getContrastTextColor } from '@/lib/utils';

export interface BadgeProps {
  label: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export function Badge({ label, color, size = 'md', className = '' }: BadgeProps) {
  const textColor = getContrastTextColor(color);

  return (
    <span
      className={`inline-block rounded-full font-semibold uppercase ${sizeStyles[size]} ${className}`}
      style={{ backgroundColor: color, color: textColor }}
    >
      {label}
    </span>
  );
}
