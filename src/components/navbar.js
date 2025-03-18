import React from "react";
import { FaHome, FaBriefcase, FaCode, FaCogs, FaEnvelope } from "react-icons/fa";

const Navbar = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: "home", icon: <FaHome /> },
        { id: "projects", icon: <FaBriefcase /> },
        { id: "skills", icon: <FaCode /> },
        { id: "services", icon: <FaCogs /> },
        { id: "contact", icon: <FaEnvelope /> },
    ];

    return (
        <nav className="navbar">
            {navItems.map((item) => (
                <button key={item.id} onClick={() => document.getElementById(item.id).scrollIntoView({ behavior: "smooth" })}>
                    {item.icon}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
