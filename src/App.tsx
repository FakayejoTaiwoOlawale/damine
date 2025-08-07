import { motion, useScroll } from "motion/react";
import Header from "./component/Header";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-black text-white flex justify-center">
      <Header />

      <motion.div
        className="top-0 left-0 right-0 h-4 fixed  bg-amber-400"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
      />
    </div>
  );
};

/**
 * ==============   Utils   ================
 */

export default App;
