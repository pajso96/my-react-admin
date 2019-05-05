import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Dashboard} from './dashboard/Dashboard';
import Header from "./header/Header";
import {UserContainer} from "./users/UserContainer";

export class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="app-container">
                <div className="navbar">
                    <Header />
                </div>
                <div className="content">
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/users/" component={UserContainer} />
                </div>
                </div>
            </Router>
        );
    }
}