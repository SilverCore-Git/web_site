import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function Background3D() {
  // Use framer-motion values to track mouse position without re-rendering React
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics for that "organic / viscous" trailing effect
  // We use different springs for different layers to create depth and fluidity
  const springConfig1 = { damping: 30, stiffness: 50 };
  const springConfig2 = { damping: 40, stiffness: 40 };
  const springConfig3 = { damping: 50, stiffness: 30 };

  const x1 = useSpring(mouseX, springConfig1);
  const y1 = useSpring(mouseY, springConfig1);

  const x2 = useSpring(mouseX, springConfig2);
  const y2 = useSpring(mouseY, springConfig2);

  const x3 = useSpring(mouseX, springConfig3);
  const y3 = useSpring(mouseY, springConfig3);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Set initial position to center of screen (using window innerWidth safely)
    if (typeof window !== 'undefined') {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#fafafa]">
      
      {/* Blob 1: Fast follower, primary color */}
      <motion.div
        style={{
          x: x1,
          y: y1,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 70% 30% / 50% 60% 40% 50%",
            "50% 50% 20% 80% / 25% 80% 20% 75%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          rotate: [0, 90, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[80px]"
      />

      {/* Blob 2: Medium follower, softer color */}
      <motion.div
        style={{
          x: x2,
          y: y2,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "70% 30% 50% 50% / 30% 30% 70% 70%",
            "30% 70% 30% 70% / 60% 40% 60% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
          ],
          rotate: [360, 180, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/10 blur-[100px]"
      />

      {/* Blob 3: Slowest follower, accent color */}
      <motion.div
        style={{
          x: x3,
          y: y3,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 40% 60% / 40% 60% 60% 40%",
            "40% 60% 60% 40% / 60% 40% 40% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[90px]"
      />
      
      {/* Subtle base glow to prevent complete white screen if mouse is far */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
