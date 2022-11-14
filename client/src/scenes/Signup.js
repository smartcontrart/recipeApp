import React, { Component } from 'react';
import SignupForm from '../components/SignupForm.js'
import {withRouter} from 'react-router-dom';

class Signup extends Component {
    

    
    render() {

        return(
            <div className="signup">
                <SignupForm/>   
                <a href="/resend_confirmation_email">Resend confirmation email</a> 
            </div>
            )
        }

}

  export default withRouter(Signup);