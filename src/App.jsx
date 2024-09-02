import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/Home';
import AccountPage from './Pages/Account';
import Resources from './Pages/Resources';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/account">Account</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path = '/Resources' element = {<Resources/>} />
      </Routes>
    </Router>
  );
}

export default App;
