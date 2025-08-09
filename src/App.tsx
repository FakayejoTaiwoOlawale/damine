import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage"
import Userpage from "../pages/Userpage"

const App = () => {
 
  return (
    <div className="min-h-screen flex justify-center">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/user" element={<Userpage/>} />
      </Routes>
    </div>
  );
};

/**
 * ==============   Utils   ================
 */

export default App;
