import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import './App.css'
import Login from './Login';

function App() {
  return (


    <div className="dashboard">
      <Router>
        <Route path='/Login' element={Login} />
        <Route path='/Sidebar' element={Sidebar} />
        {/* <Sidebar /> */}

      </Router>
      <div className="dashboard--content">
        <Content />

      </div>
    </div>
  );


}

export default App;
