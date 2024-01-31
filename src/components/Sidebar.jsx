import React from "react";
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from 'react-icons/bi';
import '../styles/sidebar.css';
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="menu">
            <div className="logo">
                <BiBookAlt className="logo-icon" />
                <h2>ChessReco</h2>
            </div>

            <div className="menu--list">
                <Link to="/Content" className="item">

                    <BiHome className="icon" />
                    Dashboard
                </Link>

                <Link to={"/Tournaments"} className="item">
                    <BiTask className="icon" />
                    Tournaments
                </Link>
                <Link to={"/Recommendations"} className="item">
                    <BiSolidReport className="icon" />
                    Recommendations
                </Link>
                <Link to={"/Help"} className="item">
                    <BiHelpCircle className="icon" />
                    Help
                </Link>



            </div>



        </div>
    );



};

export default Sidebar;