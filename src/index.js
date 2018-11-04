import { render } from "react-dom";
import React, {Component} from "react";
import Router from "./components/Router";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

render(<App />, document.querySelector("#app"));