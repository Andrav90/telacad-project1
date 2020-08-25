import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Page404 from './pages/page404/Page404';
import './App.css';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='*' component={Page404} />
        </Switch>      
    );
};

export default App;