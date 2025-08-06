import { AnimatePresence, motion, useScroll } from "motion/react";
import Content from "./component/Content";
import { useState } from "react";
import ExitAnimation from "./Animating";

const App = () => {
  const { scrollYProgress } = useScroll();
    const [show,setShow]=useState(false)
  return (
    <div className="bg-black text-white flex justify-center">



      <motion.div
        className="top-0 left-0 right-0 h-4 fixed  bg-amber-400"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
      />
      <ExitAnimation/>
      <Content />
    </div>
  );
};

/**
 * ==============   Utils   ================
 */

export default App;
