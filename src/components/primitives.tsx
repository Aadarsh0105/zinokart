import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate } from
'framer-motion';
// ---------- Section heading ----------
type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
};
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = ''
}: SectionHeadingProps) {
  const alignment =
  align === 'center' ?
  'text-center mx-auto items-center' :
  'text-left items-start';
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`flex flex-col ${alignment} max-w-3xl ${className}`}>
      
      {eyebrow &&
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-indigo shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          {eyebrow}
        </span>
      }
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description &&
      <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      }
    </motion.div>);

}
// ---------- Animated counter ----------
type CounterProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};
export function Counter({
  to,
  suffix = '',
  prefix = '',
  duration = 2,
  className = ''
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-40px'
  });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v)
    });
    return () => controls.stop();
  }, [inView, to, duration, mv]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(display).toLocaleString()}
      {suffix}
    </span>);

}
// ---------- Fade up wrapper ----------
export function FadeUp({
  children,
  delay = 0,
  className = '',
  y = 28





}: {children: React.ReactNode;delay?: number;className?: string;y?: number;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-60px'
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}>
      
      {children}
    </motion.div>);

}
// ---------- Store buttons ----------
export function AppStoreButtons({
  variant = 'light',
  className = '',
  fullWidthOnMobile = false




}: {variant?: 'light' | 'dark';className?: string;fullWidthOnMobile?: boolean;}) {
  const base =
  variant === 'dark' ?
  'border-white/15 bg-white/10 text-white hover:bg-white/20 backdrop-blur' :
  'border-surface-border bg-white text-ink hover:border-brand-indigo/40 hover:shadow-card';
  const layout = fullWidthOnMobile ?
  'w-full flex-col sm:w-auto sm:flex-row' :
  'flex-wrap';
  const buttonWidth = fullWidthOnMobile ? 'w-full justify-center sm:w-auto' : '';
  return (
    <div className={`flex items-center gap-3 ${layout} ${className}`}>
      <a
        href="#"
        className={`group flex min-h-14 items-center gap-3 rounded-2xl border px-5 py-3 transition-[transform,box-shadow,border-color,background-color] duration-200 hover:-translate-y-0.5 ${base} ${buttonWidth}`}>
        
        <PlayIcon />
        <span className="flex flex-col leading-none">
          <span
            className={`text-[10px] uppercase tracking-wide ${variant === 'dark' ? 'text-white/60' : 'text-ink-soft'}`}>
            
            Get it on
          </span>
          <span className="mt-0.5 font-display text-sm font-semibold">
            Google Play
          </span>
        </span>
      </a>
      <a
        href="#"
        className={`group flex min-h-14 items-center gap-3 rounded-2xl border px-5 py-3 transition-[transform,box-shadow,border-color,background-color] duration-200 hover:-translate-y-0.5 ${base} ${buttonWidth}`}>
        
        <AppleIcon />
        <span className="flex flex-col leading-none">
          <span
            className={`text-[10px] uppercase tracking-wide ${variant === 'dark' ? 'text-white/60' : 'text-ink-soft'}`}>
            
            Download on the
          </span>
          <span className="mt-0.5 font-display text-sm font-semibold">
            App Store
          </span>
        </span>
      </a>
    </div>);

}
function PlayIcon() {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      aria-hidden="true">
      
      <path d="M1 1.5v21l11-10.5L1 1.5Z" fill="#4F46E5" />
      <path d="M12 12 1 22.5l14.5-8L12 12Z" fill="#06B6D4" />
      <path d="M12 12 15.5 8 1 1.5 12 12Z" fill="#10B981" />
      <path
        d="m12 12 3.5 2.5L21 12l-5.5-4L12 12Z"
        fill="#4F46E5"
        opacity="0.8" />
      
    </svg>);

}
function AppleIcon() {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="currentColor"
      aria-hidden="true">
      
      <path d="M16.5 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.4 0 2.2-1.2 3.1-2.5.6-.9.9-1.4 1.4-2.4-3.7-1.4-2.9-4.9-2.9-4.9ZM14 4.3c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.5Z" />
    </svg>);

}