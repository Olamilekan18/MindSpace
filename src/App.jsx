import React from 'react';

import HomePage from './Pages/Home.jsx'
import AccountPage from './Pages/Account.jsx';
import Login from './Pages/Login.jsx'
import MoodGraph from './Pages/MoodGraph.jsx';
import MoodTracker from './Pages/MoodTracker.jsx';
import { Link, Route, BrowserRouter as  Router, Routes } from "react-router-dom";
function App() {
    return (
        <div className="App">
          <Router>
            <HomePage/>
            <Routes>
                <Route exact path='C:\Users\PC\Desktop\SafeSpace 2\src\Pages\Account.jsx' element = {<AccountPage/>} />
            </Routes>
          </Router>
          {/* <HomePage/> */}
        </div>
    );
}

export default App;
