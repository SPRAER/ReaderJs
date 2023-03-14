import React from "react";
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">

                        <div className="main-row-text">
                            <input type="text" placeholder="login"/>
                            <input type="text" placeholder="password"/>
                            <button>
                                <Link to={"/home"} className="btn">
                                    Войти
                                </Link>
                            </button>

                        </div>

            </section>
        );
    }
}

export default Login;