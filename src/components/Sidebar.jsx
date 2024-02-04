import React from "react";
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from 'react-icons/bi';
import '../styles/sidebar.css';
import { Outlet, Link, useNavigate } from "react-router-dom";


const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated'); // Clear the authentication flag
        navigate('/login'); // Redirect to login
    };


    return (
        <div className="menu">
            <div className="logo">
                <BiBookAlt className="logo-icon" />
                <h2>ChessReco</h2>
            </div>

            <div className="menu--listone">
                <Link to="/" className="itemone">

                    <BiHome className="icon" />
                    Dashboard
                </Link>

                <Link to={"/Tournaments"} className="itemone">
                    <BiTask className="icon" />
                    Tournaments
                </Link>
                <Link to={"/Recommendations"} className="itemone">
                    <BiSolidReport className="icon" />
                    Recommendations
                </Link>
                <Link to={"/Help"} className="itemone">
                    <BiHelpCircle className="icon" />
                    Help
                </Link>
                <button onClick={handleLogout} className="itemone">
                    <BiHelpCircle className="icon" />
                    Logout
                </button>



            </div>



        </div>
    );

};

export default Sidebar;