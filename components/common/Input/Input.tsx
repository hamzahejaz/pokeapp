import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  className = '',
  type = 'text',
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  );
}
