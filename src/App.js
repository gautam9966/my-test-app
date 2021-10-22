import React from "react";
import "./App.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import NotFound from "./components/pages/NotFount";
import AddUser from "./components/Users/AddUser";
import EditUser from "./components/Users/EditUser";
import User from "./components/Users/User";

function App() {
    return ( 
        <Router>
            <div className="App">
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/users/add" component={AddUser} />
                    <Route exact path="/users/edit/:id" component={EditUser} />
                    <Route exact path="/users/:id" component={User} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;