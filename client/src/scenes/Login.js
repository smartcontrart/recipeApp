import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.js'
import './Login.css'
import {withRouter} from 'react-router-dom';

class Login extends Component {
    

    render() {

        return(
            <div className="login">
                <LoginForm/>
                <a href="/begin_reset_password">Forgot password?</a>
                <br/>
                <a href="/resend_confirmation_email">Resend confirmation email</a>
            </div>
            )
        }

}

  export default withRouter(Login);