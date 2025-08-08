import { motion, useScroll } from "motion/react";
import Header from "./component/Header";
import Content from "./component/Content";
import Sidebar from "./component/Sidebar";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen flex justify-center">
      <Header />

      <motion.div
        className="top-12 left-0 right-0 h-1 fixed bg-green-200"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
      />
      <Sidebar/>
      <Content />
    </div>
  );
};

/**
 * ==============   Utils   ================
 */

export default App;
