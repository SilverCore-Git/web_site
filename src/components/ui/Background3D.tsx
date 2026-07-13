import { motion } from 'motion/react';

export function Background3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#fafafa]">
      
      {/* Blob 1: Fast follower, primary color */}
      <motion.div
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 70% 30% / 50% 60% 40% 50%",
            "50% 50% 20% 80% / 25% 80% 20% 75%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          rotate: [0, 90, 180, 360],
          x: ["-10%", "10%", "-5%", "-10%"],
          y: ["-10%", "-5%", "10%", "-10%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[80px]"
      />

      {/* Blob 2: Medium follower, softer color */}
      <motion.div
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "70% 30% 50% 50% / 30% 30% 70% 70%",
            "30% 70% 30% 70% / 60% 40% 60% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
          ],
          rotate: [360, 180, 90, 0],
          x: ["10%", "-10%", "5%", "10%"],
          y: ["5%", "10%", "-10%", "5%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-400/10 blur-[100px]"
      />

      {/* Blob 3: Slowest follower, accent color */}
      <motion.div
        animate={{
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 40% 60% / 40% 60% 60% 40%",
            "40% 60% 60% 40% / 60% 40% 40% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
          scale: [1, 1.2, 0.8, 1],
          x: ["0%", "20%", "-20%", "0%"],
          y: ["20%", "0%", "-20%", "20%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-secondary/10 blur-[90px]"
      />
      
      {/* Subtle base glow to prevent complete white screen if mouse is far */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
