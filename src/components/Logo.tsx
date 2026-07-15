import React from 'react';
export function Logo({ variant = 'light' }: {variant?: 'light' | 'dark';}) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-ink';
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-brand-indigo shadow-glow">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true">
          
          <path
            d="M4 6h16l-2.5 9.5H8.2L4 6Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round" />
          
          <circle cx="9" cy="20" r="1.6" fill="#06B6D4" />
          <circle cx="16" cy="20" r="1.6" fill="#10B981" />
          <path
            d="M2 4h2l1 2"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round" />
          
        </svg>
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-cyan/40 to-transparent" />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${textColor}`}>
        
        Zinokart
      </span>
    </div>);

}