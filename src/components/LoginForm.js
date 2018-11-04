import React, {Component} from "react";
import {registerUser} from "./../functions/user.fns";
import { connect } from "react-redux";

const SubmitButton = ({text}) => <button type="submit" className="button button-submit">{text}</button>

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: {},
            register: {}
        }
    }

    onChange(e) {
        const {name, value} = e.target;

        this.setState(state => {
            return Object.assign({}, state, {
                register: Object.assign({}, state.register, {
                    [name]: value
                })
            })
        }, () => console.log(this.state));
    }

    register(e) {
        e.preventDefault();

        registerUser(this.props.dispatch, this.state.register, () => {
            
        }, () => {

        });
    }

    login(e) {

    }

    render() {
        return (
            <div>
                {
                    this.props.type === "login" ?
                    (
                    <form onSubmit={this.login.bind(this)} className="form-container" action={this.props.action}>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" onChange={this.onChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="password" placeholder="Пароль" onChange={this.onChange.bind(this)} />
                    </div>
                    <SubmitButton text={"Увійти"} />
                    </form>
                    ): 
                    (
                    <form onSubmit={this.register.bind(this)} className="form-container" action={this.props.action}>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" onChange={this.onChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="first_name" placeholder="Ім'я" onChange={this.onChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="last_name" placeholder="Прізвище" onChange={this.onChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Пароль" onChange={this.onChange.bind(this)} />
                    </div>  
                    <div className="form-group">
                        <input type="password" name="retry_password" placeholder="Повторіть пароль" onChange={this.onChange.bind(this)} />
                    </div>    
                    <SubmitButton text={"Зареєструватись"} />
                    </form>
                    )
                }
            </div>
        );  
    }
}


export default connect()(LoginForm);