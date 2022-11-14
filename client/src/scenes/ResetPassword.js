import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ResetPasswordForm from '../components/ResetPasswordForm.js'

class ResetPassword extends Component {
    

    render() {

        return(
            <div className="resetPassword">
                <ResetPasswordForm/>
            </div>
            )
        }

}

  export default withRouter(ResetPassword);