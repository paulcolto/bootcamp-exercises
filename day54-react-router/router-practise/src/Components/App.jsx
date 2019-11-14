import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { History } from "./../history.js";

import Home from './Home.jsx';
import About from './About.jsx';
import Contacts from './Contacts.jsx';

const App = props => {
    return (
        <div className="container">
            <Router>
                <div className="navbar">
                    <Link to="/home">Home</Link>
                    <br></br>
                    <Link to="/about">About</Link>
                    <br></br>
                    <Link to="/contacts">Contacts</Link>
                    <br></br>
                </div>

                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contacts" component={Contacts}></Route>
                </Switch>

            </Router>
        </div >
    )
}

export default App