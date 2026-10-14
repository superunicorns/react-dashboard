import Logo from "../../logo.png";
import "./index.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="Logo" width="183px" height="36px" />
    </div>
  );
}

export default Sidebar;