import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
}

export function Card({ children, className = '', backgroundColor }: CardProps) {
  return (
    <div
      className={`rounded-xl shadow-md p-6 ${className}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {children}
    </div>
  );
}
