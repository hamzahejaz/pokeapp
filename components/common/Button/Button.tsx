import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'purple' | 'red';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-[#78C850] hover:bg-[#68B840] text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  purple: 'bg-[#A040A0] hover:bg-[#903890] text-white',
  red: 'bg-red-500 hover:bg-red-600 text-white',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
