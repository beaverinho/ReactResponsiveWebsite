import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {  
  return (
    
    <Router>
         <Navbar />
         <Switch>
           <Route exact path='/' />
         </Switch>
    </Router>
    
  );
}

export default App;
