import React from 'react';
import { motion } from 'motion/react';
import { cn } from './AnimatedText';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function HoverCard({ children, className, glow = true }: HoverCardProps) {
  return (
    <motion.div
      className={cn('relative group h-full w-full', className)}
    >
      {glow && (
        <div className="absolute -inset-0.5 bg-primary/40 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
      )}
      <div className="relative h-full w-full bg-white rounded-3xl border border-black/5 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        {children}
      </div>
    </motion.div>
  );
}
