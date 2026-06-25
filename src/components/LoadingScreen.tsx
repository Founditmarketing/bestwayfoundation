import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Total animation time:
    // House delay (0.2s) + duration (0.8s) = 1.0s
    // Top text delay (0.8s) + duration (0.8s) = 1.6s
    // Bottom text delay (1.4s) + duration (0.8s) = 2.2s
    // Give it a bit of hold time, then exit
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <img
          src="/loadscreen/bestwayloadscreen.gif"
          alt="Best Way Loading"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
}
