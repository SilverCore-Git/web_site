import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  wordAnimation?: boolean;
}

export function AnimatedText({ text, className, once = true, delay = 0, wordAnimation = false }: AnimatedTextProps) {
  const words = text.split(' ');
  const characters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: wordAnimation ? 0.05 : 0.02, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={cn('flex flex-wrap', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
    >
      {wordAnimation
        ? words.map((word, index) => (
            <motion.span variants={child} key={index} className="inline-block whitespace-pre">
              {word}{index !== words.length - 1 ? ' ' : ''}
            </motion.span>
          ))
        : characters.map((character, index) => (
            <motion.span variants={child} key={index} className="inline-block">
              {character === ' ' ? '\u00A0' : character}
            </motion.span>
          ))}
    </motion.div>
  );
}
