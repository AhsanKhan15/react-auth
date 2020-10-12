import React from 'react';
import Auth from './components/Auth';
import Home from './components/Home';
import About from './components/About';
import Protected from './components/Protected';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Listing from './components/Listing';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
       <Nav/>
        <Switch>
          <Route path="/about">
          <Protected component={About}/>
          </Route>
          <Route path="/home">
          <Protected component={Home}/>
          </Route>
          <Route path="/list">
          <Protected component={Listing}/>
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
