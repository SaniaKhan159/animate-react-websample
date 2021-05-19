import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export const RouteConfig = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Router>
    )
}

export default RouteConfig;