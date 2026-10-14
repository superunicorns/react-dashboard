import Logo from "../../logo.png";
import { NavLink } from "react-router-dom";
import { GoHome, GoHomeFill } from "react-icons/go";
import { AiOutlineDollar, AiFillDollarCircle } from "react-icons/ai";
import "./index.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="Logo" width="183px" height="36px" />
      <ul>
        <NavLink to="/" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <GoHomeFill /> : <GoHome />}
              <span>Home</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/transactions">
          {({ isActive }) => (
            <li>
              {isActive ? <AiFillDollarCircle /> : <AiOutlineDollar />}
              <span>Home</span>
            </li>
          )}
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;