import React, {Component} from "react";
import { connect } from "react-redux";
import { checkUser } from "./../functions/user.fns"
import {Link} from "react-router-dom";

class Dashboard extends Component {
    componentDidMount() {
        checkUser(this.props.dispatch, result => {
            if (!result) this.props.history.push("/login");
        });
    }
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-aside">
                    <Link to={"/"} className="dashboard-aside-element">
                        <img src="/images/home.png" width="64px" height="auto" />
                        <span>Головна</span>
                    </Link> 
                    <Link to={"/medicine"} className="dashboard-aside-element">
                        <img src="/images/medicine.png" width="64px" height="auto" />
                        <span>Медична картка</span>
                    </Link>  
                    <Link to={"/afisha"} className="dashboard-aside-element">
                        <img src="/images/afisha.png" width="64px" height="auto" />
                        <span>Розваги</span>
                    </Link>
                </div>
                <div className="dashboard-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(state => ({user: state.user}))(Dashboard);