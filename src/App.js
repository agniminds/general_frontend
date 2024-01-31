import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import './App.css'
import Login from './Login';
import Help from './components/Help';
import Tournaments from './components/Tournaments';
import Recommendations from './components/Recommendations';
import games from './components/gameData';

function App() {
  return (


    <div className="dashboard">
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Content' element={<Content />} />
          <Route path='/Sidebar' element={<Sidebar />} />
          <Route path='/Tournaments' element={<Tournaments games={games} />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/Recommendations' element={<Recommendations />} />

          {/* <Sidebar /> */}

        </Routes>

      </BrowserRouter>
    </div>
  );


}

export default App;
