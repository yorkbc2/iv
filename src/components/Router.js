import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
    Login,
    DashboardHome,
    DashboardMedicine
} from "./../pages";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={DashboardHome} />
                    <Route path="/medicine" component={DashboardMedicine} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;