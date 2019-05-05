import * as React from "react";
import Header from "../header/Header";
import {Route} from "react-router";
import {Dashboard} from "../dashboard/Dashboard";
import {BrowserRouter as Router} from "react-router-dom";
import {UserList} from "./UserList";
import UserShow from "./UserShow";

export class UserContainer extends React.Component{
    public render(): any {
        return (
            <Router>
                    <div className="list">
                        <Route exact path="/users/" component={UserList} />
                        <Route exact path="/users/:id" component={UserShow} />
                    </div>
            </Router>
        );
    }
}