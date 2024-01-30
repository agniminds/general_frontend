import React from "react";
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from 'react-icons/bi';
import '../styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="menu">
            <div className="logo">
                <BiBookAlt className="logo-icon" />
                <h2>ChessReco</h2>
            </div>

            <div className="menu--list">
                <a href="#" className="item">
                    <BiHome className="icon" />
                    Dashboard
                </a>
                <a href="#" className="item">
                    <BiTask className="icon" />
                    Tournaments
                </a>
                <a href="#" className="item">
                    <BiSolidReport className="icon" />
                    Recommendations
                </a>
                <a href="#" className="item">
                    <BiHelpCircle className="icon" />
                    Help
                </a>

            </div>

        </div>
    );



};

export default Sidebar;