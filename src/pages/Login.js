import React, {Component} from "react";
import LoginForm from "./../components/LoginForm";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: "login"
        };
    }
    toggleMode(e) {
        if (e && 'preventDefault' in e)
            e.preventDefault();
        const mode = this.state.mode;

        this.setState({
            mode: (mode === "login"? "register": "login")
        });
    }
    render() {
        return (
            <div className="login">
                <div className="card">
                    <h1 align="center">Я<span className="main-color">Вінничанин</span></h1>
                    <p>Для того, аби отримати повний функціонал додатку "ЯВінничанин", Вам потрібно увійти або зарєструватися (якщо Ви не робили цього раніше) за допомогою форми нижче.</p>
                    {
                        this.state.mode === "login"? (
                            <p><a href="#" onClick={this.toggleMode.bind(this)}>Зареєструйтесь</a>, якщо у вас ще немає аккаунта</p>
                        ):(<p><a href="#" onClick={this.toggleMode.bind(this)}>Увійдіть</a>, якщо Ви вже зареєстровані</p>)
                    }
                    <LoginForm history={this.props.history} type={this.state.mode} />
                </div>
            </div>
        );
    }
}

export default Login;