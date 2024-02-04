import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Login from './Login';
import Help from './components/Help';
import Tournaments from './components/Tournaments';
import Recommendations from './components/Recommendations';
import games from './components/gameData';
import './App.css';
import './styles/sidebar.css';
import './styles/content.css';



// Define the PrivateRoute component
const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Replace with your auth check
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// Define the SidebarLayout component
const SidebarLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* This will render the nested route components */}
      </div>
    </div>
  );
};


// Define the App component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<Content />} /> {/* The main dashboard view */}
            <Route path="tournaments" element={<Tournaments games={games} />} />
            <Route path="help" element={<Help />} />
            <Route path="recommendations" element={<Recommendations />} />
            {/* Additional nested routes can be added here */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
