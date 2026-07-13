import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from './AnimatedText';

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn('relative inline-flex items-center justify-center px-6 py-3 font-medium rounded-2xl border border-transparent transition-all duration-300 focus:outline-none', className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
