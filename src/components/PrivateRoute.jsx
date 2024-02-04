import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // Get authentication status from localStorage

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
