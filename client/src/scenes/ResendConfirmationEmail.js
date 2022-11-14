import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ResendConfirmationEmailFrom from '../components/ResendConfirmationEmailFrom.js'

class ResendConfirmationEmail extends Component {
    

    render() {

        return(
            <div className="requestPasswordReset">
                <ResendConfirmationEmailFrom/>
            </div>
            )
        }

}

  export default withRouter(ResendConfirmationEmail);