import Logo from "../../logo.png";
import { NavLink } from "react-router-dom";
import { GoHome, GoHomeFill } from "react-icons/go";
import { AiOutlineDollar, AiFillDollarCircle } from "react-icons/ai";
import { FaRegUser, FaUser } from "react-icons/fa";
import { FaRegCreditCard, FaCreditCard } from "react-icons/fa";
import { IoStatsChartOutline, IoStatsChartSharp } from "react-icons/io5";
import { IoSettingsOutline, IoSettings } from "react-icons/io5";
import { PiMoneyWavyLight, PiMoneyWavyFill } from "react-icons/pi";
import { HiOutlineWrenchScrewdriver, HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa6";

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
        <NavLink to="/transactions" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <AiFillDollarCircle /> : <AiOutlineDollar />}
              <span>Transactions</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/accounts" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <FaUser /> : <FaRegUser />}
              <span>Accounts</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/investments" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <IoStatsChartSharp /> : <IoStatsChartOutline />}
              <span>Investments</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/credit-cards" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <FaCreditCard /> : <FaRegCreditCard />}
              <span>Credit Cards</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/loans" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <PiMoneyWavyFill /> : <PiMoneyWavyLight />}
              <span>Loans</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/services" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <HiMiniWrenchScrewdriver /> : <HiOutlineWrenchScrewdriver />}
              <span>Services</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/my-privileges" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <FaLightbulb /> : <FaRegLightbulb />}
              <span>My Privileges</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/settings" className="nav-link">
          {({ isActive }) => (
            <li>
              {isActive ? <IoSettings /> : <IoSettingsOutline />}
              <span>Settings</span>
            </li>
          )}
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;