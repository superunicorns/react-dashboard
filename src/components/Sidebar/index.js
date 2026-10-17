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
      <img src={Logo} className="sidebar-logo" alt="Logo" width="183px" height="36px" />
      <ul className="sidebar-menu">
        <NavLink to="/" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <GoHomeFill size={32} /> : <GoHome size={32} />}
              <span>Home</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/transactions" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <AiFillDollarCircle size={32} /> : <AiOutlineDollar size={32} />}
              <span>Transactions</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/accounts" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <FaUser size={32} /> : <FaRegUser size={32} />}
              <span>Accounts</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/investments" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <IoStatsChartSharp size={32} /> : <IoStatsChartOutline size={32} />}
              <span>Investments</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/credit-cards" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <FaCreditCard size={32} /> : <FaRegCreditCard size={32} />}
              <span>Credit Cards</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/loans" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <PiMoneyWavyFill size={32} /> : <PiMoneyWavyLight size={32} />}
              <span>Loans</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/services" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <HiMiniWrenchScrewdriver size={32} /> : <HiOutlineWrenchScrewdriver size={32} />}
              <span>Services</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/my-privileges" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <FaLightbulb size={32} /> : <FaRegLightbulb size={32} />}
              <span>My Privileges</span>
            </li>
          )}
        </NavLink>
        <NavLink to="/settings" className="nav-link">
          {({ isActive }) => (
            <li className={isActive ? "nav-item active" : "nav-item"}>
              {isActive ? <IoSettings size={32} /> : <IoSettingsOutline size={32} />}
              <span>Settings</span>
            </li>
          )}
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;