import React from 'react';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  gradient?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
};

const gradientStyles = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

export function Spinner({ size = 'md', color, gradient, className = '' }: SpinnerProps) {
  if (gradient) {
    return (
      <div className={`${gradientStyles[size]} rounded-full animate-spin border-4 border-transparent border-t-red-500 border-r-purple-500 ${className}`} />
    );
  }

  return (
    <div
      className={`${sizeStyles[size]} border-gray-200 rounded-full animate-spin ${className}`}
      style={color ? { borderTopColor: color } : { borderTopColor: '#78C850' }}
    />
  );
}
