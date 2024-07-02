import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import All from './pages/All';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>All</NavLink>
          <NavLink to="/fullstack" className={({ isActive }) => (isActive ? 'active' : '')}>Full Stack Development</NavLink>
          <NavLink to="/datascience" className={({ isActive }) => (isActive ? 'active' : '')}>Data Science</NavLink>
          <NavLink to="/cybersecurity" className={({ isActive }) => (isActive ? 'active' : '')}>Cyber Security</NavLink>
          <NavLink to="/career" className={({ isActive }) => (isActive ? 'active' : '')}>Career</NavLink>
        </nav>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
