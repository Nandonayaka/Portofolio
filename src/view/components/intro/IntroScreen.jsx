import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  { text: "Olá", lang: "Portuguese" },
  { text: "Привет", lang: "Russian" },
  { text: "Hello", lang: "English" },
  { text: "Ciao", lang: "Italian" },
  { text: "Halo", lang: "Indonesian" },
];

export const IntroScreen = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Lock body scroll during intro animation
    document.body.style.overflow = "hidden";

    // Cycle through greetings
    if (index < GREETINGS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      // Hold the last greeting briefly then initiate swipe-up reveal
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 450);
      return () => clearTimeout(exitTimer);
    }
  }, [index]);

  const handleAnimationComplete = () => {
    if (isExiting) {
      setIsHidden(true);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }
  };

  if (isHidden) return null;

  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={isExiting ? { y: "-100%" } : { y: "0%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={handleAnimationComplete}
      className="fixed inset-0 z-[9999] bg-white flex flex-col justify-between p-8 md:p-12 select-none shadow-2xl"
    >

      {/* Center Greeting Text Animation */}
      <div className="relative flex flex-col items-center justify-center my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-[#4A90FF] font-normal tracking-tight text-center">
              <span className="inline-block relative">
                {GREETINGS[index].text}
                <span className="inline-block w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-[#4A90FF] rounded-full ml-2 md:ml-3 align-baseline" />
              </span>
            </h1>
            <p className="mt-3 text-xs md:text-sm tracking-widest text-[#4A90FF]/60 uppercase font-mono">
              {GREETINGS[index].lang}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
