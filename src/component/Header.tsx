import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";
import ArrowDown from "./subcomponent/Arrowdown";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-500 h-12 z-50 px-2.5 pt-1 text-white flex items-center">
      <div className="flex items-center space-x-1 mr-32">
        <h1 className="text-2xl font-bold italic">Damine</h1>
        <GrInProgress className="text-3xl animate-spin" />
      </div>
      <div id="links" class>
        <div className="flex space-x-0.5 items-center">
          <Link to="/journal">Journal</Link>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
