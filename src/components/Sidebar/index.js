import Logo from "../../logo.png";
import { GoHome } from "react-icons/go";
import "./index.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="Logo" width="183px" height="36px" />
      <ul>
        <li>
          <GoHome /> Home
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;