import { motion, useScroll } from 'motion/react';

const ProgressComponent = () => {
     const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className="top-12 left-0 right-0 h-1 fixed bg-green-200"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
      />
    </div>
  );
}

export default ProgressComponent
