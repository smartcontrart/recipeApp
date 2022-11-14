import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RequestPasswordResetFrom from '../components/RequestPasswordResetFrom.js'

class RequestPasswordReset extends Component {
    

    render() {

        return(
            <div className="requestPasswordReset">
                <RequestPasswordResetFrom/>
            </div>
            )
        }

}

  export default withRouter(RequestPasswordReset);